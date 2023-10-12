const Sequelize = require('sequelize');

const sequelize = new Sequelize('nodesql', 'root', 'Sagar!@#123', {
  dialect: 'mysql',
  host: 'localhost'
});

module.exports = sequelize;
