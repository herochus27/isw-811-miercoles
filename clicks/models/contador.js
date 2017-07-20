module.exports = function(sequelize, DataTypes) {
  var Contador = sequelize.define('contadores', {
    valor: DataTypes.INTEGER
  });


Contador.incrementar = function() {
    return sequelize.query(
      'UPDATE contadores ' +
      'SET valor = (valor + 1) ' + 
      'WHERE id=1',
      { type: sequelize.QueryTypes.SELECT}
    );
  };

  return Contador;
}
