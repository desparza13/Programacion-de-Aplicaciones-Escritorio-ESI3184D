const path = require('path');
const express = require('express');
const axios = require('axios');

module.exports = function(app) {
    app.use('/assets', express.static(path.join(__dirname, 'assets')));

    app.get('/', function(req, res) {
        res.render('news'); 
    });

    app.get('/search', function(req, res) {
        let url = 'https://newsapi.org/v2/everything?' +'q=' + req.query.input + '&' +'apiKey=a18682e40c254ca197e73491725bff1c';
        axios.get(url).then(function(results) {
            res.render('newsArticle', {
            newsArticle: results.data.articles});
        }).catch();
    });
    
    app.get('*', function(req, res) {
        res.status(404);
    });
}