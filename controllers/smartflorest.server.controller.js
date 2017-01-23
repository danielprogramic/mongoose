var Smart = require('../models/smartflorest.server.model.js');
//
exports.list = function(req, res) {
/*
    setInterval(function(){
            console.log('Começa ');
        }, 1000);  
*/

    req.app.io.on('connection', function(socket){  
        data = 'Daniel Douglas Machado';
        socket.emit('sendatatemp', {arg:data}); 
    });  

    var query = Smart.find();
    query.sort({ data: 'desc'})
        .limit(12)
        .exec(function(err, results){
            res.render('index', {title: 'Smart - List', smarts: results});

        });

};

//
exports.create = function(req, res){
    var entry = new Smart({
        temperatura: req.body.temperatura,
        umidade:req.body.umidade,
        velocidade: req.body.velocidade
    })

    entry.save();

    //direcionando para homePage
    res.redirect(301, '/');
}
//
exports.getNote = function(req, res){
    res.render('smartnote', {title: 'Smart - Florest'});  
}
