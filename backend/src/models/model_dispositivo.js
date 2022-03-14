const mongoose = require('mongoose');
const { Schema } = mongoose;
const Categoria = require('../models/model_categoria')

const DatoDispositivo = new Schema({
  _id: Schema.Types.ObjectId,
  //categorie: {type: Schema.Types.ObjectId, ref: Categoria , require:[true, "Categoria es obligatoria"]} , //Se puede relacionar con el id de categoria
  categorie: {type: String, require:[true, "Categoria es obligatoria"]} ,
  variable: {type: String, require:[true, "El valor es obligatoria"]},
  tipoVariable: {type: String, require:[true, "El tipo es obligatoria"]},
  latitud:   {type: String, require:[true, "Latitud es obligatoria"]},
  longitud: {type: String, require:[true, "Longitud es obligatoria"]},
  date: { type: Date, default: Date.now },
}, {collection: 'DatoDispositivo'});

const Dispositivo = mongoose.model('DatoDispositivo', DatoDispositivo);
module.exports = Dispositivo; 