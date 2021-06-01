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

router.route('/hello').get(function(req, res) {
  res.status(200).send("Hello world!")
})
router.route('/test').get(function(req, res) {
  res.status(200).send("Hello world, this is the test route")
})
module.exports = router
