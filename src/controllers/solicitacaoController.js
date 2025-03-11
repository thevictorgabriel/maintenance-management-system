const db = require('../bd');

// Criar nova solicitação
exports.criarSolicitacao = (req, res) => {
    const { bloco, sala, aparelho, problema, descricao, idUsuario } = req.body;

    const query = 'INSERT INTO solicitacoes (bloco, sala, aparelho, problema, descricao, status, id_usuario) VALUES (?, ?, ?, ?, ?, "solicitado", ?)';
    db.query(query, [bloco, sala, aparelho, problema, descricao, idUsuario], (err, result) => {
        if (err) {
            return res.status(500).json({ error: 'Erro ao criar solicitação' });
        }
        res.json({ message: 'Solicitação criada com sucesso!' });
    });
};

// Listar solicitações
exports.listarSolicitacoes = (req, res) => {
    const query = 'SELECT bloco, sala, aparelho, problema, DATE_FORMAT(data_solicitacao, "%d/%m/%Y") AS data, status FROM solicitacoes';
    db.query(query, (err, results) => {
        if (err) {
            return res.status(500).json({ error: 'Erro ao buscar solicitações' });
        }
        res.json(results);
    });
};