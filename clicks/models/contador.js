module.exports = function(sequelize, DataTypes) {
  var Contador = sequelize.define('contadores', {
    valor: DataTypes.INTEGER
  });
  return Contador;
}
