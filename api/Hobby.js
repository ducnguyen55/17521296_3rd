const express = require('express');
const router = express.Router();

router.post('/:id',(req,res,next)=>{
    res.status(200).json({
        student_id: req.params.id,
    });
});
module.exports=router;