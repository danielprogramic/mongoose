var Smart = require('../models/smartflorest.server.model.js');

exports.create = function(req, res){
    var entry = new Smart({
        temperatura: '40',
        umidade:'30',
        velocidade: '100'
    })

    entry.save();

    //direcionando para homePage
    res.redirect(301, '/');
}

exports.getNote = function(req, res){
    res.render('index', {title: 'Smart - new Note'});  
}
