const mongoose = require('../db/connection')
const Schema = mongoose.Schema

const Manager = new Schema({
    company: String,
    website: String,
    image: String,
    pointOfContact: String,
    industry: String,
    memberSince: Number,
    tasks:[{
        type: Schema.Types.ObjectId,
        ref: 'Task'
    }]
});

module.exports = mongoose.model("Manager", Manager)