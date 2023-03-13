const express = require('express');
const rutas = require('./rutas');
const {engine} = require('express-handlebars'); //Usar handlebars para los html

const app = express();

app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', './src/views');

const port = 3000;

rutas(app);

app.listen(port, function() {
    console.log('app en el puerto ' + port);
});