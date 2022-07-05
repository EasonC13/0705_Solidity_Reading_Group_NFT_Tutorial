require("@nomiclabs/hardhat-waffle");

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: {
    version: "0.8.1",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },
  defaultNetwork: "hardhat",
  networks: {
    hardhat: {},
    mumbai: {
      url: "YOUR_INFURA_URL",
      accounts: {
        mnemonic:
          // replace to your mnemonic
          "test test test test test test test test test test test junk",
      },
    },
  },
};
