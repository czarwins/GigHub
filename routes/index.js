const express = require('express')
const router = express.Router()
const taskController = require('../controllers/taskController')
const managerController = require('../controllers/managerController')

router.get('/', managerController.index)
router.post('/', managerController.create)
router.get('/new', managerController.new)
router.get('/:id', managerController.show)
router.get('/:id/edit', managerController.edit)
router.patch('/:id', managerController.update)
router.delete('/:id', managerController.delete)

router.get('/manager/:id/task', taskController.index)
router.get('/manager/:id/new', taskController.new)
router.post('/manager/:id', taskController.create)
router.get('/manager/:taskId', taskController.show)
router.get('/manager/:taskId/edit', taskController.edit)
router.patch('/manager/:taskId', taskController.update)
router.delete('/manager/:managerId', taskController.delete)

module.exports = router