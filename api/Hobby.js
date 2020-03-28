const express = require('express');
const router = express.Router();

router.get('/:id',(req,res,next)=>{
    if(req.params.id!=17521296)
        res.send("This is not my student ID, My student ID is 17521296 please go to https://api17521296.herokuapp.com/id/17521296");
    else {
        res.send("CORRECT THIS IS MY STUDENT ID");
    }
})
module.exports=router;