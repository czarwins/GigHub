Task = require("../models/Task")
TaskManager = require("../models/TaskManager")

const taskController = {
    index: (req, res) => {
        Task.find({}).then(task => {
            res.render('app/index', { 
                managerId:req.params.id,
                task 
            })
        })
    },
    new: (req, res) => {
        res.render("app/new", {
            managerId: req.params.id
        })
    },
    create: (req, res) => {
        let managerId = req.params.id;
        console.log(req.body)
        const tasks = [];
        const skills = [req.body.skillsA,req.body.skillsB,req.body.skillsC,req.body.skillsD,req.body.skillsE,req.body.skillsF,req.body.skillsG,req.body.skillsO];
        skilled = (value) => {
            return value != null
        }
        Task.create({
            title: req.body.title,
            workDescription: req.body.workDescription,
            qualifications: skills.filter(skilled),
            totalHours: req.body.totalHours,
            budget: req.body.budget,
            company: req.body.company,
            industry: req.body.industry,
            postDate: req.body.postDate,
            // company: req.body.company,
            // website: req.body.website,
            // image: req.body.image,
            // pointOfContact: req.body.pointOfContact,
            // industry: req.body.industry,
            // memberSince: req.body.memberSince,
            // tasks: []
        }).then(newTask => {
            res.redirect('/manager/'+managerId+'/task')
        })
    },
    show: (req, res) => {
    
        const taskId = req.params.taskId
        Task.findById(taskId).then((task) => {
            console.log(task)
            // res.send("hello world")
            res.render('app/show', { task, taskId })
        })
    },
    edit: (req, res) => {
        const taskId = req.params.id
        console.log(taskId)
        res.render('app/edit', { taskId })
    },
    update: (req, res) => {
        const taskId = req.params.id
        console.log( req.body)
        Task.findByIdAndUpdate(taskId, req.body, { new: true }).then((task) => {
            res.redirect(`/${taskId}`)
        })
    },
    delete: (req, res) => {
        const taskId = req.params.id
        Task.findByIdAndRemove(taskId).then(() => {
            res.redirect('/:id/manager')
        })
    }
}

module.exports = taskController