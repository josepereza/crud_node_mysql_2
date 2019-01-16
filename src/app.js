const path = require('path');
const express = require('express');
const morgan = require('morgan');
const mysql = require('mysql');
const myConnection = require('express-myconnection');

// Settings
const app = express();
app.set('port', process.env.PORT || 3000);

// Middlewares
app.use(morgan('dev'));
app.use(myConnection(mysql, {
  port: 3306,
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'crud_node'
}, 'single'));

// Routes


// Server Listening
app.listen(app.get('port'), () => {
  console.log(`Server ON in localhost:${app.get('port')}`);
});