document.addEventListener('DOMContentLoaded', () => {
    const usuario = JSON.parse(localStorage.getItem('id_usuario'));

    if (usuario) {
        document.getElementById('nome').value = usuario.nome;
        document.getElementById('email').value = usuario.email;
    }

    document.getElementById('salvar').addEventListener('click', async () => {
        const nome = document.getElementById('nome').value;
        const email = document.getElementById('email').value;

        const response = await fetch('http://localhost:3000/usuarios/editar', {
            method: 'PUT',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({id: usuario.id, nome, email})
        });

        const data = await response.json();
        alert(data.message || data.error);
    });
});