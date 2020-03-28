const express = require('express');
const app= express();
const bodyParser = require('body-parser');

const ProfileRouter=require('./api/Profile');
const HobbyRouter=require('./api/Hobby');
app.use('/profile',ProfileRouter);
app.use('/id',HobbyRouter);
app.use(bodyParser.urlencoded({extended : false}))
app.use(bodyParser.json());

app.use((req,res,next)=>{
    res.status(200).json({
        message:'Hello, Welcome my API !!!!!!!!!'
    });
    next();
});




// app.listen(port, () => {
//     console.log("Server listening on port :" + port);
// });
module.exports = app;