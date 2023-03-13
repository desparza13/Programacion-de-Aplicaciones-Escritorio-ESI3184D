const path = require('path');
const express = require('express');

function cargarHome(req, res) {
    console.log('home');
    res.render('home');
}
module.exports = function(app) {
    app.use('/assets', express.static(path.join(__dirname, 'assets')));

    app.get('/hobbies', function(req, res) {
        console.log("entro a hobbies");
        res.render('hobbies');
    });
    app.get('/fotos', function(req, res) {
        res.render('fotos');
    });
    app.get('/contacto', function(req, res) {
        res.render('contacto');
    });

    app.get('/', cargarHome);
    
    app.get('*', function(req, res) {
        res.status(404).sendFile(path.join(__dirname, 'src','views', 'notFound.html'));
    });
}