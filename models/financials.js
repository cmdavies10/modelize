module.exports = function(sequelize, DataTypes){
    var Financials = sequelize.define("Financials", {
        symbol: DataTypes.STRING,
        date: DataTypes.STRING,
        revenue: DataTypes.STRING,
        revenueGrowth: DataTypes.STRING,
        costOfRevenue: DataTypes.STRING,
        grossProfit: DataTypes.STRING,
        rndExpenses: DataTypes.STRING,
        sgaExpense: DataTypes.STRING
        // operatingExpense: DataTypes.STRING,
        // operatingIncome: DataTypes.STRING,
        // interestExpense: DataTypes.STRING,
        // earningsBeforeTax: DataTypes.STRING,
        // incomeTaxExpense: DataTypes.STRING,
        // netIncomeNonControllingInt: DataTypes.STRING,
        // netIncomeDiscontinuedOps: DataTypes.STRING,
        // netIncome: DataTypes.STRING,
        // preferredDividends: DataTypes.STRING,
        // netIncomeCom: DataTypes.STRING,
        // EPS: DataTypes.STRING,
        // EPSDiluted: DataTypes.STRING,
        // weightedAverageShsOut: DataTypes.STRING,
        // weightedAverageShsOutDil: DataTypes.STRING,
        // dividendPerShare: DataTypes.STRING,
        // grossMargin: DataTypes.STRING,
        // EBITDAMargin: DataTypes.STRING,
        // EBITMargin: DataTypes.STRING,
        // profitMargin: DataTypes.STRING,
        // freeCashFlowMargin: DataTypes.STRING,
        // EBITDA: DataTypes.STRING,
        // EBIT: DataTypes.STRING,
        // consolidatedIncome: DataTypes.STRING,
        // earningsBeforeTaxMargin: DataTypes.STRING,
        // netProfitMargin: DataTypes.STRING,
        // cashAndCashEquivalents: DataTypes.STRING,
        // shortTermInvestments: DataTypes.STRING,
        // cashAndShortTermInvestments: DataTypes.STRING,
        // receivables: DataTypes.STRING,
        // inventories: DataTypes.STRING,
        // totalCurrentAssets: DataTypes.STRING,
        // propertyPlantEquipmentNet: DataTypes.STRING,
        // goodwillAndIntangibleAssets: DataTypes.STRING,
        // longTermInvestments: DataTypes.STRING,
        // taxAssets: DataTypes.STRING,
        // totalNonCurrentAssets: DataTypes.STRING,
        // totalAssets: DataTypes.STRING,
        // payables: DataTypes.STRING,
        // shortTermDebts: DataTypes.STRING,
        // totalDebt: DataTypes.STRING,
        // deferredRevenue: DataTypes.STRING,
        // taxLiabilities: DataTypes.STRING,
        // totalNonCurrentLiabilities: DataTypes.STRING,
        // totalLiabilities: DataTypes.STRING,
        // otherComprehensiveIncome: DataTypes.STRING,
        // retainedEarnings: DataTypes.STRING,
        // totalShareholdersEquity: DataTypes.STRING,
        // investments: DataTypes.STRING,
        // netDebt: DataTypes.STRING,
        // otherAssets: DataTypes.STRING,
        // otherLiabilities: DataTypes.STRING
    });

    Financials.associate = function(models){
        Financials.belongsTo(models.Company,{
            foreignKey: {
                allowNull: false
            }
        })
    }

    return Financials;
};