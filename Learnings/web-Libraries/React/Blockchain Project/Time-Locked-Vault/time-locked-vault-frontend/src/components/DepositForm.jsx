import { useState } from 'react';
import { ethers } from 'ethers';
import { getVaultContract } from '../hooks/useContract';

function DepositForm({ signer }) {
  const [amount, setAmount] = useState('');
  const [lockTime, setLockTime] = useState('');
  const [txHash, setTxHash] = useState('');

  const handleDeposit = async () => {
    if (!signer) return alert("Wallet not connected");

    const contract = getVaultContract(signer);

    const ethAmount = ethers.parseEther(amount);
    const tx = await contract.deposit(Number(lockTime), { value: ethAmount });
    const receipt = await tx.wait();

    setTxHash(receipt.hash);
  };

  return (
    <div style={{ marginTop: '2rem' }}>
      <h2>💰 Deposit into Vault</h2>
      <input
        placeholder="Amount in ETH"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <input
        placeholder="Lock time (in seconds)"
        value={lockTime}
        onChange={(e) => setLockTime(e.target.value)}
      />
      <button onClick={handleDeposit}>Deposit</button>

      {txHash && <p>✅ Tx Sent: {txHash.slice(0, 12)}...</p>}
    </div>
  );
}

export default DepositForm;
