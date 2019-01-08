const express = require('express')
const router = express.Router()
const taskController = require('../controllers/taskController')

router.get('/', taskController.index)
router.post('/', taskController.create)
router.get('/new', taskController.new)
router.get('/:id', taskController.show)
router.get('/:id/edit', taskController.edit)
router.patch('/:id', taskController.update)
router.delete('/:id', taskController.delete)

module.exports = router