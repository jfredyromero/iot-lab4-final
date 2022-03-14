
const express  = require ('express');
const app = express.Router();
const dispositivo = require('../controller/router_dispositivo')

app.get('/', dispositivo.getDocumentos);

module.exports = app;