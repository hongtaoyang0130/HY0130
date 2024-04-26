// 引入 web3 库
const Web3 = require('web3');

// 替换为您的以太坊节点的 RPC URL
const rpcUrl = 'https://go.getblock.io/6aa9a2d25efa484aa9afa04438e244ab';

// 创建 Web3 实例
const web3 = new Web3(rpcUrl);

// 获取当前以太坊网络ID
web3.eth.net.getId()
  .then(networkId => {
    console.log('Connected to Ethereum network with ID:', networkId);
  })
  .catch(error => {
    console.error('Error connecting to Ethereum network:', error);
  });
 prysm.bat validator accounts import --keys-dir="E:\staking_deposit-cli-fdab65d-windows-amd64" --mainnet