require("@nomiclabs/hardhat-waffle");
require('dotenv').config()
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
const API=process.env.ALCHEMY_API_URL
const key = process.env.PRIVATE_KEY
module.exports = {
  solidity: "0.8.4",
  networks:{
    rinkbey:{
      url:API,
      accounts:[key]
    }
  }
};
