'use strict'
const express = require('express');
const app = express();
const exphbs = require('express3-handlebars');
const bodyParser = require('body-parser');
const session = require('express-session');
const flash = require('express-flash');
const RegistrationRoutes = require('./regnum');
const mongoURL = process.env.MONGO_DB_URL ||
  'mongodb://localhost/registration_numbers';
const Models = require('./models');
const models = Models(mongoURL);
const regNumbersRoutes = RegistrationRoutes(models);

//configuring handlebars
app.engine('handlebars', exphbs({
  defaultLayout: 'main'
}));
app.set('view engine', 'handlebars');
//using static
app.use(express.static('public'));

//using bodyParser
app.use(bodyParser.urlencoded({
    extended: false
  }))
  // parse application/json
app.use(bodyParser.json());
//configuring session
app.use(session({
  secret: 'keyboard cat',
  cookie: {
    maxAge: 60000 * 30
  },
  resave: true,
  saveUninitialized: true
}));

app.use(flash());

app.get('/', regNumbersRoutes.index);
app.post('/', regNumbersRoutes.createReg);
app.get('/filter', regNumbersRoutes.filter);
app.post('/filter', regNumbersRoutes.filter);


app.set('port', (process.env.PORT || 5000));

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});
