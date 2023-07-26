const express = require('express');
const path =require('path');
const morgan = require('morgan');
const mysql = require('mysql');
const myConnection = require('express-myconnection');

const app = express();
// settings

const customerRoutes = require('./routes/customer');


app.set('port', process.env.PORT || 3000);M
app.set('view engine','ejs');
app.set('views', path.join(_dirname, 'views'));


//middlewares
app.use(morgan('dev'));
app.use(myConnection(mysql, {
    host: 'localhost',
    user: 'root',
    password: 'contraseña',
    port: 3306,
    database: 'crudnodejsmysql'
}, 'single'));


//routes

app.use('/', customerRoutes);


app.use(express.static(path.join(_dirname, 'public')))


app.listen(app.get('port'), () =>{
    console.log('Server on port 3000');
});