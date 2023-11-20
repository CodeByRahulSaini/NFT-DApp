# NFT-DApp


This project is about claiming or buying an NFT (Non-Fungible Token). It features two unique "cap" images as NFTs, with their metadata stored and managed within the project. The application's frontend is built with React, providing a user-friendly interface for claiming the NFTs. Additionally, it integrates Web3Auth for wallet creation and management, enhancing the user experience in claiming and handling NFTs.

## Folder Structure

- `assets/`: Contains metadata for the NFTs.
- `solidity/`: Houses the Solidity smart contracts for the NFTs.
- `frontend/`: The React-based frontend code for claiming NFTs.
- `lerna.json`: Configuration file for managing mono-repo with Lerna.
- `tsconfig`: TypeScript configuration file.
- `prettier files...`: Configuration files for Prettier, a code formatter.
- `eslint files...`: Contains linter configurations for maintaining code quality.

## Getting Started

 

### Installation

Clone the repository:
   ```bash
   git clone https://github.com/CodeByRahulSaini/NFT-DApp.git
   ```

Install NPM packages:
  ```bash
     yarn install && yarn bootstrap
  ```
  or
  ``` bash
   npm install && npm bootstrap
  ```
  
  ### Running the Project
  Start the react website inside `/frontend`:
  ``` bash 
  npm start
  ```
  or
   ``` bash 
  yarn start
  ```



### Usage
1. Use the frontend interface to interact with the smart contracts.
2. Connect your Web3 wallet (e.g., MetaMask) to the website.
3. Claim your NFT by following the on-screen instructions.



### Smart Contract Development
- The solidity folder contains the Ethereum smart contracts written in Solidity.
- Deploy and test your contracts before integrating with the frontend.



### Contributing

Fork the Project
1. Create your Feature Branch (git checkout -b feature/AmazingFeature)
2. Commit your changes (git commit -m 'Add some AmazingFeature')
3. Push to the Branch (git push origin feature/AmazingFeature)
4. Open a Pull Request

 
