const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const authRoutes = require('./routes/authRoutes');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

// Rota de login
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'home.html'));
});

// Página home
app.get('/home', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'home.html'));
});

// Rota para administradores
app.get('/adm', (req, res) => {
    res.sendFile(path.join(__dirname, 'views/administrador', 'adm.html'));
});

app.use('/', authRoutes);

app.listen(3000, () => console.log('Servidor rodando em http://localhost:3000'));
