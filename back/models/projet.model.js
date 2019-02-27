const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const fs = require('fs');


let ProjetSchema = new Schema ({
	nomProjet: String,
	descriptionProjet: String,
	dateDebut: Date,
    dateFin: Date,
    montantTotalProjet: Number,
    statut: String
});


module.exports = mongoose.model('Projet', ProjetSchema);