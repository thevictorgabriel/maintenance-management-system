const express = require('express');
const router = express.Router();
const solicitacaoController = require('../controllers/solicitacaoController');

router.post('/solicitacoes', solicitacaoController.criarSolicitacao);
router.get('/solicitacoes', solicitacaoController.listarSolicitacoes);

module.exports = router;