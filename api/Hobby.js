const express = require('express');
const router = express.Router();

router.post('/:id',(req,res,next)=>{
    res.status(405).json({
        Error: 'Method not allowed'
    });
});
module.exports=router;