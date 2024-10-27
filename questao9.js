function somaTamanhosPalavras(frase) {
    const palavras = frase.split(" ");

    const somaTamanhos = palavras.reduce((soma, palavra) => soma + palavra.length, 0);

    return somaTamanhos;
}

const frase = "Este é um exemplo de frase";
console.log(`A soma dos tamanhos das palavras é: ${somaTamanhosPalavras(frase)}`);
