const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '123456',
    database: 'projetosuper'
});

connection.connect((err) => {
    if (err) {
        console.error('Erro ao conectar no banco:', err);
        return;
    }
    console.log('Conectado ao banco projetosuper');
});

module.exports = connection;