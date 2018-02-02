//dependencias
var restful = require('node-restful');
var mongoose = restful.mongoose;
// esquema de la base de datos
var statusSchema = new mongoose.Schema({
	dni: String,
	nombre: String,
	apellidos: String,
	hora: String,
	aula: String
}
	);
//devolvemos los modelos
module.exports = restful.model('tblstatus', statusSchema);