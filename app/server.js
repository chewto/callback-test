var express = require('express') //llamamos a Express
var app = express()
app.use(express.json())


var port = process.env.PORT || 8080  // establecemos nuestro puerto

app.get('/', function(req, res) {
  res.json({ mensaje: '¡Hola Mundo!' })   
})

app.get('/cervezas', function(req, res) {
  res.json({ mensaje: '¡A beber cerveza!' })  
})

app.post('/callback-test', function(req, res) {
  res.json({ mensaje: 'Método post' })
  console.log({requestBody: req.body})
})

app.del('/', function(req, res) {
  res.json({ mensaje: 'Método delete' })  
})

// iniciamos nuestro servidor
app.listen(port)
console.log('API escuchando en el puerto ' + port)