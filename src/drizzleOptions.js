import Adoption from "./contracts/Adoption.json";

const options = {
  web3: {
    block: false,
    fallback: {
      type: "ws",
      url: "ws://127.0.0.1:8545",
    },
  },
  contracts: [Adoption],
  events: {
    // Adoption: ["Adopted"],
  },
  polls: {
    accounts: 1500,
  },
};

export default options;