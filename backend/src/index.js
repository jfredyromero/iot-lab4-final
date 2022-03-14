const express = require('express')
const morgan = require('morgan')
const bodyParser = require('body-parser')
const path = require('path')
const app = express()
const mqtt = require('./settings/mqtt')

//Asingnando un puerto
const server = app.listen(3000,()=>{
    let port = server.address().port
    console.log("running in port ", port)
  })
  
//middleware
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json({extended : true}));

//routes
app.use('/api',require('./routes/app'));

//public
app.use(express.static(path.join(__dirname, 'public')))

//----------------------------------------------MQTT----------------------------------------
//conexión con broker
// var mqtt = require('mqtt')
// var client  = mqtt.connect('mqtt://test.mosquitto.org')


// function EventoConectar() {
//   client.subscribe('LAB4Unicauca/#', function (err) {
//     // if (!err) {
//     //   client.publish('Temperatura', '30')
//     // }
//   })
// }

// function EventoMensaje(topic, message) {
//   var datos = message.toString().split('/');
//   date=datos[0];
//   variable=datos[1];
//   lati=datos[2];
//   long=datos[3];
//   // console.log(date +"-" +variable+"-" +lati+"-" +long )
//   var nombre = "Dispositivo no encontrado";
//   if(topic=="LAB4Unicauca/Arduino"){
//       nombre = "Arduino";
//     }
  
//     if(topic=="LAB4Unicauca/Esp"){
//       nombre = "Esp";
//     }
    
//     if(topic=="LAB4Unicauca/Rasp"){
//       nombre = "Rasp";
//     }
  
//     if(topic=="LAB4Unicauca/Beagle"){
//       nombre = "Beagle";
//     }
    
//         //  POST PARA CREAR USUARIO EN MONGO
//       mgs.model("Dispositivo").create({
//           "categorie":  nombre,
//           "variable": variable ,
//           "latitud": lati,
//           "longitud": long,
//           "date": date,
//       }, (err,dispositivo)=>{
//           console.log(dispositivo);
//           console.log("Estoy entrando aqui")
//       })

//   //   client.end()
// }


// client.on('connect',  EventoConectar)
// client.on('message',  EventoMensaje)
