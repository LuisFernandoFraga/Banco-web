const express = require("express");

const routes = express.Router();

const contaController = require('./controllers/contaController');

const sessionController = require('./controllers/sessionController');

routes.post("/conta", contaController.create);
routes.get("/conta", contaController.index);
routes.put("/deposito", contaController.deposito);
routes.put("/saque", contaController.saque);
routes.get("/busca", contaController.buscaConta);

routes.post("/session", sessionController.create);

module.exports = routes;