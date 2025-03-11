const express = require('express');
const router = express.Router();
const usuarioController = require('../controllers/usuarioController');

router.post('/cadastrar', usuarioController.cadastrarUsuario);
router.post('/login', usuarioController.loginUsuario);
router.put('/editar', usuarioController.editarPerfil);
router.delete('/deletar', usuarioController.excluirPerfil)

module.exports = router;