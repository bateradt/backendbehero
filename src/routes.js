const express = require('express');
const OngController = require('./controllers/OngController');
const IncidentsController = require('./controllers/IncidentController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');

const routes = express.Router();

routes.get("", (request, response) => {
    return response.json({
      evento: "Semana OmniStack 11.0",
      aluno: "Marcelo Fernando Scarpim"
    });
  });

routes.post("/ongs", OngController.create);
routes.get('/ongs', OngController.list);

routes.post("/incidents", IncidentsController.create);
routes.get("/incidents", IncidentsController.index);
routes.delete("/incidents/:id", IncidentsController.delete);

routes.get("/profile", ProfileController.index);

routes.post("/sessions", SessionController.create);

module.exports = routes;