module.exports = function(sequelize,DataTypes){
    var Keymetrics = sequelize.define("keymetrics",{
        symbol: DataTypes.STRING,
        revenuePerShare: DataTypes.STRING,
        netIncomePerShare: DataTypes.STRING,
        operatingCashFlowPerShare: DataTypes.STRING,
        freeCashFlowPerShare: DataTypes.STRING,
        cashPerShare: DataTypes.STRING,
        bookValuePerShare: DataTypes.STRING,
        tangibleBookValuePerShare: DataTypes.STRING,
        shareholdersEquityPerShare: DataTypes.STRING,
        interestDebtPerShare: DataTypes.STRING,
        marketCap: DataTypes.STRING,
        enterpriseValue: DataTypes.STRING,
        PERatio: DataTypes.STRING,
        priceToSalesRatio: DataTypes.STRING,
        POCFRatio: DataTypes.STRING,
        PFCFRatio: DataTypes.STRING,
        PBRatio: DataTypes.STRING,
        PTBRatio: DataTypes.STRING,
        EVToSales: DataTypes.STRING,
        enterpriseValueOverEBITDA: DataTypes.STRING,
        EVToOperatingCashFlow: DataTypes.STRING,
        EVToFreeCashFlow: DataTypes.STRING,
        earningsYield: DataTypes.STRING,
        freeCashFlowYield: DataTypes.STRING,
        debtToEquity: DataTypes.STRING,
        debtToAssets: DataTypes.STRING,
        netDebtToEBITDA: DataTypes.STRING,
        currentRatio: DataTypes.STRING,
        interestCoverage: DataTypes.STRING,
        incomeQuality: DataTypes.STRING,
        dividendYield: DataTypes.STRING,
        payoutRatio: DataTypes.STRING,
        SGAToRevenue: DataTypes.STRING,
        RNDToRevenue: DataTypes.STRING,
        intangiblesToTotalAssets: DataTypes.STRING,
        capexToOperatingCashFlow: DataTypes.STRING,
        capexToRevenue: DataTypes.STRING,
        capexToDepreciation: DataTypes.STRING,
        stockBasedCompensationToRevenue: DataTypes.STRING,
        grahamNumber: DataTypes.STRING,
        ROIC: DataTypes.STRING,
        returnOnTangibleAssets: DataTypes.STRING,
        grahamNetNet: DataTypes.STRING,
        workingCapital: DataTypes.STRING,
        tangibleAssetValue: DataTypes.STRING,
        netCurrentAssetValue: DataTypes.STRING,
        investedCapital: DataTypes.STRING,
        averageReceivables: DataTypes.STRING,
        averagePayables: DataTypes.STRING,
        averageInventory: DataTypes.STRING,
        daysSalesOutstanding: DataTypes.STRING,
        daysPayablesOutstanding: DataTypes.STRING,
        daysOfInventoryOnHand: DataTypes.STRING,
        receivablesTurnover: DataTypes.STRING,
        payablesTurnover: DataTypes.STRING,
        inventoryTurnover: DataTypes.STRING,
        ROE: DataTypes.STRING,
        capexPerShare: DataTypes.STRING
    });

    Keymetrics.associate = function(models){
        Keymetrics.belongsTo(models.Company,{
            foreignKey: {
                allowNull: false
            }
        })
    }

    return Keymetrics;
};