// const express = require('express')
// const checkout = require('./checkout.route')
// const menu = require('./menu.route')
// const pages = require('./pages.route')
// const blog = require('./blog.route')
// const settings = require('./settings.route')
// const theme = require('./theme.route')
// const newsletter = require('./newsletter.route')
//
// const router = express.Router()
//
// router.use('/checkout', checkout)
// router.use('/menu', menu)
// router.use('/pages', pages)
// router.use('/blog', blog)
// router.use('/settings', settings)
// router.use('/theme', theme)
// router.use('/newsletter', newsletter)
//
// module.exports = router

const express = require('express')
const router = express.Router({ mergeParams: true })

const blockchainController = require('../controllers/blockchain.controller')

router.route('/test').get(async function(req, res) {
  let ret = await blockchainController.blockchain()
  console.log(ret)
  res.status(200).send(ret)
})
module.exports = router
