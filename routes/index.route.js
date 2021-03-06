const express = require('express')
const router = express.Router()

const blockchainController = require('../controllers/blockchain.controller')

router.route('/api').get(async function(req, res) {
  res.status(200).send("You hit the API endpoint of blockchain")
})

router.route('/api/mine').post(function(req, res) {
  let ret = blockchainController.mine(req.body)
  res.status(200).send(ret)
})

router.route('/api/blockchain').get(function(req, res) {
  let ret = blockchainController.getBlockchain()
  res.status(200).send(ret)
})

router.route('/api/nodes/register').post(function(req, res) {
  let ret = blockchainController.registerNodes(req.body)
  res.status(200).send(ret)
})

router.route('/api/nodes').get(function(req, res) {
  let ret = blockchainController.getNodes(req.body)
  res.status(200).send(ret)
})

router.route('/api/resolve').get(async function(req, res) {
  let ret = await blockchainController.resolve()
  res.status(200).send(ret)
})
module.exports = router
