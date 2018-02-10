const express = require("express");
const app = express();
const port = 3000;
const routes = require('./routes')(app);

app.listen(port, function(req,res){
  console.log('Express listening on port', port);
});