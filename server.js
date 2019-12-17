const express = require("express");
const app = express();

const hbs =require('hbs')
require('./hbs/helpers') //Cargamos el módulo para ejecutar lo que se encuentra en helpers.js
// Como no exportamos ninguna variable, no fue requerido el uso de module.exports en helpers.js

const port = process.env.PORT || 3000

// Los parciales se usan para no tener que copiar la misma estructura html en todas las páginas
// __dirname: no importa el path, toma todo el path (vaeriable global) y concatena la siguiente ruta...
hbs.registerPartials( __dirname + '/views/parciales')

/* Para visualizar una página web por medio de express, se usa ese middleware, se va a ejecutar siempre,
No importa que url es el que la persona pida*/
//Todo lo agregado en public será de dominio público
app.use( express.static( __dirname + '/public')) /* Agregamos el folder a hacer público*/

// Express HBS engine
// Con esto transformamos la página web en un sitio dinámico al aceptar variables. se usa handlebars o hbs
app.set('view engine', 'hbs')

// //Helpers
// hbs.registerHelper('getAnio', () => {
//     return new Date().getFullYear()
// })

// hbs.registerHelper('capitalizar', (texto) => {
//     let palabras = texto.split(' ')
//     palabras.forEach((palabra, idx) => {
//         palabras[idx] = palabra.charAt(0).toUpperCase() + palabra.slice(1).toLowerCase()
//     });
//     return palabras.join(' ')
// })

// A diferencia del módulo http que puede escuchar cualquier url ("/", "/data", "/data/etc"), express solo puede escuchar la url que 
// se le defina en el get, en este caso a "/", cualquier otra cosa agregada no la podrá obtener
app.get("/", (req, res) => {

    // Cualquier petición que entre a "/", va a renderizar el home
    res.render('home', {
        //variables dentro de home.hbs
        nombre: 'ricardo tornero',
        //anio: new Date().getFullYear()
    })


  //res.send("Hola Mundo");
//   let salida = {
//       nombre : 'Ricardo',
//       edad: 29,
//       url: req.url
//   }

  // Con express no es necesario especificar el tipo de contenido ya que
  // .send automáticamente detecta qué es, en este caso un Content-Type: application/json
  //res.send(salida)

});

app.get("/about" , (req, res) => {
    res.render('about')
})

app.listen(port, () => console.log(`Escuchando peticiones desde el puerto ${port}`));
