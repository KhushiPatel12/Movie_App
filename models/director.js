const mongoose = require("mongoose");

const directorSchema = mongoose.Schema({
    directorId: String,
    directorName: String
});

const directorModel = mongoose.model("director",directorSchema,"director");
module.exports = directorModel;