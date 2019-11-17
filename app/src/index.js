//loading express
const express = require ('express');
const app = express();


//loading swagger
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('../swagger.json');

//define port 3000
app.listen(3000);

//set json
app.use(express.json());

//adding controllers
const HomeController = require('./controllers/HomeController.js');
const CreateController = require('./controllers/CreateController.js');


//adding routes

//index '/' route
app.get('/', HomeController.IndexPage);

//swagger route
app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

//Create Route
app.post('/create', CreateController.Create);
