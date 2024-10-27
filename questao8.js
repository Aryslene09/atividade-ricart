// Função para inverter a frase
function inverterFrase(frase) {
    return frase.split("").reverse().join("");
}

// Exemplo de uso
const frase = "Exemplo de frase ao inverso";
const fraseInvertida = inverterFrase(frase);

console.log(fraseInvertida);
