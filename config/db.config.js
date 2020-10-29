const Sequelize = require('sequelize');

module.exports = new Sequelize('testdb', 'root', '', {
    host: '127.0.0.1',
    dialect: "mysql",
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    },
    logging: false ,
    define: {
        //prevent sequelize from pluralizing table names
        freezeTableName: true
    }



});