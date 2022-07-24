const express = require('express');
const mysql = require('mysql');

const bodyParser = require('body-parser');

const PORT = process.env.PORT = 3050;

const app = express();

app.use(bodyParser.json());

// MYSQL
var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : 'secret',
    database: 'node20_mysql'
  });


app.get('/', (req,res) => {
    res.send('Welcome to my API!')
});

// todos los clientes

app.get('/clientes', (req,res) => {
    res.send('Listado de Clientes')
});

app.get('/clientes/:id', (req,res) =>{
    res.send('Obtiene Cliente por Id')
});

app.post('/clientes/add', (req,res) => {
    res.send('Nuevo Cliente')
});

app.put('/clientes/update/:id', (req,res) =>{
    res.send('Actualiza Cliente')
});

app.delete('/clientes/delete/:id', (req,res) =>{
    res.send('Borra Cliente')
});

// Check connect
connection.connect(error => {
    if (error) throw error;  
    console.log('Database server running');
});

app.listen(PORT, ()=> {
    console.log('Server running on port ',PORT)
});
