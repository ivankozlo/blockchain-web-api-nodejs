const { Block, Transaction, Blockchain } = require('../models/blockchain.model')
const axios = require('axios')

let blockchain = new Blockchain(new Block())

const init = (difficulty) => {
  blockchain = new Blockchain(new Block(), difficulty)
  return blockchain
}

const mine = (data) => {
  let transaction = new Transaction(data.from, data.to, data.amount, data.transactionType)
  let block = new Block()
  block.addTransaction(transaction)
  blockchain.addBlock(block)
  return block
}

const registerNodes = (nodes) => {
  return blockchain.registerNodes(nodes)
}

const getNodes = () => {
  return blockchain.nodes
}

const getBlockchain = () => {
  return blockchain
}

async function resolve(){
  let nodes = blockchain.nodes
  for(let i = 0; i < nodes.length; i++){
    let res = await axios.get(`${nodes[i].address}/api/blockchain`)
    if(res.data.blocks.length > blockchain.blocks.length){
      blockchain.blocks = [...res.data.blocks]
    }
  }
  return blockchain
}

module.exports = {
  blockchain,
  getBlockchain,
  mine,
  registerNodes,
  getNodes,
  resolve
}
