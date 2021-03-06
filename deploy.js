const HDWalletProvider = require("truffle-hdwallet-provider");
const Web3 = require("web3");
const compiledFactory= require('./build/CampaignFactory.json');

const provider = new HDWalletProvider(
  "option witness input few duty lucky way pipe cabin pill range spice",
  // remember to change this to your own phrase!
  "https://rinkeby.infura.io/v3/0c1965925aad4b07bd4a61e270c070f8"
  // remember to change this to your own endpoint!
);
const web3 = new Web3(provider);

const deploy = async () => {
  const accounts = await web3.eth.getAccounts();

  console.log("Attempting to deploy from account", accounts[0]);

  const result = await new web3.eth.Contract(JSON.parse(compiledFactory.interface))
    .deploy({ data: compiledFactory.bytecode })
    .send({ gas: '1000000', gasPrice: '5000000000', from: accounts[0] });

  console.log("Contract deployed to", result.options.address);
};
deploy();


