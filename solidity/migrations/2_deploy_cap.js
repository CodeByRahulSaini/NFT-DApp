const CapNft = artifacts.require("./CapNft.sol");

module.exports = function (deployer) {
  deployer.deploy(CapNft);
};