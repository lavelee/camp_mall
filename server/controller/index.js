module.exports = {
  admin: {
    main: function(req, res){
      res.send("this is admin");
    },
    products: function(req, res){
      res.render('admin/products');
    },
  },
  products: {
    main: function(req, res){
      res.render('admin/products');
    },
    form: function(req, res){
      res.render('admin/form');
    },
    post: function(req, res){
      console.log("reached here!");
      let data = {
        name: req.body.name,
        price: req.body.price,
        description: req.body.description,
      };
      console.log(data);
      res.send("success");
    },
  },
  root: function(req, res){
    res.send("this is root");
  },
  admin3: function(req, res){},
  admin4: function(req, res){},
};