Task = require("../models/Task")

const taskController = {
    index: (req, res) => {
        Task.find({}).then(tasks => {
            res.render('app/index', { tasks })
        })
    },
    new: (req, res) => {
        res.render("app/new")
    },
    create: (req, res) => {
        console.log(req.body)
        Task.create({
            title: req.body.title,
            workDescription: req.body.workDescription,
            qualifications: req.body.qualifications,
            totalHours: req.body.totalHours,
            budget: req.body.budget,
            company: req.body.company,
            industry: req.body.industry,
            postDate: req.body.postDate
        }).then(newTask => {
            res.redirect('/')
        })
    },
    show: (req, res) => {
        const taskId = req.params.id
        Task.findById(taskId).then((task) => {
            console.log(task)
            res.render('app/show', { task })
        })
    },
    edit: (req, res) => {
        const taskId = req.params.id
        // console.log(taskId)
        res.render('app/edit', { taskId })
    },
    update: (req, res) => {
        const taskId = req.params.id
        console.log(req.body)
        Task.findByIdAndUpdate(taskId, req.body, { new: true }).then((task) => {
            res.redirect(`/${taskId}`)
        })
    },
    delete: (req, res) => {
        const taskId = req.params.id
        Task.findByIdAndRemove(taskId).then(() => {
            res.redirect('/')
        })
    }
}



module.exports = taskController