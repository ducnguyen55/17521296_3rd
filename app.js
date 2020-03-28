const express = require('express');
const app= express();
const bodyParser = require('body-parser');

const swaggerJsDoc=require('swagger-jsdoc');
const swaggerUi=require('swagger-ui-express');

//Extended: https://swagger.io/specification/#infoObject
const swaggerOptions={
    swaggerDefinition: {
        info: {
            title: 'Restful API',
            description: "API information",
            contact: {
                name: "Nguyễn Thanh Đức"
            },
            servers: ["http://localhost:3000"]
        }
    },
    apis: ["app.js"]
};

const swaggerDocs=swaggerJsDoc(swaggerOptions);
app.use('/apidocs',swaggerUi.serve,swaggerUi.setup(swaggerDocs));

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