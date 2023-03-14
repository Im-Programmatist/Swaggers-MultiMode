const express = require('express');
const test = express.Router();

/**
 * @swagger
 * tags:
 *  name: Test-API
 *  description: This is test api
 * /testApi:
 *   get:
 *     tags: [Test-API]
 *     responses:
 *        default:
 *          description: "This is default response"
 *          headers:
 *            Access-Control-Allow-Origin:
 *              schema:
 *                type: "string"
*/
test.get('/',(req, res)=>{
    res.send({'message':'this is test-api router'});
});
/**
 * @swagger
 * tags:
 *  name: Test-API
 *  description: This is first api
 * /testApi/get1:
 *  get:
 *      tags: [Test-API]
 *      responses:
 *        default:
 *          description: "This is default response"
 *          headers:
 *            Access-Control-Allow-Origin:
 *              schema:
 *                type: "string"
 *          content:
 *            application/json:
 *              schema:
 *                title: "Empty Schema"
 *                type: "object"
*/
test.get('/get1',(req, res)=>{
    res.send({'message':'this is first test get api'});
});
/**
 * @swagger
 * tags:
 *  name: Test-API
 *  description: This is second api
 * /testApi/get2:
 *  get:
 *      tags: [Test-API]
 *      responses:
 *        default:
 *          description: "This is default response"
 *          headers:
 *            Access-Control-Allow-Origin:
 *              schema:
 *                type: "string"    
*/
test.get('/get2',(req, res)=>{
    res.send({'message':'this is second test get api'});
});
/**
 * @swagger
 * tags:
 *  name: Test-API
 *  description: This is first api
 * /testApi/get3:
 *  get:
 *      tags: [Test-API]
 *      parameters:
 *      - name: page_number
 *        in: query
 *        default: 1
 *        schema: 
 *          type: integer
 *      - name: page_length
 *        in: query
 *        default: 1
 *        schema: 
 *          type: integer
 *      responses:
 *        default:
 *          description: "This is default response"
 *          headers:
 *            Access-Control-Allow-Origin:
 *              schema:
 *                type: "string"
*/
test.get('/get3',(req, res)=>{
    const {page_number, page_length} = req.query;
    res.send({'test-data':req.query});
});

module.exports = test;