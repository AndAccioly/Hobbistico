
const express = require('express')
const app = express()
const bodyParser = require('body-parser')
app.set('trust proxy', 'loopback')

app.use(bodyParser.urlencoded({extended: true}))

const hostname = '127.0.0.1';
const port = 3000;

app.post('/expressjs/usuarios/', (req, resp)=>{
    console.log(req.body)
    resp.send('<h1> Deu bom </h1>')
})

app.get('/expressjs/', function (req, res) {
    res.send(`HELLO FUCKING WORLD!!`)
})

app.get('/expressjs/testing', function (req, res) {
    res.json({
       fuckyou: true 
    });
})

app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port} WITH EXPRESS HTTP SERVER`);
});