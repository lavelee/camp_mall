module.exports = {
  admin: {
    main: function(req, res){
      res.send("this is admin");
    },
    products: function(req, res){
      res.render('admin/products');
    },
  },
  root: function(req, res){
    res.send("this is root");
  },
  admin3: function(req, res){},
  admin4: function(req, res){},
};