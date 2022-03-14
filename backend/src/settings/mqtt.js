const mgs = require("mongoose");
var Dispositivo = require('../models/model_dispositivo')
var Categoria = require('../models/model_categoria')
var validator = require('validator');
//conexión con broker
var mqtt = require('mqtt');
const { handle } = require("express/lib/application");
var client  = mqtt.connect('mqtt://test.mosquitto.org')

function EventoConectar() {
    client.subscribe('LAB4Unicauca/#', function (err) {
      // if (!err) {
      //   client.publish('Temperatura', '30')
      // }
    })
  }
  
  function EventoMensaje(topic, message) {
    var datos = message.toString().split('/');
    date=datos[0];
    variable=datos[1];
    tipoDato=datos[2];
    lati=datos[3];
    long=datos[4];
    // console.log(date +"-" +variable+"-" +lati+"-" +long )
    var nombre = "Dispositivo no encontrado";
    if(topic=="LAB4Unicauca/Arduino"){
        nombre = "Arduino";
      }
    
      if(topic=="LAB4Unicauca/Esp"){
        nombre = "Esp";
      }
      
      if(topic=="LAB4Unicauca/Rasp"){
        nombre = "Rasp";
      }
    
      if(topic=="LAB4Unicauca/Beagle"){
        nombre = "Beagle";
      }
      var categoriaObj
      var categoriaId
      Categoria.findOne({ name: nombre }, function(error, categoria) {
        if (error) {
          return handleError(error);
        }
        var datoDisp = {
          "_id": new mgs.Types.ObjectId(),
          "categorie": nombre,
          "variable": variable ,
          "tipoVariable" : tipoDato,
          "latitud": lati,
          "longitud": long,
          "date": date
        }
        
      console.log(categoria.DatosId)
      Dispositivo.create(datoDisp)
      categoria.DatosId.push(datoDisp._id);
      categoria.save();
      console.log(datoDisp)
      });

    }

  console.log("Soiiiiii")

client.on('connect',  EventoConectar)
client.on('message',  EventoMensaje)
