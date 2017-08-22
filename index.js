const express = require('express');
const app = express();
const exphbs = require('express3-handlebars');
const bodyParser = require('body-parser');

app.get('/registration_number/:lic', function(req, res) {
  var license = (req.params.lic).substr(0, 2).toUpperCase() + ' ' + (req.params.lic)
            .substr(2).toLowerCase()
  res.render('pages/index', {
    licenceNum: license
  });
});


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


app.set('port', (process.env.PORT || 5000));

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});
