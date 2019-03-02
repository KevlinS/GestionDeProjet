const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const fs = require('fs');


let ClientSchema = new Schema ({
    nomEntreprise: String,
	nomClient: String,
	prenomClient: String,
    adresseClient: String,
    telephoneClient: String,
    mailClient: String,
    secteurActivite: String
});


module.exports = mongoose.model('Client', ClientSchema);