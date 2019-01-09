const TaskManager = require('../models/TaskManager')

const Task = require('../models/Task')

TaskManager.deleteMany()
    .then(() => {
        return Task.deleteMany()
    }).then(() => {
        return TaskManager.create({
            company: 'Coca-Cola',
            website: 'www.cocacola.com',
            image: 'https://i.pinimg.com/564x/52/ac/78/52ac78b99e63d90bcf3f8e553ce25f65.jpg',
            pointOfContact: 'Tracy Covington',
            industry: 'Distribution',
            memberSince: 2019,
            tasks:[]
        })
            .then(taskMgr => {
                const task = Task.create({
                    title: 'CRUD app',
                    workDescription: 'We need a full CRUD mobile application for our local distributors',
                    qualifications: ['Express ','ReactJS ','NodeJS '],
                    totalHours: 50,
                    budget: 15,
                    company: 'Coca-Cola',
                    industry: 'Distribution',
                    postDate: '01/08/2019'
                }).then((newTask) => {
                    taskMgr.tasks.push(newTask)
                })

                Promise.all([task])
                .then(() => {
                    taskMgr.save()
                })
            })
    })