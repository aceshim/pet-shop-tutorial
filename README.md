# pet-shop-tutorial

https://www.trufflesuite.com/tutorials/pet-shop

### Quick Start
1. Install packages
```bash
npm install truffle -g
npm install
```
2. Open Ganache (or ganache-cli)
3. Deploy contracts
```bash
truffle compile
truffle migrate
```
4. Run React
```bash
npm start
```
5. Metamask
Make sure your Ganache account is linked to metamask

6. Adopt your favorite pet!

### 0. Setup

Visit https://www.trufflesuite.com/ for downloading all three frameworks. (Truffle, Ganache, Drizzle)

Prerequisite
- Git
- Python
- Node.js
- (Optional) Visual Code with Solidity / Material Icon Theme 
- Metamask

```bash
npm install truffle -g
npm install drizzle --save

truffle unbox pet-shop-tutorial
```
<b>For Windows</b>
- Python 2.7
- Node.js 10.x
https://spin.atomicobject.com/2019/03/27/node-gyp-windows/

<b>For Ubuntu</b>
- Donwload Ubuntu
http://mirror.kakao.com/ubuntu-releases/xenial/
https://www.codeooze.com/blockchain/ethereum-dev-environment-2019/
https://medium.com/@techgeek628/how-to-install-and-execute-truffle-on-an-ubuntu-16-04-7ebb3444707e

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

### Troubleshoot

<b>Windows</b>
You might get firewall blocking the port. Please make a new inbound rule to open port 7545.