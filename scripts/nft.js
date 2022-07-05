// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// When running the script with `npx hardhat run <script>` you'll find the Hardhat
// Runtime Environment's members available in the global scope.
const hre = require("hardhat");
const { ethers, waffle, network, upgrades } = hre;

async function main() {
  const [deployer] = await ethers.getSigners();
  const NFT_Factory = await hre.ethers.getContractFactory("MyNFT", deployer);
  const NFT = await NFT_Factory.deploy(
    "https://gist.githubusercontent.com/EasonC13/0593d37e0b27225a7e5b7fb34a3e1492/raw/3ac770ea04b01404ab3ad15c0ffa968db7b23055/gistfile1.txt"
  );

  await NFT.deployed();
  console.log("NFT deployed to:", NFT.address);

  tx = await NFT.mint(
    deployer.address,
    "https://gist.githubusercontent.com/EasonC13/288b5d3ce319af736fe0a619a224d3ba/raw/b267c7897ba292059a8c3a5d86bb5ee860bef235/exnftmetadata"
  );
  await tx.wait();

  console.log(
    `view your NFT at https://testnets.opensea.io/assets/mumbai/${NFT.address}/0`
  );
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
