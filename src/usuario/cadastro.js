/*document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector("form");

    form.addEventListener("submit", async (e) => {
        e.preventDefault();

        const nome = document.getElementById("nome").value;
        const email = document.getElementById("email").value;
        const senha = document.getElementById("senha").value;
        const confirmeSenha = document.getElementById("confirme-senha").value;

        if (senha !== confirmeSenha) {
            alert("As senhas não conferem!");
            return;
        }

        const dados = { nome, email, senha };

        try {
            const response = await fetch("http://localhost:3000/usuarios/cadastrar", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(dados),
            });

            const result = await response.json();
            if (response.ok) {
                alert("Cadastro realizado com sucesso!");
                window.location.href = "./login.html";
            } else {
                alert(result.message || "Erro ao cadastrar.");
            }
        } catch (error) {
            console.error("Erro:", error);
            alert("Erro ao conectar com o servidor.");
        }
    });
});*/