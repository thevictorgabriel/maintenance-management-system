const express = require('express');
const router = express.Router();
const solicitacaoController = require('../controllers/solicitacaoController');

router.post('/criar', solicitacaoController.criarSolicitacao);
router.get('/listar', solicitacaoController.listarSolicitacoes);

module.exports = router;