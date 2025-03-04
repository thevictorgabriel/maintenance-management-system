const express = require('express');
const cors = require('cors');

const usuarioRoutes = require('./routes/usuarioRoutes');
const solicitacaoRoutes = require('./routes/solicitacaoRoutes');

const app = express();
app.use(cors());
app.use(express.json());

app.use('/usuarios', usuarioRoutes);
app.use('/solicitacoes', solicitacaoRoutes);

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});