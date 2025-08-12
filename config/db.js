const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Trovao1105@',
    database: 'gestormanutencao'
});

connection.connect(err => {
    if (err) throw err;
    console.log('MySQL conectado...');
});

module.exports = connection;
