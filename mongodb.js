const mongoose = require('mongoose');
require('./models/User' )
const password = process.env.MY_db_MOTDEPASSE
const username = process.env.MY_db_USER
const dbname =  process.env.MY_db_NAME

const uri = `mongodb+srv://${username}:${password}@${dbname}.mongodb.net/?retryWrites=true&w=majority`;

mongoose
.connect(uri)
.then(() => console.log('Connexion à MongoDB réussie !'))
.catch(() => console.log('Connexion à MongoDB échouée !'));

module.exports = mongoose


