const mongoose  = require('mongoose');
const MeldingSchema = new mongoose.Schema({
    kommentar: String,

    elever :{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Elev'
    }
},
{
    timestamps:true
})

module.exports = mongoose.model('Melding',MeldingSchema, 'meldinger');