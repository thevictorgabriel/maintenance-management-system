const connection = require('../bd');

// Cadastro de usuário
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

// Login de usuário
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


exports.editarPerfil = (req, res) => {
    const { id, nome, email, senha } = req.body;

    const query = 'UPDATE usuarios SET nome = ?, email = ?, senha = ? WHERE id = ?';
    connection.query(query, [nome, email, senha, id], (err, results) => {
        if (err) return res.status(500).json({ error: err.message });

        res.status(200).json({ message: 'Perfil atualizado com sucesso' });
    });
};

exports.excluirPerfil = (req, res) => {
    const { id } = req.params;

    const query = 'DELETE FROM usuarios WHERE id = ?';
    connection.query(query, [id], (err, results) => {
        if (err) return res.status(500).json({ error: err.message });

        res.status(200).json({ message: 'Conta excluída com sucesso' });
    });
};