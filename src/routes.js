const express = require('express');
const OngController = require('./Controller/OngController');
const IncidentsController = require('./Controller/IncidentsController');
const ProfileController = require('./Controller/ProfileController');
const SessionController = require('./Controller/SessionController');

const routes = express.Router();

routes.get ('/ongs', OngController.index);
routes.post('/ongs', OngController.create);

routes.get ('/incidents', IncidentsController.index);
routes.post('/incidents', IncidentsController.create);
routes.delete('/incidents/:id', IncidentsController.delete);

routes.get ('/profile', ProfileController.index);

routes.post ('/session', SessionController.create);

/**
 * exportando para que outros arquivos possam o acessar
 */
module.exports = routes;