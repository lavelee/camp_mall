const c = require('./controller');

function route(app){
  app.get('/admin',c.admin.main);
  app.get('/admin/products',c.admin.products);
  app.get('/products',c.products.main);
  app.get('/products/write',c.products.form);
  app.post('/products/write',c.products.post);
  app.get('/',c.root);
}
module.exports = route;