const express = require('express');
const app = express();


app.get('/registration_number/:lic', function(req, res){
  res.send('/', req.params.lic);
});


app.set('port', (process.env.PORT || 5000));

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});
