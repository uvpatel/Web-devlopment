import { useState } from 'react';
import ConnectWallet from './components/ConnectWallet';
import DepositForm from './components/DepositForm';
import VaultList from './components/VaultList';
import WithdrawForm from './components/withdraw';

function App() {
  const [signer, setSigner] = useState(null);

  return (
    <div style={{ padding: '2rem', maxWidth: '800px', margin: '0 auto' }}>
      <h1>⏳ TimeLockedVault</h1>
      <ConnectWallet setSigner={setSigner} />
      {signer && (
        <>
          <DepositForm signer={signer} />
          <VaultList 
            signer={signer}
            render={(refreshVaults) => (
              <WithdrawForm signer={signer} onSuccess={refreshVaults} />
            )}
          />
        </>
      )}
    </div>
  );
}

export default App;
