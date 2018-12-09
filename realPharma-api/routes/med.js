var express = require("express");
var router = express.Router();
var User = require("../models/user");
var EachMedicine = require("../models/eachmedicine");
var middleware = require("../middleware");

router.get("/verify", middleware.isLoggedIn, function(req, res){

      res.render("verify");



});
router.post("/verify",middleware.isLoggedIn, function(req, res){

});

router.get("/result", function(req, res){

  EachMedicine.find({}).populate("retailer").populate('manufacturer').exec(function(err, response){
    console.log(response)
    res.render("result",{response:response});
  });
});

router.get("/report", function(req, res){
  res.render("report");
})




module.exports = router;
