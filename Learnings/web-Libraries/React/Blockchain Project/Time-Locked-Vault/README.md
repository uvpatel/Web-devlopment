# ⏳ Time Locked Vault

Time Locked Vault is a decentralized application (dApp) that lets users securely lock their ETH for a specified period. After the lock period expires, users can withdraw their funds—either fully or partially. This is useful for savings, trustless escrow, or delayed payments.

## 🚩 How It Works

- **Deposit ETH:** Choose an amount and a lock duration. Your ETH is stored in a vault and cannot be withdrawn until the timer expires.
- **View Vaults:** See all your vaults, their balances, and unlock times in the frontend.
- **Withdraw:** After the lock period, withdraw all or part of your ETH.
- **Extend Lock:** The contract owner can extend the lock time for any vault.

## 🛠 Tech Stack

- **Solidity:** Smart contract for vault logic
- **Hardhat:** Development, deployment, and testing
- **React:** Frontend user interface
- **ethers.js:** Blockchain interaction
- **MetaMask:** Wallet connection

## 📦 Installation & Setup

1. **Clone the repository:**
    ```bash
    git clone <your-repo-url>
    cd time-locked-vault
    ```

2. **Install backend dependencies:**
    ```bash
    npm install
    ```

3. **Install frontend dependencies:**
    ```bash
    cd time-locked-vault-frontend
    npm install
    ```

4. **(Optional) Configure environment variables:**
    - Create a `.env` file for private keys and API keys if deploying to testnet/mainnet.

## 🚀 Running the Project Locally

1. **Start a local blockchain:**
    ```bash
    npx hardhat node
    ```

2. **Deploy the smart contract:**
    ```bash
    npx hardhat run scripts/deploy.js --network localhost
    ```

3. **Start the frontend:**
    ```bash
    cd time-locked-vault-frontend
    npm run dev
    ```

4. **Open your browser:**  
   Visit [http://localhost:5173](http://localhost:5173) (or the port shown in your terminal).

## 🧑‍💻 Usage Example

1. **Connect your wallet** using MetaMask.
2. **Deposit ETH:**  
   - Enter the amount and lock time (in seconds).
   - Click "Deposit".
3. **View Vaults:**  
   - See your vaults listed with amount and unlock time.
4. **Withdraw:**  
   - Enter the vault index and click "Withdraw" (after unlock time).
   - For partial withdrawal, enter the amount and select "Partial Withdrawal".
5. **Extend Lock:**  
   - If you are the contract owner, you can extend the lock time for any vault.

## 💼 Smart Contract Functions

- `deposit(uint _lockDurationInSeconds)`  
  Create a new vault with a custom lock duration.
- `withdraw(uint _vaultIndex)`  
  Withdraw all funds from a vault after the lock period.
- `partialWithdraw(uint _vaultIndex, uint _amount)`  
  Withdraw a specific amount from a vault.
- `getVaults(address _user)`  
  View all vaults for a user.
- `isUnlocked(uint _vaultIndex)`  
  Check if a vault is unlocked.
- `getTimer(uint _vaultIndex)`  
  Get remaining lock time for a vault.
- `extendLock(uint _vaultIndex, uint _extendedTime)`  
  Owner-only: extend the lock time for a vault.

## 🔒 Security Features

- Re-entrancy protection
- Minimum lock time enforcement
- Owner-only functions for lock extension
- Safe withdrawal pattern

## 🧪 Testing

Run the test suite:
```bash
npx hardhat test
```

## 📚 Folder Structure

```
contracts/                # Solidity smart contracts
scripts/                  # Deployment and utility scripts
time-locked-vault-frontend/
  ├── src/
  │   ├── components/     # React components
  │   ├── hooks/          # Custom React hooks
  │   └── index.css       # Global styles
  └── public/             # Static assets
```

## 📝 License

MIT License

---

**Questions or issues?**  
Open an issue or reach out via [GitHub Issues](https://github.com/your-repo-url/issues).
