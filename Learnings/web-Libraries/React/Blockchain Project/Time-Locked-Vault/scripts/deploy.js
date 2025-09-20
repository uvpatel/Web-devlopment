const { ethers } = require("hardhat");

async function main() {
    // Get the contract factory for splitter
    const TimeLockVault = await ethers.getContractFactory("TimeLockVault");
    const timeLockVault = await TimeLockVault.deploy();
    await timeLockVault.waitForDeployment();

    console.log("TimeLockVault deployed to:", timeLockVault.target);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });