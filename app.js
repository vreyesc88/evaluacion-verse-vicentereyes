const express      = require('express');
const path         = require('path');
const mysql        = require('mysql');
const myconnection = require('express-myconnection');

const app = express();

// rutas importadas
const  registroRutas = require('./src/routes/registro');

// configuraciones
app.set('port', process.env.PORT || 5000);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'src/views'));

// funciones
app.use(myconnection(mysql,{
    host: 'localhost',
    user: 'root',
    password: '',
    port: 3306,
    database: 'evaluacion'
}, 'single'));

// requerir metodos desde formularios
app.use(express.urlencoded({extended: false}));

// rutas
app.use('/', registroRutas);

//archivo static
app.use(express.static(path.join(__dirname, 'src/views')));

app.listen(5000, () => {
    console.log('Server on port 5000');
});