const db = require('../config/db');

const User = {
    findByEmail: (email) => {
        return new Promise((resolve, reject) => {
            db.query('SELECT * FROM usuarios WHERE email = ?', [email], (err, results) => {
                if (err) return reject(err);
                resolve(results[0]); // Retorna o usuário ou undefined
            });
        });
    }
};

module.exports = User;