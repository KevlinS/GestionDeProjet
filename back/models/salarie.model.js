const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const fs = require('fs');


let SalarieSchema = new Schema ({
	nomSalarie: String,
	prenomSalarie: String,
	usernameSalrie: String,
    dateDeNaissance: Date,
    adresseSalarie: String,
    telephoneSalarie: String,
    mailSalarie: String,
    posteSalarie: String
});


module.exports = mongoose.model('Salarie', SalarieSchema);