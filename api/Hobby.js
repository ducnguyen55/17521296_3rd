const express = require('express');
const router = express.Router();

router.get('/:id',(req,res,next)=>{
    res.send("YOUR ID ENTERED " + req.params.id + " !");
});
module.exports=router;