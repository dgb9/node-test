const mysql = require('mysql');
const config = require('./config');

const getConnection = () => {
    return mysql.createConnection({
        host: config.machine,
        user: config.dbUser,
        password: config.dbPassword,
        database: config.dbName,
        port: config.port
    });
}


// assuming data is ok we don't validate anything
const insertData = (data, callback) => {
    const first = data.first;
    const second = data.second;

    getConnection().query('insert into t (first , second) values (?, ?)', [first, second], (error) => {
        if (error) {
            callback(error);
        }
        else{
            callback(null, {success: true});
        }
    });
}

const selectData = (callback) => {
    getConnection().query('select first, second from t order by first', (error, results) => {
        if(error){
            callback(error);
        }
        else {
            callback(null, results);
        }
    })
}

module.exports = {insertData, selectData}
