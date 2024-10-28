function contemPalavra(frase, palavra) {
    const fraseLower = frase.toLowerCase();
    const palavraLower = palavra.toLowerCase();

    return fraseLower.includes(palavraLower);
}

const frase = "A programação em JavaScript é muito interessante.";
const palavra = "javascript";
const resultado = contemPalavra(frase, palavra);
console.log(`A palavra "${palavra}" está presente na frase? ${resultado}`);  
