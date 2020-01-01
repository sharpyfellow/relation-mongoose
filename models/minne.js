const mongoose  = require('mongoose');

const MinneSchema = new mongoose.Schema({
    tekst: String       
},
{
    timestamps:true
})

module.exports = mongoose.model('Minne',MinneSchema, 'minner');


//var mySchema = new mongoose.Schema( {name: String}, {timestamps: true} );