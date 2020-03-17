// Get references to page elements
var $exampleText = $("#example-text");
var $exampleDescription = $("#example-description");
var $submitBtn = $("#submit");
var $exampleList = $("#example-list");

function ShowTheSectors() {
	var queryURL =
		"https://financialmodelingprep.com/api/v3/stock/sectors-performance";
	$.ajax({
		url: queryURL,
		method: "GET"
	}).then(function(response) {
		console.log(response.sectorPerformance);
		var dataArr = response.sectorPerformance;
		dataArr.forEach(function(sector, item, array) {
			var sector = response.sectorPerformance[item].sector;
			var changes = parseFloat(
				response.sectorPerformance[item].changesPercentage
			);
			var style = "";
			if (changes > 0) {
				style = "style='color: green;'";
			} else if (changes < 0) {
				style = "style='color: red;'";
			}
			console.log(sector);
			console.log(changes);
			var SectorPercentage =
				"<tr> <th>" +
				sector +
				"</a></th> <td " +
				style +
				"> " +
				changes +
				" </td> </tr>";
			$(".tbody").append(SectorPercentage);
		});
	});
}
ShowTheSectors();

// The API object contains methods for each kind of request we'll make
var API = {
	saveExample: function(example) {
		return $.ajax({
			headers: {
				"Content-Type": "application/json"
			},
			type: "POST",
			url: "api/examples",
			data: JSON.stringify(example)
		});
	},
	getExamples: function() {
		return $.ajax({
			url: "api/examples",
			type: "GET"
		});
	},
	deleteExample: function(id) {
		return $.ajax({
			url: "api/examples/" + id,
			type: "DELETE"
		});
	}
};

// refreshExamples gets new examples from the db and repopulates the list
var refreshExamples = function() {
	API.getExamples().then(function(data) {
		var $examples = data.map(function(example) {
			var $a = $("<a>")
				.text(example.text)
				.attr("href", "/example/" + example.id);

			var $li = $("<li>")
				.attr({
					class: "list-group-item",
					"data-id": example.id
				})
				.append($a);

			var $button = $("<button>")
				.addClass("btn btn-danger float-right delete")
				.text("ｘ");

			$li.append($button);

			return $li;
		});

		$exampleList.empty();
		$exampleList.append($examples);
	});
};

// handleFormSubmit is called whenever we submit a new example
// Save the new example to the db and refresh the list
var handleFormSubmit = function(event) {
	event.preventDefault();

	var example = {
		text: $exampleText.val().trim(),
		description: $exampleDescription.val().trim()
	};

	if (!(example.text && example.description)) {
		alert("You must enter an example text and description!");
		return;
	}

	API.saveExample(example).then(function() {
		refreshExamples();
	});

	$exampleText.val("");
	$exampleDescription.val("");
};

// handleDeleteBtnClick is called when an example's delete button is clicked
// Remove the example from the db and refresh the list
var handleDeleteBtnClick = function() {
	var idToDelete = $(this)
		.parent()
		.attr("data-id");

	API.deleteExample(idToDelete).then(function() {
		refreshExamples();
	});
};

$(document).on("submit", "#add_all", handleCompanyFormSubmit);
$(document).on("submit", "#searchSymbol", handleCompanySearch);

function handleCompanySearch(event) {
	event.preventDefault();
	var symbol = $("#searchBarText")
		.val()
		.trim();
	// console.log(symbol);

	$.ajax({
		url: "/company/" + symbol,
		method: "GET",
		success: function(response) {
			window.location.href = "/company/" + symbol;
		}
	});
}

function handleCompanyFormSubmit(event) {
	event.preventDefault();

	// PSEUDO CODE
	// AJAX CALL TO GET S&P500 COMPANY SYMBOL from financial modeling API
	//  THEN inside of it, for loop for 500 times ANOTHER AJAX CALL TO GET COMPANY INFO from financial modeling API
	// THEN using response of it, get symbol,price,beta....,image from it and store it on variable
	// then call upsertCompany to post the data into our DB

	$.ajax({
		url: "https://financialmodelingprep.com/api/v3/stock/actives",
		method: "GET"
	}).then(function(response) {
		// console.log(response);
		for (var i = 0; i < response.mostActiveStock.length; i++) {
			var ticker = response.mostActiveStock[i].ticker;
			$.ajax({
				url:
					"https://financialmodelingprep.com/api/v3/company/profile/" +
					ticker,
				method: "GET"
			}).then(function(response) {
				var symbol = response.symbol;
				var price = response.profile.price;
				var beta = response.profile.beta;
				var volAvg = response.profile.volAvg;
				var mktCap = response.profile.mktCap;
				var lastDiv = response.profile.lastDiv;
				var range = response.profile.range;
				var changes = response.profile.changes;
				var changesPercentage = response.profile.changesPercentage;
				var companyName = response.profile.companyName;
				var exchange = response.profile.exchange;
				var industry = response.profile.industry;
				var website = response.profile.website;
				var description = response.profile.description;
				var ceo = response.profile.ceo;
				var sector = response.profile.sector;
				var image = response.profile.image;

				upsertCompany({
					symbol: symbol,
					price: price,
					beta: beta,
					volAvg: volAvg,
					mktCap: mktCap,
					lastDiv: lastDiv,
					range: range,
					changes: changes,
					changesPercentage: changesPercentage,
					companyName: companyName,
					exchange: exchange,
					industry: industry,
					website: website,
					description: description,
					ceo: ceo,
					sector: sector,
					image: image
				});
			});
		}
	});
}

function upsertCompany(companyData) {
	$.post("/api/insert", companyData);
}

// Add event listeners to the submit and delete buttons
$submitBtn.on("click", handleFormSubmit);
$exampleList.on("click", ".delete", handleDeleteBtnClick);
