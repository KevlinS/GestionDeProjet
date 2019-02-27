const Projet = require ('../models/projet.model');

exports.createProjet = function(req, res) {
	let projet = new Projet(
			{
				nomProjet: req.body.nomProjet,
				descriptionProjet: req.body.descriptionProjet,
				dateDebut: req.body.dateDebut,
				dateFin: req.body.dateFin,
                montantTotalProjet: req.body.montantTotalProjet,
                statut: req.body.statut
			}

		);
	projet.save((err) => {
		if(err) {
			console.log(err);
		}
		else {
			console.log("Projet created");
		}
		res.send(projet);
	});
}


exports.getProjet = function(req, res) {
	Projet.find(function(err, projet){
		if(err){
			console.log(err);
		}
		res.send(projet);
	});
}

exports.updateProjet = function(req, res) {
	Projet.findByIdAndUpdate(req.params.id, req.body, function(err, product){
		if(err){
			console.log(err);
		}
		res.send(projet);
	});
}

exports.deleteProjet = function(req, res) {
	Projet.findByIdAndDelete(req.params.id, function(err, projet){
		if(err){
			console.log(err);
		}
		res.send(projet);
	});
}

exports.detailProjet = function(req, res) {
	Projet.findById(req.params.id, function(err, projet){
		if(err){
			console.log(err);
		}
		res.send(projet);
	});
}
