var mysql = require('mysql');
var connection;

if (process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL);
}
else {
    connection = mysql.createConnection({
        host: 'l0ebsc9jituxzmts.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
        user: 'q87i9jjau1oqj4yg',
        password: 'bae92xfp3x4ez3ej',
        database: 'k5l1k64fo7t0hugb'
    });
};

connection.connect();
module.exports = connection;