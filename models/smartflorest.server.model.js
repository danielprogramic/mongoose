var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var smartflorestSchema = new Schema({
    temperatura: String,
    umidade:String,
    velocidade: String,
    data: {type: Date, default: Date.now }
});


module.exports = mongoose.model('Smart', smartflorestSchema);

