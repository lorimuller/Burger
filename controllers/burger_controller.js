var express = require("express");
var router = express.Router();
var burger = require("../models/burger.js");

// gets all the burgers in the db
router.get("/", function(req, res) {
	burger.selectAll(function(data) {
		res.render("index", { burgers: data });
	});
});

// adds a burger
router.post("/", function(req, res) {
	console.log(req.body);
	burger.insertOne(req.body.name, function() {
		res.redirect("/");
	});
});

// updates a burger entry
router.put("/:id", function(req, res) {
	console.log(req.body);
	burger.updateOne(req.params.id, function() {
		res.redirect("/");
	});
});

// deletes a burger
router.delete("/:id", function(req, res) {
    console.log('hey');
	burger.updateOne(req.params.id, function(result) {
		res.redirect("/");
	});
});

module.exports = router;
// var express = require("express");

// var router = express.Router();

// // Import the model (cat.js) to use its database functions.
// var burgers = require("../models/burger.js");
// var bodyParser = require('body-parser');

// router.use(bodyParser.json());
// router.use(bodyParser.urlencoded({extended: false}));
// router.use(bodyParser.text());
// router.use(bodyParser.json({type:'application/vnd.api+json'}));



// router.get('/', function(req,res){
//     res.redirect('/burgers');
//   });
  
// router.get('/burgers', function(req,res){
//     burgers.read(function(data){
//       // console.log(data);
//       var hbs_object = {burger: data};
//       // console.log(hbs_object);
//       res.render('index', hbs_object);
//     });
//   });



// router.post('/burgers/add', function(req, res){
//     // console.log(req.body.user_burger)
//     burgers.insert(req.body.user_burger, function(data){
//       res.redirect('/burger');
//     });
//   });

// router.put('/burgers/update/:id?', function(req,res){
//     var user_id = parseInt(req.params.id);
//     burgers.update(user_id, function(data){
//       res.redirect('/burgers');
//     });
//   });
  
//   outer.put('/burgers/delete/:id?', function(req,res){
//     var user_id = parseInt(req.params.id);
//     burger.delete(user_id, function(data){
//       res.redirect('/burgers');
//     });
//   });


// // Export routes for server.js to use.
// module.exports = router;