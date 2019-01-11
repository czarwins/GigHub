TaskManager = require("../models/TaskManager")

const taskManagerController = {
    index: (req, res) => {
        TaskManager.find({}).then(tasks => {
            res.render('taskMgr/index', { tasks })
        })
    },
    new: (req, res) => {
        res.render("taskMgr/new")
    },
    create: (req, res) => {
        console.log(req.body)
        skilled = (value) => {
            return value != null
        }
        TaskManager.create({
            website: req.body.website,
            image: req.body.image,
            pointOfContact: req.body.pointOfContact,
            industry: req.body.industry,
            memberSince: req.body.memberSince,
            tasks: []
        }).then(newTask => {
            res.redirect('/')
        })
    },
    show: (req, res) => {
        const managerId = req.params.id
        TaskManager.findById(managerId).populate('tasks').then((taskMgr) => {
            console.log(taskMgr)
            res.render('taskMgr/show', { taskMgr })
        })
    },
    edit: (req, res) => {
        const taskMgrId = req.params.id
        console.log(taskMgrId)
        res.render('taskMgr/edit', { taskMgrId })
    },
    update: (req, res) => {
        const taskMgrId = req.params.id
        
        console.log("\n What's in the body: ",req.body)
        TaskManager.findByIdAndUpdate(taskMgrId, req.body, { new: true }).then((taskMgr) => {

            
            res.redirect('/' + taskMgrId)
        }).catch((err) => {
            console.log(err)
        })
    },
    delete: (req, res) => {
        const taskMgrId = req.params.id
        TaskManager.findByIdAndRemove(taskMgrId).then(() => {
            res.redirect('/')
        })
    }
}



module.exports = taskManagerController