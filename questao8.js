function inverterFrase(frase) {
    return frase.split("").reverse().join("");
}

const frase = "Exemplo de frase ao inverso";
const fraseInvertida = inverterFrase(frase);

console.log(fraseInvertida);
