const Salarie = require ('../models/salarie.model');

exports.createSalarie = function(req, res) {
	let salarie = new Salarie(
			{
				nomSalarie: req.body.nomSalarie,
				prenomSalarie: req.body.prenomSalarie,
				usernameSalarie: req.body.usernameSalarie,
				dateDeNaissance: req.body.dateDeNaissance,
                adresseSalarie: req.body.adresseSalarie,
                telephoneSalarie: req.body.telephoneSalarie,
                mailSalarie: req.body.mailSalarie,
                posteSalarie: req.body.posteSalarie
			}

		);
	salarie.save((err) => {
		if(err) {
			console.log(err);
		}
		else {
			console.log("Salarié created");
		}
		res.send(salarie);
	});
}

exports.getSalarie = function(req, res) {
	Salarie.find(function(err, salarie){
		if(err){
			console.log(err);
		}
		res.send(salarie);
	});
}

exports.updateSalarie = function(req, res) {
	Salarie.findByIdAndUpdate(req.params.id, req.body, function(err, salarie){
		if(err){
			console.log(err);
		}
		res.send(salarie);
	});
}

exports.deleteSalarie = function(req, res) {
	Salarie.findByIdAndDelete(req.params.id, function(err, salarie){
		if(err){
			console.log(err);
		}
		res.send(salarie);
	});
}

exports.detailSalarie = function(req, res) {
	Salarie.findById(req.params.id, function(err, salarie){
		if(err){
			console.log(err);
		}
		res.send(salarie);
	});
}
