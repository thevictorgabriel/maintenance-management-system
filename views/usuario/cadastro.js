document.querySelector('form').addEventListener('submit', async (e) => {
    e.preventDefault();

    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const senha = document.getElementById('senha').value;
    const confirmeSenha = document.getElementById('confirme-senha').value;

    if (senha !== confirmeSenha) {
        alert('Senhas não conferem!');
        return;
    }

    const response = await fetch('http://localhost:3000/usuarios/cadastrar', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ nome, email, senha }),
    });

    const result = await response.json();
    alert(result.message);
});