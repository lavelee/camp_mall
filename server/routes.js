const c = require('./controller');
function route(app){
  app.get('/admin',c.admin);
  app.get('/',c.root);
}
module.exports = route;