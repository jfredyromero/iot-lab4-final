const mongoose = require('mongoose');
const { Schema } = mongoose;
const DatoDispositivo = require('../models/model_dispositivo')
const Categoria = new Schema({
  name:  {
      type: String,
      require : true
  },
  DatosId: [{
    type: Schema.Types.ObjectId,
    ref: 'DatoDispositivo'
}]
},{ collection: 'Categoria'})

const Categorie = mongoose.model('Categoria', Categoria);
module.exports = Categorie; 