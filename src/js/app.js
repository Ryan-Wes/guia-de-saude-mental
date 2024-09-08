// Certifique-se de que os dados não estão redefinidos aqui.
// Use a variável `dados` definida no arquivo dados.js

// Função para pesquisar e mostrar resultados
function pesquisar() {
    let section = document.getElementById("resultados-pesquisa");
    let campoPesquisa = document.getElementById("campo-pesquisa").value.toLowerCase();

    if (!campoPesquisa) {
        section.innerHTML = "<p>Digite um sentimento para pesquisar.</p>";
        return;
    }

    let resultados = "";

    for (let dado of dados) {
        if (dado.sentimento.toLowerCase().includes(campoPesquisa)) {
            for (let solucao of dado.solucoes) {
                resultados += `
                <div class="item-resultado">
                    <h2><a href="${solucao.link}" target="_blank">${solucao.titulo}</a></h2>
                    <p class="descricao-meta">${solucao.descricao}</p>
                </div>
                `;
            }
            break;
        }
    }

    if (!resultados) {
        resultados = "<p>Nada foi encontrado</p>";
    }

    section.innerHTML = resultados;
}

document.getElementById("campo-pesquisa").addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        event.preventDefault(); // Impede o comportamento padrão (envio de formulário, por exemplo)
        pesquisar(); // Chama a função de pesquisa
    }
});