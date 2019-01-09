const mongoose = require('../db/connection')
const Schema = mongoose.Schema

const TaskManager = new Schema({
    company: String,
    website: String,
    image: String,
    pointOfContact: String,
    industry: String,
    memberSince: Number,
    tasks:[]
});

module.exports = mongoose.model("TaskManager", TaskManager)