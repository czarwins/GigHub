const express = require('express')
const router = express.Router()
const taskController = require('../controllers/taskController')
const taskManagerController = require('../controllers/taskManagerController')

router.get('/', taskController.index)
router.post('/', taskController.create)
router.get('/new', taskController.new)
router.get('/:id', taskController.show)
router.get('/:id/edit', taskController.edit)
router.patch('/:id', taskController.update)
router.delete('/:id', taskController.delete)

router.get('/:id/manager', taskManagerController.index)
router.get('/:id/manager/new', taskManagerController.new)
router.post('/:id/manager', taskManagerController.create)
router.get('/:id/manager/:managerId', taskManagerController.show)
router.get('/:id/manager/:managerId/edit', taskManagerController.edit)
router.patch('/:id/manager/:managerId', taskManagerController.update)
router.delete('/:id/manager/:managerId', taskManagerController.delete)

module.exports = router