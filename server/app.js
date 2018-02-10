const express = require("express");
const app = express();
const routes = require('./routes');
const path = require('path');

let mongoose = require('mongoose');
let mongoose_auto_inc = require('mongoose-auto-increment');
let db = mongoose.connection;
db.on('error', console.error);
db.once('open', function(){
    console.log('mongodb connect');
});
let connect = mongoose.createConnection('mongodb://127.0.0.1:27017/blog');
mongoose_auto_inc.initialize(connect);

routes(app);
const port = 3000;
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.listen(port, function(req,res){
  console.log('Express listening on port', port);
});