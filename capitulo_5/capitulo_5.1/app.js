var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.status(201);

  if (req.accepts('text')) {
    res.write('name; email\n')
    res.write('William Bruno; wbruno@gmail.com\n');
    res.end();
  } else {
    res.json({ 'name': 'William Bruno', 'email': 'wbrunom@gmail.com' });
  }
});

var server = app.listen(3000, function () {
    var host = server.address().address;
    var port = server.address().port;
    console.log('Example app listening at http://%s:%s', host, port);
});
