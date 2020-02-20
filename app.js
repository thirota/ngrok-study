var ngrok = require('ngrok'),
    express = require('express');

require('dotenv').load();
var app = express();

app.get('/', function(req, res) {
    res.send('Hello World!');
});

var server = app.listen(process.env.EXPRESS_PORT, function() {
    var host = server.address().address,
        port = server.address().port;

    console.log('listening at http://%s:%s', host, port);
    ngrok.connect({
        port: port
    },
    function (err, url) {
        console.log(url);
    });
});

