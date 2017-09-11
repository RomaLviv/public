const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const cors = require('cors');
const port = 8000;


app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({'extended':'true'}));
app.use(cors());

app.get('*', function(req, res) {
    res.sendFile(__dirname + '/public/index.html');
});

app.listen(port, function (err) {
    if (err) throw err;
    console.log('Server start on port 8000!');
});