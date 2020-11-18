var mysql = require('mysql');
var connection;

if (process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL);
}
else {
    connection = mysql.createConnection({
        host: 'tj5iv8piornf713y.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
        user: 'gouop1zdlvursczi',
        password: 'xi21ttn0i2r1cmkt',
        database: 'aui9225aqzxoth3f'
    });
};

connection.connect();
module.exports = connection;