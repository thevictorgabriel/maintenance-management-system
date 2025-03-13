document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector("form");
    const tabela = document.querySelector("table");

    form.addEventListener("submit", async (event) => {
        event.preventDefault();

        const usuario = JSON.parse(localStorage.getItem("usuario"));
        if (!usuario) {
            alert("Você precisa estar logado para enviar uma solicitação.");
            return;
        }

        const id_usuario = usuario.id;
        const bloco = document.getElementById("bloco").value;
        const sala = document.getElementById("sala").value;
        const aparelho = document.getElementById("aparelho").value;
        const problema = document.getElementById("problema").value;
        const descricao = document.getElementById("descricao").value

        if (!bloco || !sala || !aparelho || !problema || !descricao) {
            alert("Preencha todos os campos obrigatórios!");
            return;
        }

        try {
            const response = await fetch("http://localhost:3000/api/solicitacoes", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ id_usuario, bloco, sala, aparelho, problema, descricao }),
            });

            const data = await response.json();

            if (response.ok) {
                alert("Solicitação enviada com sucesso!");
                form.reset();
                carregarSolicitacoes();
            } else {
                alert(`Erro: ${data.message}`);
            }
        } catch (error) {
            console.error("Erro ao enviar solicitação:", error);
            alert("Erro ao enviar solicitação.");
        }
    });
    async function carregarSolicitacoes() {
        try {
            const response = await fetch("http://localhost:3000/api/solicitacoes");
            const solicitacoes = await response.json();

            const tabelaBody = tabela.querySelector("tbody") || document.createElement("tbody");
            tabelaBody.innerHTML = "";

            solicitacoes.forEach((sol) => {
                const row = document.createElement("tr");
                row.innerHTML = `
                    <td>${sol.bloco} - ${sol.sala}</td>
                    <td>${sol.aparelho}</td>
                    <td>${sol.data_solicitacao}</td>
                    <td>${sol.problema}</td>
                    <td>${sol.status}</td>
                `;

                tabelaBody.appendChild(row);
            });

            if (!tabela.querySelector("tbody")) {
                tabela.appendChild(tabelaBody);
            }
        } catch (error) {
            console.error("Erro ao carregar solicitações:", error);
        }
    }
    carregarSolicitacoes();

});