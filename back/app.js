const http = require ('http');
const express = require ('express');
const mongoose = require('mongoose');
const bodyParser = require ('body-parser');
const projetController = require ('./controllers/projet.controller.js');
const projetModel = require ('./models/projet.model.js');
const salarieController = require ('./controllers/salarie.controller.js');
const salarieModel = require ('./models/salarie.model.js');
const clientController = require ('./controllers/client.controller.js');
const clientModel = require ('./models/client.model.js');
var cors = require('cors');



const app = express();

app.use(bodyParser.urlencoded({extended:true}));
app.use(express.json());
app.use(cors());

// Connexion la base de données des projets
mongoose.connect('mongodb://kevlin:kevlin123@ds155045.mlab.com:55045/myprojet', (err) => {
	if(err) {
		console.log('database projets not connected...');
	}
	else{
		console.log('database projets connected!');
	}
});


// // Connexion la base de données des salariés
// mongoose.connect('mongodb://kevlin:kevlin123@ds155845.mlab.com:55845/mysalarie', (err) => {
// 	if(err) {
// 		console.log('database salariés not connected...');
// 	}
// 	else{
// 		console.log('database salariés connected!');
// 	}
// });


// // Connexion la base de données des clients
// mongoose.connect('mongodb://kevlin:kevlin123@ds239055.mlab.com:39055/myclient', (err) => {
// 	if(err) {
// 		console.log('database clients not connected...');
// 	}
// 	else{
// 		console.log('database clients connected!');
// 	}
// });


app.get('/', (req, res) => {
	res.send('Evaluation Nodejs!!');
});

// HTTP des projets
app.post('/api/v1/projet', projetController.createProjet);
app.get('/api/v1/projet', projetController.getProjet);
app.put('/api/v1/projet/:id', projetController.updateProjet);
app.delete('/api/v1/projet/:id', projetController.deleteProjet);
app.get('/api/v1/product/:id', projetController.detailProjet);

// HTTP des salariés
app.post('/api/v1/salarie', salarieController.createSalarie);
app.get('/api/v1/salarie', salarieController.getSalarie);
app.put('/api/v1/salarie/:id', salarieController.updateSalarie);
app.delete('/api/v1/salarie/:id', salarieController.deleteSalarie);
app.get('/api/v1/salarie/:id', salarieController.detailSalarie);

// HTTP des clients
app.post('/api/v1/client', clientController.createClient);
app.get('/api/v1/client', clientController.getClient);
app.put('/api/v1/client/:id', clientController.updateClient);
app.delete('/api/v1/client/:id', clientController.deleteClient);
app.get('/api/v1/client/:id', clientController.detailClient);

// Se connecter sur la port 3000
const port = 3000;

app.listen(port, () => {
	console.log(`Server on on port ${port}`);
});
