//loading express
const express = require ('express');
const server = express();

//define port 3000
server.listen(3000);

//adding controllers
const HomeController = require('./controllers/HomeController.js');


//adding routes

//index '/' route
server.get('/', HomeController.IndexPage); 