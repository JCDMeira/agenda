const express = require('express');
const route = express.Router();
const homeControlle = require('./src/controllers/homeController');
const testeController= require('./src/controllers/testeController');

// # exemplo de middleware
// function meuMiddleware(req, res, next){
//     console.log();
//     console.log('Passei no seu middleware');
//     console.log();
//     next();
// }

//# Rota home com um middleware
// route.get('/', meuMiddleware, homeControlle.paginaInicial);

// # Rotas da home
route.get('/', homeControlle.paginaInicial);
route.post('/', homeControlle.formulario);

//# Rotas da página teste

route.get('/testes/:idUsuario?', testeController.teste)

module.exports = route;
