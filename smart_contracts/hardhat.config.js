require("@nomiclabs/hardhat-waffle");

module.exports = {
  solidity: "0.8.0",
  networks: {
    ropsten: {
      url: "https://eth-ropsten.alchemyapi.io/v2/O8WslM2Vb5CJQVG0-2KYKEdAw2l9cm0W",
      accounts: [
        "8ca11822b8d8eb56d1b102c2776d85ccb440b9a301b6496d6f4621109a6a6295",
      ],
    },
  },
};
