/**
 * Created by Vincent on 7/12/17.
 */
var express = require('express');
var app = express();
var Util_1 = require('./Util');

app.get('/', function (req, res) {
    res.send('Hello World')
});

app.listen(3000);