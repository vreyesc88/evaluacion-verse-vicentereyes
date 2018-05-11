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
app.use(myconnection(mysql, {    
    host: 'us-cdbr-gcp-east-01.cleardb.net',
    user: 'b1b3df40516a05',
    password: '847b91d5',
    port: 3306,
    database: 'gcp_ff6f1548f5c45a8d8600'
}, 'single'));

// requerir metodos desde formularios
app.use(express.urlencoded({extended: false}));

// rutas
app.use('/', registroRutas);

//archivo static
app.use(express.static(path.join(__dirname, 'src/views')));

app.listen(app.get('port'), () => {
    console.log('Server on');
});