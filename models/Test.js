//**** */ Common for all models
const Sequelize = require('sequelize');
const db = require('../config/db.config.js');
//********************************* */



const Test = db.define('asd', {

    name: {
        type: Sequelize.STRING
    },
    counter: {
        type: Sequelize.INTEGER
    },
    status: {
        type: Sequelize.SMALLINT

    },
    status_alt: {
        type: Sequelize.SMALLINT
    },

    createdAt: {
        field: 'created',
        type: Sequelize.DATE,
    },
    updatedAt: {
        field: 'updated',
        type: Sequelize.DATE,
    }

});
module.exports = Test; 