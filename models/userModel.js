const mysql = require("mysql2/promise");

const pool = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "Trovao1105@",
  database: "gestormanutencao",
});

// Aqui ele já retorna o campo "adm". Ex: 1 ou 0.
exports.findByEmailAndPassword = async (email, password) => {
  const [rows] = await pool.query(
    "SELECT * FROM usuarios WHERE email = ? AND senha = ?",
    [email, password]
  );
  return rows[0];
};
