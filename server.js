var express = require('express'),
    path = require('path'),
    exphbs = require('express3-handlebars'),
    app = express();

app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');
app.use(express.static(path.join(__dirname + '/js')));
app.use(express.bodyParser({ keepExtensions: true, uploadDir: '/uploads' }));

app.get('/', function(req, res) {
  res.render('home');
});

app.post('/uploadfile', function(req, res) {
  var chunk;
  req.on('data', function(data) {
    chunk += data;
  }).on('end', function() {
    var buffer = new Buffer(chunk);
    console.log(buffer.toString());
    res.end('upload complete');
  });
});

app.listen(3000);
console.log('Listening on port 3000');
