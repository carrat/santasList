'use strict';
module.exports = function(sequelize, DataTypes) {
  var Child = sequelize.define('Child', {
    child_name: DataTypes.STRING,
    list_id: DataTypes.INTEGER,
    gift_id: DataTypes.INTEGER
  }, {
    underscored: true,
    freezeTableName: true,
    tableName: 'children'
  });
  return Child;
};