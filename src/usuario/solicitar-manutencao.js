document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector("form");
    form.addEventListener("submit", async (event) => {
        event.preventDefault();
        
        const bloco = document.getElementById("bloco").value;
        const sala = document.getElementById("sala").value;
        const aparelho = document.getElementById("aparelho").value;
        const problema = document.getElementById("problema").value;
        const descricao = document.getElementById("descrica0").value;
        
        const solicitacao = {
            bloco,
            sala,
            aparelho,
            problema,
            descricao,
            data: new Date().toISOString()
        };

        try {
            const response = await fetch("htt://localhost:3000/solicitacoes", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(solicitacao)
            });
            
            if (response.ok) {
                alert("Solicitação enviada com sucesso!");
                form.reset();
            } else {
                alert("Erro ao enviar a solicitação.");
            }
        } catch (error) {
            console.error("Erro ao enviar solicitação:", error);
        }
    });
});