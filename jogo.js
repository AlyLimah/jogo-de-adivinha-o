function gerarNumeroAleatorio() {
    return Math.floor(Math.random() * 100) + 1;
}

function chutar() {
    const chute = document.getElementById('chute').value;
    const resultado = document.getElementById('resultado');
    const numeroSecreto = gerarNumeroAleatorio();
    let tentativas = 5; 

    if (chute == numeroSecreto) {
        resultado.innerHTML = `Parabéns! Você acertou o número secreto: ${numeroSecreto}`;
    } else if (tentativas > 0) {
        tentativas--;
        if (chute > numeroSecreto) {
            resultado.innerHTML = `O número secreto é menor. Tentativas restantes: ${tentativas}`;
        } else {
            resultado.innerHTML = `O número secreto é maior. Tentativas restantes: ${tentativas}`;
        }
    } else {
        resultado.innerHTML = `Suas tentativas acabaram. O número secreto era: ${numeroSecreto}`;
    }
}