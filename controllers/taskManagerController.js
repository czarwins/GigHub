Task = require("../models/Task")
TaskManager = require("../models/TaskManager")

const taskManagerController = {
    index: (req, res) => {
        TaskManager.find({}).then(taskMgr => {
            res.render('taskMgr/index', { taskMgr })
        })
    },
    new: (req, res) => {
        res.render("taskMgr/new")
    },
    create: (req, res) => {
        console.log(req.body)
        const tasks = [];
        taskMade = (value) => {
            return value != null
        }
        TaskManager.create({
            company: req.body.company,
            website: req.body.website,
            image: req.body.image,
            pointOfContact: req.body.pointOfContact,
            industry: req.body.industry,
            memberSince: req.body.memberSince,
            tasks: []
        }).then(newMgr => {
            res.redirect('/:id/manager')
        })
    },
    show: (req, res) => {
        const managerId = req.params.id
        TaskManager.findById(managerId).then((taskMgr) => {
            console.log(taskMgr)
            res.render('taskMgr/show', { taskMgr })
        })
    },
    edit: (req, res) => {
        const managerId = req.params.id
        // console.log(taskId)
        res.render('taskMgr/edit', { managerId })
    },
    update: (req, res) => {
        const managerId = req.params.id
        console.log(req.body)
        TaskManager.findByIdAndUpdate(managerId, req.body, { new: true }).then((taskMgr) => {
            res.redirect(`/${managerId}`)
        })
    },
    delete: (req, res) => {
        const taskId = req.params.id
        TaskManager.findByIdAndRemove(taskId).then(() => {
            res.redirect('/:id/manager')
        })
    }
}

module.exports = taskManagerController