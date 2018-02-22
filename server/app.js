const express = require("express");
const app = express();
const routes = require('./routes');
const path = require('path');

const logger = require('morgan');
const bodyParser = require('body-parser');

// const mongoose = require('mongoose');
// mongoose.Promise = global.Promise;
// mongoose.connection.on('error', console.error);
// mongoose.createConnection('mongodb://127.0.0.1:27017/blog');

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

routes(app);
const port = 3000;
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.listen(port, function(req,res){
  console.log('Express listening on port', port);
});