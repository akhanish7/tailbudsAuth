const Sequelize = require('sequelize');

const sequelize = new Sequelize('auth', 'root', 'hanish123', {
  host: 'localhost',
  //port: dbConfig.port,
  dialect: 'mysql',
  //logging: false,
});

module.exports = sequelize;
