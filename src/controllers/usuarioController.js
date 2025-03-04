const connection = require('../db');

exports.cadastrarUsuario = (req, res) => {
    const { nome, email, senha } = req.body;

    if (!nome || !email || !senha) {
        return res.status(400).json({ message: "Todos os campos são obrigatórios." });
    }

    const query = 'INSERT INTO usuarios (nome, email, senha) VALUES (?, ?, ?)';
    connection.query(query, [nome, email, senha], (err) => {
        if (err) {
            console.error('Erro ao cadastrar:', err);
            return res.status(500).json({ message: "Erro ao cadastrar." });
        }
        res.status(201).json({ message: "Cadastro realizado com sucesso!" });
    });
};

exports.loginUsuario = (req, res) => {
    const { email, senha } = req.body;

    const query = 'SELECT * FROM usuarios WHERE email = ? AND senha = ?';
    connection.query(query, [email, senha], (err, results) => {
        if (err) {
            console.error('Erro no login:', err);
            return res.status(500).json({ message: "Erro ao tentar logar." });
        }
        if (results.length === 0) {
            return res.status(401).json({ message: "Credenciais inválidas." });
        }
        res.status(200).json({ message: "Login realizado com sucesso!" });
    });
};

const db = require('../db');

exports.editarPerfil = (req, res) => {
    const { id, nome, email, senha } = req.body;

    const query = 'UPDATE usuarios SET nome = ?, email = ?, senha = ? WHERE id = ?';
    db.query(query, [nome, email, senha, id], (err, result) => {
        if (err) {
            return res.status(500).json({ error: 'Erro ao atualizar perfil' });
        }
        res.json({ message: 'Perfil atualizado com sucesso!' });
    });
};

exports.deletarPerfil = (req, res) => {
    const { id } = req.body;

    const query = 'DELETE FROM usuarios WHERE id = ?';
    db.query(query, [id], (err, result) => {
        if (err) {
            return res.status(500).json({ error: 'Erro ao excluir perfil' });
        }
        res.json({ message: 'Perfil excluído com sucesso!' });
    });
};
