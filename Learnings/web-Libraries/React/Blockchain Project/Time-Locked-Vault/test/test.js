const { expect } = require('chai');
const { lock } = require('ethers');
const { ethers } = require('hardhat');

describe('TimeLockedVault', function() {
    let owner, user1;
    let contract;

    beforeEach(async function(){
        [owner, user1] = await ethers.getSigners();
        const TimeLockedVault = await ethers.getContractFactory('TimeLockVault');
        contract = await TimeLockedVault.deploy();
        await contract.waitForDeployment();
    });

    describe('deposit()', function() {
        const oneMinute = 60;
        it('should accept a valid deposit with correct time', async function(){
            const amount = ethers.parseEther('1');
            const lockTime = oneMinute + 10;
            const tx = await contract.connect(user1).deposit(lockTime, {value: amount});

            const vaults = await contract.connect(user1).viewAllVaults();
            expect(vaults.length).to.equal(1);
            expect(vaults[0].amount).to.equal(amount);
        });

        it('should reject deposit with 0 eth', async () => {
            await expect(contract.connect(user1).deposit(60, {value: 0}))
                .to.be.revertedWith("Deposit amount must be greater than zero");

        });

        it('should reject deposit with lock time less than 60 sec', async () => {
            await expect(
                contract.connect(user1).deposit(30, {value: ethers.parseEther('1')})
            ).to.be.revertedWith("Unlock time must be at least 1 minute");
        });

        it('should correctly set the vault state', async () => {
            const amount = ethers.parseEther('1');
            const lockTime = oneMinute + 10;

            const tx = await contract.connect(user1).deposit(lockTime, {value: amount});

            const vaults = await contract.connect(user1).viewAllVaults();
            expect(vaults.length).to.equal(1);
            expect(vaults[0].amount).to.equal(amount);
        });

        it('should emit a deposit event', async () => {
            const amount = ethers.parseEther('1');
            const lockTime = oneMinute + 10;
            const now = (await ethers.provider.getBlock('latest')).timestamp;
            const expectedUnlockTime = now + lockTime;

            const tx = await contract.connect(user1).deposit(lockTime, { value: amount });
            const receipt = await tx.wait();

            const event = receipt.logs
                .map(log => contract.interface.parseLog(log))
                .find(e => e.name === "Deposited");

            expect(event.args[0]).to.equal(user1.address);
            expect(event.args[1]).to.equal(amount);
            expect(event.args[2]).to.be.closeTo(expectedUnlockTime, 2); // fix here 
        });
    });

    describe('withdraw()', () => {
        let vaultIndex, amount;

        beforeEach(async () => {
            const lockTime = 70;
            amount = ethers.parseEther('1');
            await contract.connect(user1).deposit(lockTime, {value: amount});
            vaultIndex = 0; // Assuming the first vault is the one we just created

            // Wait for unlock
            await ethers.provider.send("evm_increaseTime", [lockTime + 1]);
            await ethers.provider.send("evm_mine");
        });

        it('should withdraw funds after unlock time', async () => {
            const initialBalance = await ethers.provider.getBalance(user1.address);
            const tx = await contract.connect(user1).withdraw(vaultIndex);
            const receipt = await tx.wait();

            const finalBalance = await ethers.provider.getBalance(user1.address);

            expect(finalBalance).to.gt(initialBalance);
        });

        it('should emit a withdraw event', async () => {
            const tx = await contract.connect(user1).withdraw(vaultIndex);
            const receipt = await tx.wait();

            expect(tx).to.emit(contract, 'Withdrawn').withArgs(user1.address, amount, vaultIndex);
        });

        it('should fail if invalid vault index', async () => {
            await expect(contract.connect(user1).withdraw(5))
                .to.be.revertedWith("Invalid vault index");
        });

        it('should fail if funds are still locked', async () => {
            // New deposit tx to create a new vault
            const depositTx = await contract.connect(user1).deposit(60, {value: ethers.parseEther('1')});
            const depositReceipt = await depositTx.wait();

            // Try to withdraw from the new vault before its unlock time
            await expect(contract.connect(user1).withdraw(1))
                .to.be.revertedWith("Funds are still locked"); 
        });

        it('should remove the vault if there are no funds', async () => {
            await contract.connect(user1).withdraw(vaultIndex); // Withdraw to empty the vault
            const vaults = await contract.connect(user1).viewAllVaults();
            expect(vaults.length).to.equal(0);
        });
    });

    describe('partialWithdraw() - Data Driven', function () {
        const oneETH = ethers.parseEther('1');
        const testCases = [
            {
                name: 'withdraw 0.5 ETH successfully',
                withdrawAmount: ethers.parseEther('0.5'),
                shouldRevert: false,
                expectedRemaining: ethers.parseEther('0.5'),
            },
            {
                name: 'withdraw full amount (1 ETH)',
                withdrawAmount: ethers.parseEther('1'),
                shouldRevert: false,
                expectedRemaining: ethers.parseEther('0'),
            },
            {
                name: 'withdraw more than available (1.5 ETH)',
                withdrawAmount: ethers.parseEther('1.5'),
                shouldRevert: true,
                revertMessage: 'Withdrawal amount exceeds vault balance',
            },
            {
                name: 'withdraw zero ETH',
                withdrawAmount: ethers.parseEther('0'),
                shouldRevert: true,
                revertMessage: 'Withdrawal amount must be greater than zero',
            },
        ];

        let vaultIndex = 0;

        beforeEach(async () => {
            const lockTime = 60;
            await contract.connect(user1).deposit(lockTime, { value: oneETH });

            await ethers.provider.send("evm_increaseTime", [lockTime + 1]);
            await ethers.provider.send("evm_mine");
        });

        testCases.forEach(({ name, withdrawAmount, shouldRevert, revertMessage, expectedRemaining }) => {
            it(name, async () => {
                if (shouldRevert) {
                    await expect(
                        contract.connect(user1).partialWithdraw(vaultIndex, withdrawAmount)
                    ).to.be.revertedWith(revertMessage);
                } else {
                    await contract.connect(user1).partialWithdraw(vaultIndex, withdrawAmount);
                    const vaults = await contract.connect(user1).viewAllVaults();
                    expect(vaults[0].amount).to.equal(expectedRemaining);
                }
            });
        });
    });

    describe('extendLock()', () => {
        const oneETH = ethers.parseEther('1');
        const initialLock = 70;
        let originalUnlockTime;

        beforeEach(async () => {
            const tx = await contract.connect(owner).deposit(initialLock, { value: oneETH });
            const receipt = await tx.wait();

            const block = await ethers.provider.getBlock(receipt.blockNumber);
            originalUnlockTime = block.timestamp + initialLock;
        });

        const testCases = [
            {
                title: 'should allow owner to extend unlock time',
                by: 'owner',
                extendTime: 50,
                shouldRevert: false,
            },
            {
                title: 'should fail if extend time < 0',
                by: 'owner',
                extendTime: 0,
                shouldRevert: true,
                revertMessage: 'Extended time must be greater than zero',
            },
            {
                title: 'should fail if called by non-owner',
                by: 'user1',
                extendTime: 60,
                shouldRevert: true,
                revertMessage: 'Only the owner can call this function',
            }
        ];

        testCases.map(({ title, by, extendTime, shouldRevert, revertMessage }) => {
            it(title, async () => {
                const signer = by === 'owner' ? owner : user1;

                if (shouldRevert) {
                    await expect(
                        contract.connect(signer).extendLock(0, extendTime)
                    ).to.be.revertedWith(revertMessage);
                } else {
                    const tx = await contract.connect(signer).extendLock(0, extendTime);
                    await expect(tx)
                        .to.emit(contract, 'TimeExtended')
                        .withArgs(signer.address, 0, extendTime);

                    const vaults = await contract.connect(signer).viewAllVaults();
                    expect(vaults[0].unlockTime).to.equal(originalUnlockTime + extendTime);
                }
            });
        });
    });


});
