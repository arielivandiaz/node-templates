var mysql = require('mysql');
var dbconfig = require('../config/db.config');


var connection = {};

let handleDisconnect = () => {
    connection = mysql.createConnection(dbconfig.connection);
    connection.connect(onConnect = (err) => {
        if (err) {
            console.log('error when connecting to db:', err);
            setTimeout(handleDisconnect, 1000);
        }
    });
    connection.on('error', onError = (err) => {
        console.log('db error', err);
        if (err.code == 'PROTOCOL_CONNECTION_LOST') {
            handleDisconnect();
        } else {
            throw err;
        }
    });
};




let query = (str_query) => {
    return new Promise((resolve, reject) => {
        connection.query(str_query, function (err, rows, fields) {
            if (err) {
                reject(err);
            }
            resolve(rows);
        });
    });
};

let queries = (str_queries) => {
    return new Promise((resolve, reject) => {
        let promises = [];
        for (var j = 0; j < str_queries.length; j++) {
            promises.push(query(str_queries[j]));
        }
        Promise.all(promises)
            .then((rows) => {
                resolve(rows);
            })
            .catch((err) => {
                reject(err);
            });
    });
}



/********************** Consts  *************************/
const currentTimestamp = "CURRENT_TIMESTAMP()";

const interval = {
    minute: "MINUTE",
    hour: "HOUR",
    day: "DAY",
    week: "WEEK",
    month: "MONTH",
    year: "YEAR"
};


/********************** Functions  *************************/
let date_add_to_current = (value, interval) => {
    return "DATE_ADD( CURRENT_TIMESTAMP() , INTERVAL " + value + " " + interval + ")";
}




handleDisconnect();

module.exports = {
    // Consts
    currentTimestamp,
    interval,
    //Functions
    query,
    queries,
    date_add_to_current

}