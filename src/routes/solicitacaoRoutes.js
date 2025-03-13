const express = require('express');
const router = express.Router();
const { criarSolicitacao, listarSolicitacoes } = require('../controllers/solicitacaoController');

router.post('/solicitacoes', criarSolicitacao);
router.get('/solicitacoes', listarSolicitacoes);

module.exports = router;