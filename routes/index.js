const { Router } = require('express')
const router = Router()

router.use('', require('./custom.route'))

module.exports = router
