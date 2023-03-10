//env configuration
const dotenv = require('dotenv');
dotenv.config({path: './.env'});
const express = require('express');
const swaggerUi = require('swagger-ui-express');
const swaggerJsDoc = require('swagger-jsdoc');
const router = require('./routes/app.routes');
const test = require('./routes/test.routes');
const basicAuth = require('express-basic-auth')

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
const Port = process.env.port ;

/**
 * START : Swagger implementation
*/
const options = {
    swaggerDefinition: {
        openapi: '3.0.1',
        info : {
            title: "Swagger APP",
            description: 'My Swagger app with annotation on express route api',
            version: '1.0.0',
            contact:{
                email: 'cnk@gml.com',
                message: '9900990099'
            }            
        },
        externalDocs:{
            description: "Find out more about Swagger",
            url: "http://swagger.io"
        },
        servers: [
            {
                url: `http://localhost:${Port}`
            }
        ],
        base_path: "/api",
        components: {
            securitySchemes: {
                bearerAuth: {
                    type: 'http',
                    scheme: 'bearer',
                    bearerFormat: 'JWT',
                }
            },
            security: [{
                bearerAuth: []
            }],
        }        
    },
    apis: ["./routes/*.js"]
}
const swaggerSpecs =  swaggerJsDoc(options);
app.use(
    ['/api-docs'],
    basicAuth({
        challenge: true,
        users: {
            'dev.user': 'Password@123'
        }
    })
);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpecs)); 

/**
 * END : Swagger implementation
*/
app.use("/api", router);
app.use("/testApi", test);
app.get("/", (req, res) => {
    res.send({"message": "Welcome to swagger application for AWS API gateway!"});
});
app.listen(Port, (err, res)=>{
    if(err) throw err;
    console.log(`App listening at http://localhost:${Port}`);
})

