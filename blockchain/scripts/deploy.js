const { ethers } = require('hardhat');

async function main() {
  const whitelistContract = await ethers.getContractFactory('Whitelist');

  // 10 is the Maximum number of whitelisted addresses allowed
  const deployedWhitelistContract = await whitelistContract.deploy(10);

  await deployedWhitelistContract.deployed();

  console.log('Contract deployed to:', deployedWhitelistContract.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
