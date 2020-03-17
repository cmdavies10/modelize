$(document).ready(function() {
	var ticker = $("#ticker").text();
	var name = $("#companyName").text();
	console.log(ticker);

	var baseURL = "https://financialmodelingprep.com/api/v3/";

	// Helper function to add the td on the table.
	function addTd(item, row) {
		$(row).append("<td>" + item + "</td>");
	}

	// AJAX call to get income statement data
	$.ajax({
		url: baseURL + "financials/income-statement/" + ticker,
		method: "GET"
	}).then(function(response) {
		console.log(response);
		for (var i = 4; i >= 0; i--) {
			var financials = response.financials[i];
			var revenue = d3.format("$,")(parseFloat(financials.Revenue));
			var year = financials["date"].slice(0, 4);
			var revenueGrowth = d3.format("~p")(
				parseFloat(financials["Revenue Growth"])
			);
			var costOfRevenue = d3.format("$,")(
				parseFloat(financials["Cost of Revenue"])
			);
			var grossProfit = d3.format("$,")(
				parseFloat(financials["Gross Profit"])
			);
			var operatingExpenses = d3.format("$,")(
				parseFloat(financials["Operating Expenses"])
			);
			var operatingIncome = d3.format("$,")(
				parseFloat(financials["Operating Income"])
			);
			var grossMargin = d3.format("~p")(
				parseFloat(financials["Gross Margin"])
			);
			var interestExpense = d3.format("$,")(
				parseFloat(financials["Interest Expense"])
			);
			var incomeTaxExpense = d3.format("$,")(
				parseFloat(financials["Income Tax Expense"])
			);
			var earningsBeforeTax = d3.format("$,")(
				parseFloat(financials["Earnings before Tax"])
			);
			var netIncome = d3.format("$,")(
				parseFloat(financials["Net Income"])
			);
			var profitMargin = d3.format("~p")(
				parseFloat(financials["Profit Margin"])
			);
			var EBITDA = d3.format("$,")(parseFloat(financials["EBITDA"]));
			var EBITDAMargin = d3.format("~p")(
				parseFloat(financials["EBITDA Margin"])
			);

			addTd(revenue, ".table_revenue");
			addTd(revenueGrowth, ".table_revenueGrowth");
			addTd(costOfRevenue, ".table_COGS");
			addTd(grossProfit, ".table_GP");
			addTd(operatingExpenses, ".table_opEx");
			addTd(operatingIncome, ".table_opInc");
			addTd(grossMargin, ".table_grossMargin");
			addTd(interestExpense, ".table_intEx");
			addTd(earningsBeforeTax, ".table_EBT");
			addTd(incomeTaxExpense, ".table_ITE");
			addTd(netIncome, ".table_NI");
			addTd(profitMargin, ".table_PM");
			addTd(EBITDA, ".table_EBITDA");
			addTd(EBITDAMargin, ".table_EBITDAM");
		}
	});

	$.ajax({
		url: baseURL + "/company-key-metrics/" + ticker,
		method: "GET"
	}).then(function(response) {
		for (var i = 4; i >= 0; i--) {
			var metrics = response.metrics[i];
			var workingCapital = d3.format("$,")(
				parseFloat(metrics["Working Capital"])
			);
			var daysSalesOutstanding = metrics["Days Sales Outstanding"];
			var daysPayablesOutstanding = metrics["Days Payables Outstanding"];
			var daysOfInventoryOnHand = metrics["Days of Inventory on Hand"];
			var receivablesTurnover = metrics["Receivables Turnover"];
			var payablesTurnover = metrics["Payables Turnover"];
			var inventoryTurnover = metrics["Inventory Turnover"];
			var netDebtToEBITDA = metrics["Net Debt to EBITDA"];
			var currentRatio = metrics["Current ratio"];
			var interestCoverage = metrics["Interest Coverage"];

			addTd(workingCapital, ".table_WC");
			addTd(daysSalesOutstanding, ".table_DSO");
			addTd(daysPayablesOutstanding, ".table_DPO");
			addTd(daysOfInventoryOnHand, ".table_DIH");
			addTd(receivablesTurnover, ".table_RT");
			addTd(payablesTurnover, ".table_PT");
			addTd(inventoryTurnover, ".table_IT");
			addTd(netDebtToEBITDA, ".table_NDEBITDA");
			addTd(currentRatio, ".table_CR");
			addTd(interestCoverage, ".table_IC");
		}
	});

	var apiKey = "f3a8b323323744b19301a95301e5ab60";
	var newsURL =
		"https://newsapi.org/v2/everything?q=" +
		name +
		"&from=2019-11-11&to=2019-11-11&sortBy=popularity&apiKey=";
	$.ajax({
		url: newsURL + apiKey,
		method: "GET"
	}).then(function(response) {
		console.log("title: " + response.articles[0].title);
		console.log("source: " + response.articles[0].source.name);
		console.log("summary: " + response.articles[0].description);
		console.log("Date: " + response.articles[0].publishedAt);
		$(".news_title").append(response.articles[0].title);
		$(".news_title").css("font-weight", "bold");
		$(".news_date").append(response.articles[0].publishedAt);
		$(".news_source").append(response.articles[0].source.name);
		$(".news_summary").append(response.articles[0].description);
	});
});
