const mongoose = require('mongoose');
const ElevSchema = new mongoose.Schema({
    navn :String,
    klasse: String,
    meldinger : [
        {type: mongoose.Schema.Types.ObjectId,ref:'Melding'}
    ]
})

module.exports = mongoose.model('Elev',ElevSchema, 'elever');
