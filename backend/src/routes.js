const express = require('express');
const routes = express.Router();
const OngController = require('./controllers/OngController');
const CasosController = require('./controllers/CasosController');
const PerfilController = require('./controllers/PerfilController');
const SessionController = require('./controllers/SessionController');

routes.post('/session', SessionController.create);
routes.post('/ongs', OngController.create);
routes.get('/ongs', OngController.index);

routes.post('/casos', CasosController.create);
routes.get('/casos', CasosController.index);
routes.delete('/casos/:id', CasosController.delete);

routes.get('/perfil', PerfilController.index);

module.exports = routes;