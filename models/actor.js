const mongoose = require("mongoose");

const actorSchema = mongoose.Schema({
    actorId: String,
    actorName: [{
        type: String
    }],
    actorGender: [{
        type: String
    }]
});

const actorModel = mongoose.model("actor",actorSchema,"actor");
module.exports = actorModel;