import React, { useState, useEffect } from 'react';
import { getVaultContract } from '../hooks/useContract';
import { ethers } from 'ethers';

const VaultList = ({ signer, render }) => {
  const [vaults, setVaults] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchVaults = async () => {
    if (!signer) return;
    try {
      const contract = getVaultContract(signer);
      const userAddress = await signer.getAddress();
      
      const userVaults = await contract.getVaults(userAddress);
      console.log("User vaults:", userVaults);
      setVaults(userVaults);
      
    } catch (error) {
      console.error('Error:', error);
      setVaults([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchVaults();
  }, [signer]);

  if (loading) return <div>Loading vaults...</div>;

  return (
    <div style={{ marginTop: '2rem' }}>
      {render && render(fetchVaults)}
      <h2>🔒 Your Vaults</h2>
      <div className="vault-list">
        {vaults.length === 0 ? (
          <p>No vaults found</p>
        ) : (
          vaults.map((vault, index) => (
            <div key={index} className="vault-item">
              <p>Amount: {ethers.formatEther(vault.amount)} ETH</p>
              <p>Lock Time: {new Date(Number(vault.unlockTime) * 1000).toLocaleString()}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default VaultList;