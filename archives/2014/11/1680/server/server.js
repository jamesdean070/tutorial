var express = require('express');
var app = express();
var path = require('path');
var dirClient = path.resolve(__dirname, '../client');


app.use(express.static(dirClient));
app.get('/', function (req, res) {
  var fileName =  dirClient + '/index.html';

  res.sendFile(fileName, function (err) {
    if (err) {
      console.log(err);
      res.status(err.status).end();
    }
    else {
      console.log('Sent:', fileName);
    }
  });
});

var server = app.listen(3001, function () {

  var host = server.address().address
  var port = server.address().port

  console.log('Example app listening at http://%s:%s', host, port)

})