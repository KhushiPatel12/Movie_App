const express = require("express");
const router = express.Router();
router.use(express.json());

const directorModel = require("../models/director");

router.post("/addDirector",(req,res)=>{
    const { newDirector } = req.body;
    directorModel.create(newDirector);
    return res.json({data:"Director Added Successfully"});
});

router.put("/updateDirector/:directorId",async(req,res)=>{
    const directorid = req.params.directorId;
    const directorname = req.body.directorName;
    const director = await directorModel.findOneAndUpdate({directorId:directorid},{directorName:directorname},{new:true});
    return res.json({result:"Director Updated Successfully",UpdatedDirector:director});
});

router.delete("/deleteDirector/:directorId",async(req,res)=>{
    const directorid = req.params.directorId;
    const director = await directorModel.findOneAndDelete({directorId:directorid});
    return res.json({result:"Director Deleted Successfully",DeletedDirector:director});
});

router.get("/retrieveDirector",async(req,res)=>{
    const directorname = req.body.directorName;
    const director = await directorModel.findOne({directorName:directorname});
    return res.json({"Your Director":director});
});

module.exports = router;
