//dependencias
var express = require('express');
var router = express.Router();

//modelos
var Status = require('../models/status');

//rutas

Status.methods(['get','post','put','delete']);
Status.register(router,'/status');

//devolvemos el router

module.exports = router;