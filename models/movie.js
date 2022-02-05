const mongoose = require("mongoose");

const movieSchema = mongoose.Schema({
    movieId: String,
    title: String,
    language: String,
    timing: String,
    releaseDate: String,
    releaseCountry: [{
        type: String
    }],
    actorId: String,
    directorId: String
});

const movieModel = mongoose.model("movie",movieSchema,"movie");
module.exports = movieModel;