const CapNft = artifacts.require("./CapNft.sol");
const { assert } = require("chai");
const { toWei } = require("web3-utils");
const { reverts } = require("truffle-assertions");

contract("CapNft", function (accounts) {
  let capNftInstance;

  before(async function () {
    capNftInstance = await CapNft.deployed();
  });

  it("should be able to set floor price", async function () {
    const weiAmount = toWei("0.01", "ether");
    await capNftInstance.setPrice(weiAmount, { from: accounts[0] });
    const floorPrice = await capNftInstance.floor_price();
    assert.strictEqual(floorPrice.toString(), weiAmount);
  });

  it("should award a nft", async function () {
    await capNftInstance.awardItem(accounts[1], "https://images.web3auth.io/1", { from: accounts[1], value: toWei("0.01", "ether") });
    const balance = await capNftInstance.balanceOf(accounts[1]);
    assert.strictEqual(balance.toString(), "1");
  });
});