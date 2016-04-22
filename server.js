var express = require('express');		// require express module
var app = express();		// create express app, calls 'express' as a function
var PORT = process.env.PORT || 3000;

app.get('/', function (req, res) {
	res.send('Todo API Root');
});

app.listen(PORT, function () {
	console.log('Express listening on port ' + PORT + '!')
});