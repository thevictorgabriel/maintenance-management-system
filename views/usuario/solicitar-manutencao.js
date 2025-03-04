document.querySelector('form').addEventListener('submit', async (e) => {
    e.preventDefault();

    const bloco = document.getElementById('bloco').value;
    const sala = document.getElementById('sala').value;
    const aparelho = document.getElementById('aparelho').value;
    const problema = document.getElementById('problema').value;
    const descricao = document.getElementById('descrica0').value;

    const response = await fetch('http://localhost:3000/solicitacoes/criar', {
        method: 'POST', 
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ bloco, sala, aparelho, problema, descricao }),
    });

    const result = await response.json();
    alert(result.message);
});