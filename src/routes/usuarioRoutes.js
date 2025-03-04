const express = require('express');
const router = express.Router();
const usuarioController = require('../controllers/usuarioController');

router.post('/cadastrar', usuarioController.cadastrarUsuario);
router.post('/login', usuarioController.loginUsuario);
router.put('/perfil', usuarioController.editarPerfil);   // Atualiza dados do perfil
router.delete('/perfil', usuarioController.deletarPerfil);

module.exports = router;