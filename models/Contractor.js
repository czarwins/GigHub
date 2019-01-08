const mongoose = require('../db/connection')
const Schema = mongoose.Schema

const Contractor = new Schema({
    name: String,
    image: String,
    email: Number,
    skills: [],
    hourlyRate: String,
    hoursAvailablePerWeek: String,
    website: String,
    bio: String,
    memberSince: Number
});

module.exports = mongoose.model("Contractor", Contractor)