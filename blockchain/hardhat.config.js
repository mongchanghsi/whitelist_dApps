require('@nomiclabs/hardhat-waffle');
require('dotenv').config({ path: '.env' });

const ALCHEMY_API_KEY = process.env.ALCHEMY_API_KEY;
const RINKEBY_PRIVATE_KEY = process.env.RINKEBY_PRIVATE_KEY;

module.exports = {
  solidity: '0.8.4',
  networks: {
    rinkeby: {
      url: `https://eth-rinkeby.alchemyapi.io/v2/${ALCHEMY_API_KEY}`,
      chainId: 4,
      accounts: [RINKEBY_PRIVATE_KEY],
    },
  },
};
