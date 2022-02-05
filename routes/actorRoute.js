const express = require("express");
const { findByIdAndUpdate, findOneAndUpdate, findOneAndDelete } = require("../models/actor");
const router = express.Router();
router.use(express.json());

const actorModel = require("../models/actor");

router.post("/addActor",(req,res)=>{
    const { newActor } = req.body;
    actorModel.create(newActor);
    return res.json({data:"Actor Added Successfully"});
});

router.put("/updateActor/:ActorId",async(req,res)=>{
    const actorid = req.params.ActorId;
    const actorname = req.body.actorName;
    const actor =  await actorModel.findOneAndUpdate({actorId:actorid},{actorName:actorname},{new:true});
    return res.json({result:"Actor Updated Successfully",UpdatedActor:actor});
});

router.delete("/deleteActor/:ActorId",async(req,res)=>{
    const actorid = req.params.ActorId;
    const actor = await actorModel.findOneAndDelete({actorId:actorid});
    return res.json({result:"Actor Deleted Successfully",DeletedActor:actor});
});

router.get("/retrieveActor",async(req,res)=>{
    const actorname = req.body.actorName;
    const actor = await actorModel.findOne({actorName:actorname});
    return res.json({"Your Actor":actor});
});

module.exports = router;