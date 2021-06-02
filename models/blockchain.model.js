const SHA256 = require("crypto-js/sha256");

class Transaction {
  from
  to
  amount
  timestamp
  transactionType
  fees
  constructor(from, to, amount, transactionType = "domestic") {
    this.from = from
    this.to = to
    this.amount = amount
    this.timestamp = new Date().getTime()
    this.transactionType = transactionType
  }
}

class TransactionTypeSmartContract {
  static apply(transaction){
    let fee = 0.0
    if(transaction.transactionType == "domestic"){
      fee = 0.02
    }else{
      fee = 0.05
    }
    transaction.fees = transaction.amount * fee
    transaction.amount = transaction.amount - transaction.fees
    return transaction
  }
  constructor(){}
}

class Block {
  index = 0
  previousHash = ""
  hash
  nonce
  transactions = []

  constructor(){
    this.nonce = 0
  }

  get key(){
    return this.index.toString() + this.previousHash + this.nonce.toString() + JSON.stringify(this.transactions)
  }

  addTransaction(transaction){
    this.transactions.push(TransactionTypeSmartContract.apply(transaction))
  }
}

class Blockchain {
  difficulty
  blocks = []
  nodes = []

  constructor(genesisBlock, difficulty = 2){
    this.difficulty = difficulty
    this.addBlock(genesisBlock)
  }

  addBlock(block){
    if(this.blocks.length === 0){
      block.previousHash = "0"
      block.hash = this.generateHash(block)
    }else{
      block.index = this.blocks[this.blocks.length - 1].index + 1
      block.previousHash = this.blocks[this.blocks.length - 1].hash
      block.hash = this.proofOfWork(block)
    }
    this.blocks.push(block)
  }

  proofOfWork(block){
    if(block.hash == undefined){
      block.hash = this.generateHash(block)
    }
    while(block.hash.substring(0, this.difficulty) !== Array(this.difficulty + 1).join("0")){
      block.nonce++
      block.hash = this.generateHash(block)
    }
    return block.hash
  }

  generateHash(block){
    return SHA256(block.key).toString()
  }

  registerNodes(nodes){
    nodes.forEach(node => {
      this.nodes.push(node)
    })
    return this.nodes
  }

}

class BlockchainNode {
  address
  constructor(address){
    this.address = address
  }
}

module.exports = {
  Transaction,
  Block,
  Blockchain,
  TransactionTypeSmartContract
}
