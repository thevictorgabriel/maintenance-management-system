document.querySelector('form').addEventListener('submit', async (e) => {
    e.preventDefault();

    const usuario = JSON.parse(localStorage.getItem('idusuario'));
    const bloco = document.getElementById('bloco').value;
    const sala = document.getElementById('sala').value;
    const aparelho = document.getElementById('aparelho').value;
    const problema = document.getElementById('problema').value;
    const descricao = document.getElementById('descrica0').value;

    const response = await fetch('http://localhost:3000/manutencao/solicitar', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({usuario_id: usuario.id, bloco, sala, aparelho, problema, descricao})
    });

    const data = await response.json();
    alert(data.message || data.error);
});