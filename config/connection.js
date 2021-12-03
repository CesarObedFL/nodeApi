const mysql = require('mysql');
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  port: 3306, 
  database: 'test'
});

connection.connect((error) => {
    if(error) { console.log(error); }
    else { console.log('success db connection...'); }
});

module.exports = connection;