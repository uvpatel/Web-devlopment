import { ethers } from 'ethers';
import TimeLockVaultArtifact from '../../../artifacts/contracts/time_lock_vault.sol/TimeLockVault.json';

const CONTRACT_ADDRESS = "0x5FbDB2315678afecb367f032d93F642f64180aa3";

export function getVaultContract(signer) {
  if (!signer) return null;
  return new ethers.Contract(CONTRACT_ADDRESS, TimeLockVaultArtifact.abi, signer);
}
