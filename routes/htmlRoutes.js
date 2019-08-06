var db = require("../models");

module.exports = function (app) {
  
  // Load index page
  app.get("/", function(req, res){
    res.render("index");
  })

  // Load workshop page
  app.get("/workshop", function(req, res){
    res.render("workshop")
  })

  // Load chapter page 
  app.get("/chapter", function(req, res) {
    db.Chapter.findAll({}).then(function (data){
      console.log('chapter')
      res.render("chapter", {data});
    })  

  });

// load library page and pass all the data 
  app.get("/library", function (req, res) {
    db.Library.findAll({}).then(function(data){
      // console.log("==========   ", data);
      res.render("library", {data});
    })
  });



  // Render 404 page for any unmatched routes
  app.get("*", function (req, res) {
    res.render("404");
  });
};