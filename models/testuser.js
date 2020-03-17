module.exports = function(sequelize,DataTypes){
    var Testuser = sequelize.define("Testuser", {
        symbol: DataTypes.STRING
    });

    return Testuser;
}