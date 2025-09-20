// SPDX-License-Identifier: MIT
pragma solidity ^0.8.17;

contract TimeLockVault {
    // State variables
    address private owner;
    uint constant public MIN_UNLOCK_TIME = 1 minutes; // Minimum unlock time of 1 day

    struct Vault {
        uint amount;
        uint unlockTime;
    }

    mapping(address => Vault[]) private vaults; // Each address can have multiple vaults

    // Events
    event Deposited(address indexed user, uint amount, uint unlockTime);
    event Withdrawn(address indexed user, uint amount, uint vaultIndex);
    event TimeExtended(address indexed user, uint vaultIndex, uint extendedTime);

    /*
    * @dev Constructor to set the contract deployer as the owner
    * The owner can manage the vaults and withdraw funds after the unlock time
    */
    constructor() {
        owner = msg.sender; // Set the contract deployer as the owner
    }

    /*
    * @dev Modifier to restrict access to the owner of the contract
    * Only the owner can call functions that are protected by this modifier 
    */
    modifier onlyOwner() {
        require(msg.sender == owner, "Only the owner can call this function");
        _;
    }

    /*
    * @dev Function to deposit funds into a time-locked vault
    * @param _amount The amount of Ether to deposit 
    * @param _unlockTime The time in seconds after which the funds can be withdrawn
    */
    function deposit(uint _lockDurationInSeconds) external payable {
        require(msg.value > 0, "Deposit amount must be greater than zero");
        require(_lockDurationInSeconds >= MIN_UNLOCK_TIME, "Unlock time must be at least 1 minute");
        Vault memory newVault = Vault({
            amount: msg.value,
            unlockTime: block.timestamp + _lockDurationInSeconds
        });

        vaults[msg.sender].push(newVault);

        emit Deposited(msg.sender, msg.value, newVault.unlockTime);
    }

    /*
    * @dev Function to withdraw funds from a time-locked vault
    * @param _vaultIndex The index of the vault to withdraw from
    */
    function getVaults(address _user) external view returns (Vault[] memory) {
        return vaults[_user];
    }

    function viewAllVaults() external view returns (Vault[] memory) {
        return vaults[msg.sender];
    }

    function withdraw(uint _vaultIndex) external {
        require(_vaultIndex < vaults[msg.sender].length, "Invalid vault index");

        Vault storage userVault = vaults[msg.sender][_vaultIndex];
        require(block.timestamp >= userVault.unlockTime, "Funds are still locked");
        require(userVault.amount > 0, "No funds to withdraw");

        uint amountToWithdraw = userVault.amount;
        userVault.amount = 0; // Set amount to zero to prevent re-entrancy attacks

        // Transfer the funds to the user
        (bool success, ) = msg.sender.call{value: amountToWithdraw}("");
        require(success, "Transfer failed");

        // Remove the vault entry if the amount is zero
        if (userVault.amount == 0) {
            removeVault(_vaultIndex);
        }

        emit Withdrawn(msg.sender, amountToWithdraw, _vaultIndex);
    }

    function removeVault(uint _index) internal {
        require(_index < vaults[msg.sender].length, "Invalid index");

        Vault[] storage userVaults = vaults[msg.sender];

        userVaults[_index] = userVaults[userVaults.length - 1];

        // Reduce the size of array in place
        vaults[msg.sender].pop();
    }

    function partialWithdraw(uint _vaultIndex, uint _amount) external {
        require(_vaultIndex < vaults[msg.sender].length, "Invalid vault index");
        Vault storage userVault = vaults[msg.sender][_vaultIndex];
        require(block.timestamp >= userVault.unlockTime, "Funds are still locked");
        require(_amount > 0, "Withdrawal amount must be greater than zero");
        require(userVault.amount > 0, "No funds to withdraw");
        require(_amount <= userVault.amount, "Withdrawal amount exceeds vault balance");

        userVault.amount -= _amount; // Reduce the vault amount

        // Transfer the specified amount to the user
        (bool success, ) = msg.sender.call{value: _amount}("");
        require(success, "Transfer failed");

        emit Withdrawn(msg.sender, _amount, _vaultIndex);
    }

    function extendLock(uint _vaultIndex, uint _extendedTime) external onlyOwner {
        require(_vaultIndex < vaults[msg.sender].length, "Invalid vault index");
        require(_extendedTime > 0, "Extended time must be greater than zero");
        vaults[msg.sender][_vaultIndex].unlockTime += _extendedTime;
        emit TimeExtended(msg.sender, _vaultIndex, _extendedTime);
    }

    function getTimer(uint _vaultIndex) external view returns (uint) {
        require(_vaultIndex < vaults[msg.sender].length, "Invalid vault index");
        Vault storage userVault = vaults[msg.sender][_vaultIndex];

        if(block.timestamp >= userVault.unlockTime) {
            return 0; // Timer has expired
        } else {
            return userVault.unlockTime - block.timestamp; // Return remaining time in seconds
        }
    }

    function isUnlocked(uint _vaultIndex) external view returns (bool) {
        require(_vaultIndex < vaults[msg.sender].length, "Invalid vault index");
        Vault storage userVault = vaults[msg.sender][_vaultIndex];
        return block.timestamp >= userVault.unlockTime;
    }

    function totalLockedBalance(address user) external view returns (uint total) {
        Vault[] storage userVaults = vaults[user];
        for (uint i = 0; i < userVaults.length; i++) {
            total += userVaults[i].amount;
        }
    }

    function getOwner() external view returns (address) {
        return owner;
    }
}