document.getElementById('salvar').addEventListener('click', async (e) => {
    e.preventDefault();

    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const senha = document.getElementById('senha').value;

    const idUsuario = localStorage.getItem('idUsuario');

    const response = await fetch('http://localhost:3000/api/usuario/perfil', {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ id: idUsuario, nome, email, senha })
    });

    const result = await response.json();
    alert(result.message || result.error);
});

document.getElementById('deletar-perfil').addEventListener('click', async (e) => {
    e.preventDefault();

    const idUsuario = localStorage.getItem('idUsuario');

    const response = await fetch('http://localhost:3000/api/usuario/perfil', {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ id: idUsuario })
    });

    const result = await response.json();
    alert(result.message || result.error);

    if (response.ok) {
        localStorage.removeItem('idUsuario');
        window.location.href = 'login.html';
    }
});
