const Manager = require('../models/Manager')
const Contractor =require('../models/Contractor')
const Task = require('../models/Task')

Manager.deleteMany()
    .then(() => {
        return Task.deleteMany()
    }).then(() => {
        return Manager.create({
            company: 'Coca-Cola',
            website: 'www.cocacola.com',
            image: 'https://i.pinimg.com/564x/52/ac/78/52ac78b99e63d90bcf3f8e553ce25f65.jpg',
            pointOfContact: 'Tracy Covington',
            industry: 'Distribution',
            memberSince: 2019,
            tasks: []
        })
            .then(taskMgr => {
                const task = Task.create({
                    title: 'CRUD app',
                    workDescription: 'We need a full CRUD mobile application for our local distributors',
                    qualifications: ['Express ', 'ReactJS ', 'NodeJS '],
                    totalHours: 50,
                    budget: 15,
                    company: 'Coca-Cola',
                    industry: 'Distribution',
                    postDate: '01/08/2019',
                    contractor: []
                }).then((newTask) => {
                    taskMgr.tasks.push(newTask)
                })
                    .then((contractor) => {
                        const newContractor = Contractor.create({
                            name: 'Al Paca',
                            image: 'data:image/jpeg;base64,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',
                            email: 'al@alpaca.com',
                            skills: [],
                            hourlyRate: 35,
                            hoursAvailablePerWeek: 25,
                            website: 'www.alpaca.com',
                            bio: 'Sick Software Developer from Peru',
                            
                        })

                    }

                    )

                Promise.all([task])
                    .then(() => {
                        taskMgr.save()
                    })
            })
    })