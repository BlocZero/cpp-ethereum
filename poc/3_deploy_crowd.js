//var ConvertLib = artifacts.require("./ConvertLib.sol");
//var MetaCoin = artifacts.require("./MetaCoin.sol");
var Crowdsale = artifacts.require("./Crowdsale.sol");

module.exports = function(deployer) {
  //deployer.deploy(ConvertLib);
  //deployer.link(ConvertLib, MetaCoin);
  //deployer.deploy(MetaCoin);
  deployer.deploy(Crowdsale,'0xEA6b0d434aca261D3D48716923137505b10ba556', 250, 50,0,'0xEA6b0d434aca261D3D48716923137505b10ba556' );
};
