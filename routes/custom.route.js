const { Router } = require("express")
const router = Router()
const { customController } = require('../controllers/custom.controller')

router.post('/add', customController.addPost)
router.post('/update/:id', customController.updatePost)
router.delete('/delete', customController.deletePost)
router.get('/get', customController.getPost)
router.get('/get/one/:id', customController.getOnePost)
module.exports = router