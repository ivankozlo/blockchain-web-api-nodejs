const { Block, Transaction, Blockchain } = require('../models/blockchain.model')

let blockchain = new Blockchain(new Block())

// async function blockchain() {
//   await new Promise((resolve, reject) => setTimeout(resolve, 100))
//   let tr1 = new Transaction('Ivan', 'Denis', 100, 'domestic')
//   return JSON.stringify(tr1)
// }

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

module.exports = {
  blockchain,
  getBlockchain,
  mine,
  registerNodes,
  getNodes
}
