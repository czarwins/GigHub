const mongoose = require("mongoose")

mongoose.connect("mongodb://localhost/gighub").then(() => {
    console.log("MONGODB is now connected")
})

module.exports = mongoose;