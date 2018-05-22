const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
mongoose.connection.on('error', console.error);
mongoose.connect('mongodb://127.0.0.1:27017/blog');

const m_item = require('./model/item');

let data = { name: '1', price: '2', description: '3' };

 = mongoose.connection;


let a = new m_item(data);
console.log(data);



db.collection.insert(
  <document or array of documents>,
  {
    writeConcern: <document>,
    ordered: <boolean>
  }
)