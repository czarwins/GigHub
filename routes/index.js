const express = require('express')
const router = express.Router()
const taskController = require('../controllers/taskController')
const taskManagerController = require('../controllers/taskManagerController')

router.get('/', taskManagerController.index)
router.post('/', taskManagerController.create)
router.get('/new', taskManagerController.new)
router.get('/:id', taskManagerController.show)
router.get('/:id/edit', taskManagerController.edit)
router.patch('/:id', taskManagerController.update)
router.delete('/:id', taskManagerController.delete)

router.get('/manager/:id/task', taskController.index)
router.get('/manager/:id/new', taskController.new)
router.post('/manager/:id', taskController.create)
router.get('/manager/:taskId', taskController.show)
router.get('/:id/manager/:managerId/edit', taskController.edit)
router.patch('/:id/manager/:managerId', taskController.update)
router.delete('/:id/manager/:managerId', taskController.delete)

module.exports = router