const connection = require('../bd');

exports.criarSolicitacao = (req, res) => {
    const { id_usuario, bloco, sala, aparelho, problema, descricao } = req.body;

    if (!id_usuario || !bloco || !sala || !aparelho || !problema || !descricao) {
        return res.status(400).json({ message: "Todos os campos são obrigatórios." });
    }

    const query = `INSERT INTO solicitacoes (id_usuario, bloco, sala, aparelho, problema, descricao) VALUES (?, ?, ?, ?, ?, ?)`;
    
    connection.query(query, [id_usuario, bloco, sala, aparelho, problema, descricao], (err, results) => {
        if (err) {
            console.error("Erro ao criar solicitação:", err);
            return res.status(500).json({ message: "Erro ao criar solicitação." });
        }
        res.status(201).json({ message: "Solicitação criada com sucesso!", id: results.insertId });
    });
};

exports.listarSolicitacoes = (req, res) => {
    const query = `
        SELECT id, bloco, sala, aparelho, problema, status, 
        DATE_FORMAT(data_solicitacao, '%d/%m/%Y') AS data_solicitacao 
        FROM solicitacoes 
        ORDER BY data_solicitacao DESC`;

    connection.query(query, (err, results) => {
        if (err) {
            console.error("Erro ao buscar solicitações:", err);
            return res.status(500).json({ message: "Erro ao buscar solicitações." });
        }
        res.status(200).json(results);
    });
};