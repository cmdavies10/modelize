var db = require("../models");

module.exports = function(app) {
	// Get all examples
	app.get("/api/company", function(req, res) {
		// need to check post-api-routes in previous exercise on here
		db.Company.findAll({
			// will be changed to db.User
			include: [db.Financials]
		}).then(function(Company) {
			res.json(Company);
		});
	});

	app.get("/api/company/:symbol", function(req, res) {
		// 2; Add a join to include all of the Author's Posts here
		db.Company.findOne({
			where: {
				symbol: req.params.symbol
			},
			// will be changed to db.User
			include: [db.Financials]
		}).then(function(db) {
			res.json(db);
		});
	});

	app.get("/api/financials", function(req, res) {
		db.Financials.findAll({}).then(function(Financials) {
			res.json(Financials);
		});
	});

	// Create a new Company
	app.post("/api/insert", function(req, res) {
		db.Company.create({
			symbol: req.body.symbol,
			price: req.body.price,
			beta: req.body.beta,
			volAvg: req.body.volAvg,
			mktCap: req.body.mktCap,
			lastDiv: req.body.lastDiv,
			range: req.body.range,
			changes: req.body.changes,
			changesPercentage: req.body.changesPercentage,
			companyName: req.body.companyName,
			exchange: req.body.exchange,
			industry: req.body.industry,
			website: req.body.website,
			description: req.body.description,
			ceo: req.body.ceo,
			sector: req.body.sector,
			image: req.body.image
		}).then(function(Company) {
			res.json(Company);
		});
	});

	app.post("/api/list/insert", function(req, res) {
		db.Testuser.create({
			symbol: req.body.symbol
		}).then(function(TestuserData) {
			res.json(TestuserData);
		});
	});

	app.get("/api/list", function(req, res) {
		db.Testuser.findAll({}).then(function(TestuserData) {
			res.json(TestuserData);
		});
	});

	app.delete("/api/list/:id", function(req, res) {
		db.Testuser.destroy({ where: { id: req.params.id } }).then(function(
			db
		) {
			res.json(db);
		});
	});
	// Delete an example by id
	app.delete("/api/conmpany/:id", function(req, res) {
		db.Company.destroy({ where: { id: req.params.id } }).then(function(
			dbExample
		) {
			res.json(Company);
		});
	});
};
