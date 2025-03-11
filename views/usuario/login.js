document.querySelector('form').addEventListener('submit', async (event) => {
    event.preventDefault();

    const email = document.getElementById('email').value;
    const senha = document.getElementById('senha').value;

    const response = await fetch('http://localhost:3000/usuarios/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, senha })
    });

    const result = await response.json();
    if (response.ok) {
        alert('Login bem-sucedido!');
        localStorage.setItem('usuario', JSON.stringify(result.usuario));
        window.location.href = './perfil.html';
    } else {
        alert(result.message);
    }
});