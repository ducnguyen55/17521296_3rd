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

/**
 * @swagger
 * /:
 *  get:
 *    summary: Returns main page status
 *    description: Get response in main page url/
 *    responses:
 *      '200':
 *        description: welcome my API
 * /profile:
 *   get:
 *    summary: Returns my profile
 *    description: Get response in url/profile
 *    responses:
 *      '200':
 *        description: My profile here
 * /profile/{id}:
 *   post:
 *    summary: Create new student
 *    description: Input new student in url/profile/?... (any information of student)
 *    responses:
 *      '200':
 *        description: YOUR STUDENT HAS BEEN ADDED
 *   delete:
 *    summary:Delete Student based on student's id
 *    description: Input student's id to delete in url/profile/.. (id)
 *    parameters:
 *      name: id
 *      description: Please enter Student id
 *      in: path
 *      required: true
 *      type: string
 *    responses:
 *      '200':
 *        description: DELETED SUCCESSSSSSSSSSSS !!!!!!!!!!!
 * /profile/hobby:
 *  get:
 *      summary: Return my hobby
 *      description: Get response in url/profile/hobby
 *      responses:
 *        '200':
 *           description: My hobby here
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

module.exports = app;