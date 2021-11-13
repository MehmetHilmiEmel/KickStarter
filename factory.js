import web3 from "./web3";
import CampaignFactory from "./build/CampaignFactory.json";

const instance =new web3.eth.Contract(
    JSON.parse(CampaignFactory.interface),
    '0xad1A1252420380437e010F7CCF6E88F54A39C0F4'
);

export default instance;