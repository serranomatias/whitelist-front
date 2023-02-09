const { ethers } = require('hardhat');

async function main() {

  /*
  A ContractFactory in ethers.js is an abstraction used to deploy new smart contracts,
  so whitelistContract here is a factory for instances of our Whitelist contract.
  */
  const WhitelistContract = await ethers.getContractFactory("Whitelist");

  // Here we deploy the contract

  const deployedWhitelistContract = await WhitelistContract.deploy(10);
  // 10 is the Maximum number of whitelisted addresses allowed

  // Wait for it to finishing deploying
  await deployedWhitelistContract.deployed();

  // print the address of the deployed contract
  console.log("Whitelist Contract Address: ", deployedWhitelistContract.address)
}

 // Call the main funciton and catch if there is any error

 main()
 .then(()=> process.exit(0))
 .catch((error) => {
  console.error(error);
  process.exit(1);
 });