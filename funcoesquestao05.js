function maiorPalavra(frase) {
    const palavras = frase.split(" ");
    
    let maior = "";

    for (const palavra of palavras) {
        if (palavra.length > maior.length) {
            maior = palavra;
        }
    }

    return maior;
}

const frase = "A programação em JavaScript é muito interessante e desafiadora.";
const resultado = maiorPalavra(frase);
console.log(`A maior palavra é: "${resultado}"`); 
