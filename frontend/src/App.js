import { useEffect, useState } from "react";
import "./App.css";
import cap1 from "assets/cap1.json";
import cap2 from "assets/cap2.json";
import { Web3Auth } from "@web3auth/web3auth";
import Web3 from "web3";
import { network, clientId } from "./config";
import CapNft from "solidity/build/contracts/CapNft.json";
import nftDetails from "assets/nft_details.json";

const allCaps = [cap1, cap2];
function App() {
  const [web3Auth, setWeb3Auth] = useState(null);
  const [provider, setProvider] = useState(null);
  const [web3, setWeb3] = useState(null);
  const [account, setAccount] = useState("");
  const [balance, setBalance] = useState("");

  const buy = async (nft_id) => {
    console.log("buying nft", nft_id);
    const contract = new web3.eth.Contract(CapNft.abi, nftDetails.contractAddress);
    const currentCandle = allCaps.find((candle) => candle.token_id === nft_id);
    // alert("buying candle" + JSON.stringify(currentCandle));
    const gasEstimate = await contract.methods
      .awardItem(account, currentCandle.hosted_url)
      .estimateGas({ from: account, value: web3.utils.toWei("0.011", "ether") });
    console.log("gas estimate", gasEstimate);

    await contract.methods
      .awardItem(account, currentCandle.hosted_url)
      .send({ from: account, maxPriorityFeePerGas: web3.utils.toWei("1", "gwei"), value: web3.utils.toWei("0.02", "ether") })
      .on("transactionHash", (hash) => console.log(hash));
    alert("successfully claimed");
  };

  useEffect(() => {
    async function init() {
      const web3AuthInstance = new Web3Auth({
        chainConfig: network,
        // get your client id from https://dashboard.web3auth.io
        clientId,
      });
      await web3AuthInstance.initModal();
      setWeb3Auth(web3AuthInstance);
    }
    init();
  }, []);

  const connect = async () => {
    if (!web3Auth) {
      alert("web3auth is not initialized");
      return;
    }
    const provider = await web3Auth.connect();
    setProvider(provider);
    const web3 = new Web3(provider);
    setWeb3(web3);
    const accounts = await web3.eth.getAccounts();
    setAccount(accounts[0]);
    const balance = await web3.eth.getBalance(accounts[0]);
    console.log("balance", balance);
    setBalance(web3.utils.fromWei(balance, "ether"));
  };

  const logout = async () => {
    await web3Auth.logout();
    setAccount("");
    setBalance("");
  };

  return (
    <div className="App">
      <header>
        {!!account ? (
          <>
            <div>
              <div>Address: {account}</div>
              <div>Balance: {balance} ETH</div>
            </div>
            <div>
              <button onClick={logout}>Logout</button>
            </div>
          </>
        ) : (
          <button onClick={connect}>Connect</button>
        )}
      </header>
      <div className="container">
        {allCaps.map((o) => (
          <div className="item">
            <p>Name: {o.name}</p>
            <img width="150" src={o.image} />
            <button onClick={() => buy(o.token_id)}>BUY</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
