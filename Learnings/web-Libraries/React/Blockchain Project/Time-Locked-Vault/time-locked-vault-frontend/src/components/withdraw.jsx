import { useState } from 'react';
import { ethers } from 'ethers';
import { getVaultContract } from '../hooks/useContract';

const WithdrawForm = ({ signer, onSuccess }) => {
  const [vaultIndex, setVaultIndex] = useState('');
  const [amount, setAmount] = useState('');
  const [txHash, setTxHash] = useState('');
  const [isPartial, setIsPartial] = useState(false);

  const handleWithdraw = async () => {
    if (!signer) return alert("Wallet not connected");
    
    try {
      const contract = getVaultContract(signer);
      let tx;

      if (isPartial && amount) {
        const ethAmount = ethers.parseEther(amount);
        tx = await contract.partialWithdraw(Number(vaultIndex), ethAmount);
      } else {
        tx = await contract.withdraw(Number(vaultIndex));
      }

      const receipt = await tx.wait();
      setTxHash(receipt.hash);
      if (onSuccess) onSuccess();
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div style={{ marginTop: '2rem' }}>
      <h2>💸 Withdraw from Vault</h2>
      <input
        type="number"
        placeholder="Vault Index"
        value={vaultIndex}
        onChange={(e) => setVaultIndex(e.target.value)}
      />
      <div>
        <label>
          <input
            type="checkbox"
            checked={isPartial}
            onChange={(e) => setIsPartial(e.target.checked)}
          />
          Partial Withdrawal
        </label>
      </div>
      {isPartial && (
        <input
          placeholder="Amount in ETH"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
      )}
      <button onClick={handleWithdraw}>
        {isPartial ? 'Partial Withdraw' : 'Withdraw All'}
      </button>

      {txHash && <p>✅ Tx Sent: {txHash.slice(0, 12)}...</p>}
    </div>
  );
};

export default WithdrawForm;
