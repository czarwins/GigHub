const mongoose = require('../db/connection')
const Schema = mongoose.Schema

const Task = new Schema({
    workDescription: String,
    qualifications: String,
    totalHours: Number,
    budget: Number,
    company: String,
    industry: String,
    postDate: String
});

module.exports = mongoose.model("Task", Task)