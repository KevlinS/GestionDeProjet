const http = require ('http');
const express = require ('express');
const mongoose = require('mongoose');
const bodyParser = require ('body-parser');
const projetController = require ('./controllers/projet.controller.js');
const projetModel = require ('./models/projet.model.js');
var cors = require('cors');



const app = express();

app.use(bodyParser.urlencoded({extended:true}));
app.use(express.json());
app.use(cors());

mongoose.connect('mongodb://kevlin:kevlin123@ds155045.mlab.com:55045/myprojet', (err) => {
	if(err) {
		console.log('database not connected...');
	}
	else{
		console.log('database connected!');
	}
});

app.get('/', (req, res) => {
	res.send('Evaluation Nodejs!');
});

app.post('/api/v1/projet', projetController.createProjet);
app.get('/api/v1/projet', projetController.getProjet);
app.put('/api/v1/projet/:id', projetController.updateProjet);
app.delete('/api/v1/projet/:id', projetController.deleteProjet);
app.get('/api/v1/product/:id', projetController.detailProjet);


const port = 3000;

app.listen(port, () => {
	console.log(`Server on on port ${port}`);
});
