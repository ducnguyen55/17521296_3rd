const express = require('express');
const router = express.Router();

router.get('/',(req,res,next) =>{
    const user ={
        name: "Nguyễn Thanh Đức",
        age:21,
        studentID: 17521296,
        major: "Information System",
        school: "University of Information Technology"
    }
    res.send(user);
});
router.post('/',(req,res,next)=>{
    res.send("SUCCESSSSSSSSSSSSSS !!!!!!!!!!!!!!!!!!!!!!!");
    res.send("The information you entered");
    res.send(req.query);
});
router.put('/:id',(req,res,next)=>{
    res.status(200).json({
        student_id: req.params.id,
        message: 'UPDATED SUCCESSSSSSSS !!!!!!!!!!!!!!!!!!'
    });
})
router.delete('/:id', (req, res, next) => {
    res.status(200).json({
        student_id: req.params.id,
        message: 'DELETED SUCCESSSSSSSS !!!!!!!!!!!!!!!!!!'
    });
});
router.get('/hobby',(req,res,next)=>{
    res.send("MY HOBBY : PLAY GAME , WATCHING TV, LISTENING TO MUSIC, ALGORITHM, MATH, ...");
})

module.exports=router;