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
  // res.render('dungeon');
});
app.get('/work', function (req, res, next) {
  res.render('work');
});
app.get('/vw', function (req, res, next) {
  res.render('vw');
});
app.get('/gore', function (req, res, next) {
  res.render('gore');
});
app.get('/2048', function (req, res, next) {
  res.render('2048');
});
app.get('/bird', function (req, res, next) {
  res.render('bird');
});
app.get('/dungeon', function (req, res, next) {
  res.render('dungeon');
});



var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
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

app.use('/word', bodyParser.urlencoded({
    extended: true
}));

app.post('/word', function(req, res, next) {
  /*
  * 1 - приставка
  * 2 - корень
  * 3 - суффикс
  * 4 - окончание
  * 5 - постфикс
  */
  var array = [1,2,4];
  var word = req.body.word.replace(/-/g, '');
  var analis = JSON.stringify(array);
  connection.query('insert into morfems set word = "'+word+'", morf_word = "'+req.body.word+'", analis = \''+analis+'\'', function (error, results, fields) {
    if (error) throw error;
    res.send({status: 'ok', text: analis, id: results.insertId});
  });

});
app.use('/removeWord', bodyParser.urlencoded({
    extended: true
}));

app.post('/removeWord', function(req, res, next) {
  connection.query('DELETE FROM nouns_morf where IID = '+req.body.id, function (error, results, fields) {
    if (error) throw error;
    res.send({status: 'ok', text: results});
  });
});

app.use('/saveWord', bodyParser.urlencoded({
    extended: true
}));

app.post('/saveWord', function(req, res, next) {
  connection.query(`INSERT INTO morfems SET word = '`+req.body.word+`', analis = '`+req.body.analis+`', morf_word = '`+req.body.morf_word+`'`, function (error, results, fields) {
    if (error) throw error;
    res.send({status: 'ok', text: results});
  });
});

app.use('/getWord_toAdd', bodyParser.urlencoded({
    extended: true
}));

app.post('/getWord_toAdd', function(req, res, next) {
  // connection.query('select * from nouns_morf WHERE `IID` > 2000 ORDER BY RAND() LIMIT 1', function (error, results, fields) {
  connection.query('select * from nouns_morf WHERE word like "%ый%" order by Rand() LIMIT 1', function (error, results, fields) {
    if (error) throw error;
    res.send({status: 'ok', text: results});
  });
});
app.use('/getWords', bodyParser.urlencoded({
    extended: true
}));

app.post('/getWords', function(req, res, next) {
  connection.query('select * from morfems', function (error, results, fields) {
    if (error) throw error;
    res.send({status: 'ok', text: results});
  });
});
app.use('/getText', bodyParser.urlencoded({
    extended: true
}));

app.post('/getText', function(req, res, next) {
  connection.query('select * from education', function (error, results, fields) {
    if (error) throw error;
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
