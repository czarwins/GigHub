const mongoose = require('../db/connection')
const Schema = mongoose.Schema

const Task = new Schema({
    title: String,
    workDescription: String,
    qualifications: [],
    totalHours: Number,
    budget: Number,
    company: String,
    industry: String,
    postDate: String,
    contractor: [{
        type: Schema.Types.ObjectId,
        ref: 'Contractor'
    }]
});

module.exports = mongoose.model("Task", Task)