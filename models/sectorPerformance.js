module.exports = function(sequelize,DataTypes){
    var SectorPerformance = sequelize.define("sectorPerformance",{
        sector: DataTypes.STRING,
        changesPercentage: DataTypes.STRING
    });
    return SectorPerformance;
}