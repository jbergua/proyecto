//dependencias
var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');

//conectar a mongodb
mongoose.connect('mongodb://jorge:jorge@ds219318.mlab.com:19318/nfc_proyecto');
//Para pruebas conectar arriba, para original cambiar a base de datos en la maquina

//express

var app = express();
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

//rutas

app.use('/api',require('./routes/api'));

//Inicializamos servidor
app.listen(1000);
console.log('Servidor corriendo en puerto 1000');