const express = require('express');
const router = express.Router();

router.post('/:id', (req, res, next) => {
       res.send('YOU ENTERD ID IS' + req.params.id);
});
module.exports=router;