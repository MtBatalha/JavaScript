let num = document.getElementById('fnum'); // Input para inserir números
let lista = document.getElementById('flista'); // Lista de números inseridos
let res = document.getElementById('res'); // Resultados

// Array para armazenar os valores inseridos
let valores = [];

// Função para verificar se um valor é um número válido entre 1 e 100
function isNumero(n) {
    if (Number(n) >= 1 && Number(n) <= 100) {
        return true;
    } else {
        return false;
    }
}

// Função para verificar se um número já está na lista
function inLista(n, l) {
    if (l.indexOf(Number(n)) != -1) {
        return true;
    } else {
        return false;
    }
}

// Função para adicionar um número à lista
function adicionar() {
    if (isNumero(num.value) && !inLista(num.value, valores)) {
        valores.push(Number(num.value)); // Adiciona o número ao array
        let item = document.createElement('option');
        item.text = `Valor ${num.value} adicionado`;
        lista.appendChild(item); // Adiciona o número à lista HTML
        res.innerHTML = ''; // Limpa a área de resultados
    } else {
        alert('Valor inválido ou já está na lista');
    }
    num.value = ''; // Limpa o campo de entrada
    num.focus(); // Coloca o foco de volta no campo de entrada
}

// Função para finalizar e calcular estatísticas
function finalizar() {
    if (valores.length == 0) {
        alert('Adicione valores antes de finalizar!');
    } else {
        let tot = valores.length; // Número total de valores
        let maior = valores[0]; // Maior valor inicializado com o primeiro valor da lista
        let menor = valores[0]; // Menor valor inicializado com o primeiro valor da lista
        let media = 0; // Média dos valores
        let soma = 0; // Soma dos valores

        // Loop para calcular a soma, o maior e o menor valor
        for (let pos in valores) {
            soma += valores[pos]; // Adiciona o valor atual à soma
            if (valores[pos] > maior)
                maior = valores[pos]; // Atualiza o maior valor, se necessário
            if (valores[pos] < menor)
                menor = valores[pos]; // Atualiza o menor valor, se necessário
        }
        media = soma / tot; // Calcula a média

        // Exibe os resultados na área de resultados
        res.innerHTML = '';
        res.innerHTML += `<p>Ao todo temos ${tot} números cadastrados</p>`;
        res.innerHTML += `<p>O maior valor informado foi ${maior}</p>`;
        res.innerHTML += `<p>O menor valor informado foi ${menor}</p>`;
        res.innerHTML += `<p>A soma dos valores é: ${soma}</p>`;
        res.innerHTML += `<p>A média dos valores é: ${media}</p>`;
    }
}



