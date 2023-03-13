//15 de febrero del 2023
const path = require('path');
const express = require('express');

function cargarHome(req,res){
    res.status(200).send('Corriendo, ver /swagger');
}

module.exports =function(app){
    app.get('/',cargarHome)

    app.get('*', function(req,res){
        res.status(404).send('Página no encontrada');
    });
}



