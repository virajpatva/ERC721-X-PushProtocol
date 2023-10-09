import { ethers } from "hardhat";

async function main() {
  const NFTContract = await ethers.deployContract("PushNFT");

  await NFTContract.waitForDeployment();

  console.log(`NFT contract is deployed at ETH ${NFTContract.target}`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
