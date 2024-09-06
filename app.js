document.addEventListener('DOMContentLoaded', function() {
    // Adiciona um ouvinte de eventos para detectar a tecla Enter
    document.getElementById('campo-pesquisa').addEventListener('keydown', function(event) {
        if (event.key === 'Enter') {
            event.preventDefault(); // Previne o comportamento padrão do Enter
            pesquisar(); // Chama a função de pesquisa
        }
    });
});

function pesquisar() {
    let section = document.getElementById("resultado-pesquisa");
    let campoPesquisa = document.getElementById("campo-pesquisa").value.trim().toLowerCase();
    let resultados = "";

    let encontrouReceita = false;

    for (let receita of receitas) {
        if (receita.nome.toLowerCase().includes(campoPesquisa)) {
            resultados += `
                <div class="item-card">
                    <h2>${receita.nome}</h2>
                    <p>${receita.descricao}</p>
                    <a href="${receita.link}" target="_blank">Ver Receita</a>
                </div>
            `;
            encontrouReceita = true;
        }
    }

    if (!encontrouReceita) {
        resultados = `
            <div class="item-card">
                <p>Receita não encontrada no momento, volte mais tarde!</p>
            </div>
        `;
    }

    section.innerHTML = resultados;
}
