const express = require('express');
const router = express.Router();

router.post('/:id',(req,res,next)=>{
    res.send("Your'id entered" + req.params.id);
    res.send(req.query);
});
module.exports=router;