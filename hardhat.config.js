require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */

require("dotenv").config();
const { PRIVATE_KEY } = process.env;
module.exports = {
  solidity: "0.8.20",
  defaultNetwork: "sepolia",
  networks: {
    hardhat: {},
    sepolia: {
      url: "https://eth-sepolia.g.alchemy.com/v2/vyoAlQ0J8eyQS-E5L24q0ZLGAPsR7kfl",
      accounts: [`0x${PRIVATE_KEY}`],
    },
  },
  etherscan: {
    apiKey: {
      sepolia: "YMGKXAS3ECPJB48XWJQM1A8KER5S265PM3",
    },
  },
};
