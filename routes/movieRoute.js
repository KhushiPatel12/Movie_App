const express = require("express");
const router = express.Router();
router.use(express.json());

const movieModel = require("../models/movie");

router.post("/addMovie",(req,res)=>{
    const { newMovie } = req.body;
    movieModel.create(newMovie);
    return res.json({data:"Movie Added Successfully"}); 
});

router.put("/updateMovie/:movieId",async(req,res)=>{
    const movieid = req.params.movieId;
    const moviename = req.body.title;
    const movie = await movieModel.findOneAndUpdate({movieId:movieid},{title:moviename},{new:true});
    return res.json({result:"Movie Updated Successfully",UpdatedMovie:movie});
});

router.delete("/deleteMovie/:movieId",async(req,res)=>{
    const movieid = req.params.movieId;
    const movie = await movieModel.findOneAndDelete({movieId:movieid});
    return res.json({result:"Movie Deleted Successfully",DeletedMovie:movie});
});

router.get("/retrieveMovie",async(req,res)=>{
    const moviename = req.body.title;
    const movie = await movieModel.findOne({title:moviename});
    return res.json({"Your Movie":movie});
});

module.exports = router;