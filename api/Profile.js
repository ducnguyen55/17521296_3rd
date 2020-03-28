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

router.delete('/:id',(req,res,next) =>{
    res.send("Deleted Student have ID is " + req.params.id);
    res.send("SUCCESSSSSSSSSSSSSS !!!!!!!!!!!!!!!!!");
})

router.get('/hobby',(req,res,next)=>{
    res.send("MY HOBBY : PLAY GAME , WATCHING TV, LISTENING TO MUSIC, ALGORITHM, MATH, ...");
})

module.exports=router;