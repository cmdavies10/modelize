module.exports = function(sequelize, DataTypes) {
    var User = sequelize.define("User", {
      price: DataTypes.DECIMAL,
      name: DataTypes.STRING,
      password: DataTypes.STRING,
      email: DataTypes.STRING
    });

    return User;
  };
  