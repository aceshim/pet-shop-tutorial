# pet-shop-tutorial

https://www.trufflesuite.com/tutorials/pet-shop

### 0. Setup

Visit https://www.trufflesuite.com/ for downloading all three frameworks. (Truffle, Ganache, Drizzle)

Prerequisite
- Git
- Python
- Node.js
- (Optional) Visual Code with Solidity / Material Icon Theme 

```bash
npm install truffle -g
npm install drizzle --save

truffle unbox pet-shop-tutorial
```

### 1. Truffle

- Create solidity files under contract directory
- Truffle compile
- Truffle migrate

### 2. Web3

- Use jQuery and web3 API
- Install Metamask
- Ganache
- Check Metamask transaction

### 3. Drizzle

```bash
mkdir app
cd app
npm install react react-dom react-scripts 
npm install drizzle drizzle-react
```

<b>truffle-config.js</b>
Contracts need to be inside `src` directory. 
```
contracts_build_directory: path.join(__dirname, "src/contracts"),
```

<b>drizzleOptions.js</b>
```
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
    Adoption: ["Adopted"],
  },
  polls: {
    accounts: 1500,
  },
};

export default options;
```

<b>Show Account Using Drizzle</b>

<b>Make Header</b>

<b>Make Pet Template</b>