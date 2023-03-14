const express = require('express');
const router = express.Router();

/**
 * @swagger
 * tags:
 *  name: API
 *  description: This is api's
 * /api:
 *   get:
 *     tags: [API]
 *     responses:
 *        default:
 *          description: "This is default response"
 *          headers:
 *            Access-Control-Allow-Origin:
 *              schema:
 *                type: "string"
*/
router.get('/',(req, res)=>{
    res.send({'message':'this is api router'});
});
/**
 * @swagger
 * tags:
 *  name: API
 *  description: This is api's
 * /api/get1:
 *  get:
 *      tags: [API]
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
router.get('/get1',(req, res)=>{
    res.send({'message':'this is first get api'});
});
/**
 * @swagger
 * tags:
 *  name: API
 *  description: This is second api
 * /api/login-post:
 *  post:
 *      tags: [API]
 *      requestBody:
 *        required: true
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                email: 
 *                  type: string
 *                  required: true
 *                  default: cnk@gml.com
 *                password: 
 *                  type: string
 *                  required: true
 *                  default: pass123
 *      responses:
 *        default:
 *          description: "This is default response"
 *          headers:
 *            Access-Control-Allow-Origin:
 *              schema:
 *                type: "string"    
*/
router.post('/login-post',(req, res)=>{
    const {username, password} = req.body;
    const out = { token: 'thisisJWTtoken'}
    res.send(out);
});
/**
 * @swagger
 * tags:
 *  name: API
 *  description: This is api's
 * /api/get3:
 *  get:
 *      tags: [API]
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
router.get('/get3',(req, res)=>{
    const {page_number, page_length} = req.query;
    res.send({'data':req.query});
});

module.exports = router;