// Pega botão sortear e adiciona evento de click
const botaoSortear = document.getElementById('btn-sortear');
botaoSortear.addEventListener('click', () => { sortearNumeros(); });

function sortearNumeros () {

    let quantidadeNumero = parseInt(document.getElementById('quantidade').value);
    let deNumero = parseInt(document.getElementById('de').value);
    let ateNumero = parseInt(document.getElementById('ate').value);

    let numerosSorteados = [];
    let numeros;

    for (let i = 0; i < quantidadeNumero; i++) {
        numeros = Math.floor(Math.random() * (ateNumero - deNumero + 1)) + deNumero;

        while (numerosSorteados.includes(numeros)) {
            numeros = Math.floor(Math.random() * (ateNumero - deNumero + 1)) + deNumero;
        }

        numerosSorteados.push(numeros);
    }

    let textoResultado = document.getElementById('resultado');
    textoResultado.innerHTML = `<label class="texto__paragrafo">Números sorteados: ${numerosSorteados}</label>`;
}
