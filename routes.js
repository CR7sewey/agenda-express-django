const express = require('express');
const route = express.Router();
const homeController = require('./src/controllers/homeController');
const loginController = require('./src/controllers/loginController');
const contatoController = require('./src/controllers/contatoController');
const { loginRequired } = require('./src/middlewares/middlewares');

// ROTAS DA HOME - quem controla as rotas
route.get('/', homeController.index);


// Rotas de login
route.get('/login/', loginController.index);
route.post('/login/register', loginController.register);
route.post('/login/login', loginController.logar);
route.get('/login/logout', loginController.logout);

// Rotas de contacto
route.get('/contato/', loginRequired ,contatoController.index);
route.post('/contato/register',contatoController.register);
route.get('/contato/:id',contatoController.editIndex);
route.post('/contato/edit/:id',contatoController.edit);




module.exports = route;