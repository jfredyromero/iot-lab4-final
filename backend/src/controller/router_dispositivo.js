var validator = require('validator');
//Incluyendo modelos
const Dispositivo = require('../models/model_dispositivo')
const Categoria = require('../models/model_categoria')
//Incluyendo dB
const pool = require('../settings/db')

//GET


let getDocumentos = async (req, res) => {
    const dispositivo = await Dispositivo.find()
    Dispositivo.countDocuments({},(err, total) => {
      if(err){
        return res.json({
          status: 400,
          mensaje: "Error del leer el archivo",
          err
        })
        }
        res.json({status: 200, total,dispositivo})
        console.log(dispositivo)
        //res.render('index',{dispositivo})
    })
  }

module.exports = {
    getDocumentos
}
