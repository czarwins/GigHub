const mongoose = require('../db/connection')
const Schema = mongoose.Schema

const Contractor = new Schema({
    name: String,
    image: String,
    email: String,
    skills: [],
    hourlyRate: Number,
    hoursAvailablePerWeek: Number,
    website: String,
    bio: String,
    
});

module.exports = mongoose.model("Contractor", Contractor)