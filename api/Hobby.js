const express = require('express');
const router = express.Router();

router.post('/:id', (req, res, next) => {
    res.status(200).json({
        student_id: req.params.id,
        message: 'YOU ENTERD ID IS' + student_id,
    })
});
module.exports=router;