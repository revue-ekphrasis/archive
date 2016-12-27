var express = require('express');
var app = express();

app.use(express.static(__dirname + '/public/views'));
app.use('/images', 		express.static(__dirname + '/public/images'));
app.use('/Polices', 	express.static(__dirname + '/public/polices'));
app.use('/javascripts', express.static(__dirname + '/public/javascripts'));
app.use('/pdf', 		express.static(__dirname + '/public/pdf'));

app.set('port', (process.env.PORT || 8080));

app.get('/', function (req, res) {
	console.log(req.params.path);
	res.render("index.html");
});

app.use(function(req, res, next) {
    var err = new Error(req.url + " not found!");
    err.status = 404;
    next(err);
});

app.listen(app.get('port'), function () {
	console.log('Example app listening on port ' + app.get('port') + '!');
});