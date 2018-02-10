const c = require('./controller');
function route(app){
  app.get('/admin',c.admin.main);
  app.get('/admin/products',c.admin.products);
  app.get('/',c.root);
}
module.exports = route;