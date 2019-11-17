//loading express
const express = require ('express');
const server = express();


//loading swagger
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('../swagger.json');

//define port 3000
server.listen(3000);

//adding controllers
const HomeController = require('./controllers/HomeController.js');


//adding routes

//index '/' route
server.get('/', HomeController.IndexPage); 

//swagger route
server.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
