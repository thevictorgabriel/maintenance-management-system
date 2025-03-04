const connection = require('../db');

exports.criarSolicitacao = (req, res) => {
    const { bloco, sala, aparelho, problema, descricao, idUsuario } = req.body;

    const query = 'INSERT INTO solicitacoes (bloco, sala, aparelho, problema, descricao, status, id_usuario) VALUES (?, ?, ?, ?, ?, "Solicitado", ?)';

    connection.query(query, [bloco, sala, aparelho, problema, descricao, idUsuario], (err, result) => {
        if (err) {
            console.error('Erro ao criar solicitação:', err);
            return res.status(500).json({ message: "Erro ao criar solicitação." });
        }
        res.status(201).json({ message: "Solicitação criada com sucesso!" });
    });
};

exports.listarSolicitacoes = (req, res) => {
    const query = 'SELECT * FROM solicitacoes';

    connection.query(query, (err, results) => {
        if (err) {
            console.error('Erro ao buscar solicitações:', err);
            return res.status(500).json({ message: "Erro ao buscar solicitações." });
        }
        res.status(200).json(results);
    });
};
