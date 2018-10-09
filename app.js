var express                    = require('express');
var session                    = require('express-session');
var SessionStore               = require('express-mysql-session');
var bodyParser                 = require('body-parser');
var http                       = require('http');
var connect                    = require('connect');
var path                       = require('path');
var app                        = express();

app.engine('ejs', require('ejs-locals'));
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');


app.use(express.static(__dirname + '/client'));


app.get('/', function (req, res, next) {
  res.render('index');
});
app.get('/work', function (req, res, next) {
  res.render('work');
});
app.get('/vw', function (req, res, next) {
  res.render('vw');
});
app.get('/2048', function (req, res, next) {
  res.render('2048');
});
app.get('/bird', function (req, res, next) {
  res.render('gore');
});

var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'app',
  password : '1234567',
  database : 'elmsoftware'
});

// connection.connect();
app.use('/text', bodyParser.urlencoded({
    extended: true
}));

app.post('/text', function(req, res, next) {
  var array = req.body.text.split(' ');
  for (var i = 0; i < array.length; i++) {
    array[i] = '0';
  }
  // console.log(array);
  var analis = JSON.stringify(array);
  connection.query('insert into education set text = "'+req.body.text+'", name = "'+req.body.name+'", analis = \''+analis+'\'', function (error, results, fields) {
    if (error) throw error;
    console.log(results.insertId);
    res.send({status: 'ok', text: analis, id: results.insertId});
  });

});

app.use('/getText', bodyParser.urlencoded({
    extended: true
}));

app.post('/getText', function(req, res, next) {
  connection.query('select * from education', function (error, results, fields) {
    if (error) throw error;
    console.log(results);
    res.send({status: 'ok', text: results});
  });

});

app.use('/text2', bodyParser.urlencoded({
    extended: true
}));

app.post('/text2', function(req, res, next) {
  connection.query('update education set text = "'+req.body.text2+'", analis = \''+req.body.text+'\' where id = '+req.body.id+'', function (error, results, fields) {
    if (error) throw error;
    console.log('results.ok');
  });

  res.send({status: 'ok'});
});

app.use('/email', bodyParser.urlencoded({
    extended: true
}));

app.post('/email', function(req, res, next) {
  console.log(req.body);
  connection.query('insert into landing set email = "'+req.body.email+'"', function (error, results, fields) {
    if (error) throw error;
    console.log('__________results');
  });

  res.send({status: 'ok', text: 'req'});
});


// connection.end();

app.listen(3001, (err) => {
		if (err) return console.log("Ошибка запуска сервера:" + err.message);
		console.log('Проект запущен на '+3001+' порт');
});
