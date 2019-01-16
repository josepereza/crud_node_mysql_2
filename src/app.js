const path = require('path');
const express = require('express');
const morgan = require('morgan');
const mysql = require('mysql');
const myConnection = require('express-myconnection');

// Initial config
const routes = require('./routes/routes');
dbOptions =  {
  port: 3306,
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'crud_node'
}; // Options to myConnection


// Settings
const app = express();
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// Static files
app.use(express.static(path.join(__dirname, 'public')));

// Middlewares
app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}));
app.use(myConnection(mysql, dbOptions, 'single'));

// Routes
app.use('/', routes);


// Server Listening
app.listen(app.get('port'), () => {
  console.log(`Server ON in localhost:${app.get('port')}`);
});