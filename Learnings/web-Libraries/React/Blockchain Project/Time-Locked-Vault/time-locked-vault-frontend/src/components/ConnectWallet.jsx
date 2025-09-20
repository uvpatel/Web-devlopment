import { useState, useEffect } from 'react';
import { ethers } from 'ethers';

function ConnectWallet({ setSigner }) {
  const [address, setAddress] = useState('');

  const connectWallet = async () => {
    if (!window.ethereum) return alert("Install MetaMask");

    const provider = new ethers.BrowserProvider(window.ethereum);
    await provider.send("eth_requestAccounts", []);
    const signer = await provider.getSigner();
    setSigner(signer);
    setAddress(await signer.getAddress());
  };

  return (
    <div>
      {address ? (
        <p>Connected: {address.slice(0, 6)}...{address.slice(-4)}</p>
      ) : (
        <button onClick={connectWallet}>Connect Wallet</button>
      )}
    </div>
  );
}

export default ConnectWallet;
