async function main() {
  const MyToken = await ethers.deployContract("contracts/MyToken.sol:MyToken");
  const token = await MyToken.waitForDeployment();
  console.log("Deploying Contract...");
  console.log("Contract deployed to address:", await token.getAddress());
}
// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });

// const hre = require("hardhat");

// async function main() {
//   console.log("Deploying Contract...");
//   const horoscope = await hre.ethers.deployContract(
//     "contracts/HoroscopeNFT.sol:HoroscopeNFT"
//   );
//   console.log("Contract deployed to address:", horoscope.target);
// }

// // We recommend this pattern to be able to use async/await everywhere
// // and properly handle errors.
// main()
//   .then(() => process.exit(0))
//   .catch((error) => {
//     console.error(error);
//     process.exit(1);
//   });
