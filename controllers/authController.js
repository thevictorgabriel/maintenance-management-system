const bcrypt = require('bcrypt');
const User = require('../models/User');

exports.login = async (req, res) => {
    const { email, senha } = req.body;

    try {
        const user = await User.findByEmail(email);
        console.log('Usuário encontrado:', user);

        if (!user) {
            return res.status(401).send('Usuário não encontrado');
        }

        const senhaCorreta = (senha == user.senha);
        if (!senhaCorreta) {
            return res.status(401).send('Senha incorreta');
        }

        if (user.adm) {
            res.redirect('/adm');
        } else {
            res.redirect('/home'); // Página para usuários comuns
        }
    } catch (err) {
        console.error('Erro no login:', err);
        res.status(500).send('Erro no servidor');
    }
};