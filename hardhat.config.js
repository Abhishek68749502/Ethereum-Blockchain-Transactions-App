//https://eth-sepolia.g.alchemy.com/v2/D4fhl2ofpXGEuP20zMu0EZxMKID7VeVi

require('@nomiclabs/hardhat-waffle');
require("@nomiclabs/hardhat-ethers");

module.exports = {
    solidity: '0.8.15',
    networks: {
        sepolia: {
            url:'https://eth-sepolia.g.alchemy.com/v2/D4fhl2ofpXGEuP20zMu0EZxMKID7VeVi' ,
            accounts: ['abe73a1a08700664a376fcb098398dddbd766f07ba23636b2cbc55964f9aa07a']
        }
    }
}