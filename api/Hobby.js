const express = require('express');
const router = express.Router();

router.post('/:id',(req,res,next)=>{
    res.status(200).json({
        message : "YOUR ID ENTERED" + req.params.id
    });
});
module.exports=router;