var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var smartflorestSchema = new Schema({
    temperatura: String,
    umidade:String,
    velocidade: String,
    data: {type: Date, default: Date.now }
});

//disable _id
var noIdSchema = new Schema({name: String}, {id:false});

var exampleSchema = new Schema;
exampleSchema.add({
    temperatura: String,
    umidade:String,
    velocidade: String,
    data: {type: Date, default: Date.now }
});