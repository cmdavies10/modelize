var db = require("../models");

module.exports = function(app) {
	// Load index page
	app.get("/", function(req, res) {
		db.Company.findAll({}).then(function(dbExamples) {
			res.render("index", {
				msg: "Welcome!",
				examples: dbExamples
			});
		});
	});

	app.get("/company", function(req, res) {
		db.Company.findAll({}).then(function(company) {
			// res.json(company); => array of objects
			res.render("companies", {
				company: company
			});
		});
	});

	app.get("/list", function(req, res) {
		// db.Company.findAll({}).then(function(company){
		//   res.json(company);
		//   console.log(company[0].dataValues.symbol);
		// })

		// Testuser model has one attribute, which is symbol.
		// by using symbol, we call ajax to get company info
		db.Testuser.findAll({}).then(function(testuser) {
			res.render("lists", {
				testuser: testuser
			});
		});
	});

	// Load company page and pass in an example by symbol
	app.get("/company/:symbol", function(req, res) {
		db.Company.findOne({ where: { symbol: req.params.symbol } }).then(
			function(company) {
				res.render("company", {
					company: company
				});
			}
		);
	});

	// Render 404 page for any unmatched routes
	app.get("*", function(req, res) {
		// redirect it to index
		res.render("404");
	});
};
