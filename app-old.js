const http = require('http')

http.createServer( (req, res) => {
    res.writeHead(200, { 'Content-Type': 'application/json'}) // Define el tipo de contenido que se enviará

    let salida = {
        nombre: 'Ricardo',
        edad: 29,
        url: req.url
    }
    res.write( JSON.stringify(salida))  //Transforma el objeto en un json
    //res.write('Hola mundo')
    res.end()
})
.listen(8080)

console.log('Escuchando el puerto 8080');
