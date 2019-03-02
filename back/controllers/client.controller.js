const Client = require ('../models/client.model');

exports.createClient = function(req, res) {
	let client = new Client(
			{
                nomEntreprise: req.body.nomEntreprise,
                nomClient: req.body.nomClient,
				prenomClient: req.body.prenomClient,
				adresseClient: req.body.adresseClient,
                telephoneClient: req.body.telephoneClient,
                mailClient: req.body.mailClient,
                secteurActivite: req.body.secteurActivite
			}

		);
	client.save((err) => {
		if(err) {
			console.log(err);
		}
		else {
			console.log("Client created");
		}
		res.send(client);
	});
}

exports.getClient = function(req, res) {
	Client.find(function(err, client){
		if(err){
			console.log(err);
		}
		res.send(client);
	});
}

exports.updateClient = function(req, res) {
	Client.findByIdAndUpdate(req.params.id, req.body, function(err, client){
		if(err){
			console.log(err);
		}
		res.send(client);
	});
}

exports.deleteClient = function(req, res) {
	Client.findByIdAndDelete(req.params.id, function(err, client){
		if(err){
			console.log(err);
		}
		res.send(client);
	});
}

exports.detailClient = function(req, res) {
	Client.findById(req.params.id, function(err, client){
		if(err){
			console.log(err);
		}
		res.send(client);
	});
}
