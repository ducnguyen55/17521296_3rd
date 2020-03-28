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
    apis: ["server.js"]
};

const swaggerDocs=swaggerJsDoc(swaggerOptions);
app.use('/apidocs',swaggerUi.serve,swaggerUi.setup(swaggerDocs));

/**
 * @swagger
 * /:
 *  get:
 *    tags: [/]
 *    summary: Returns main page status
 *    description: Get response in main page url/
 *    responses:
 *      '200':
 *        description: welcome my API
 * /profile:
 *  get:
 *    tags: [profile]
 *    summary: Returns Student Information
 *    description: Get response in url/profile
 *    responses:
 *      '200':
 *      description: My information
 * /profile/hobby:
 *  get:
 *    tags: [profile]
 *    summary: Return my hobby
 *    description: Get response in url/profile/hobby
 *    responses:
 *      '200':
 *      description: My hobby
 *  post:
 *    tags: [profile]
 *    summary: Create new student
 *    description: Create new student in url/profile/?ID=""&Name=""
 *    responses:
 *      '200':
 *      description: Create new Student, Success
 *  delete:
 *      tags: [profile]
 *      summary: Delete student
 *      description: Delete student in url/profile/... (... is ID)
 *      responses:
 *      '200':
 *       description: Deleted SUCCESSSSSSSSS !!!
 * /
 *  get:
 *      tags: [ID]
 *      summary: Input any number after /
 *      description: Input any number in url/... (any number) to get information
 *      responses:
 *      '200':
 *      description: Guess my ID
 */


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