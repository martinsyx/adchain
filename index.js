var express = require('express');
var app = express();
app.set('views','./view');
app.set('view engine','ejs');
app.use(express.static('./public', {
    maxAge: '0', //no cache
    etag: true
}));
app.get('/', function (req, res) {
  // res.send('Hello World!');
  res.render('index');
});

var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});