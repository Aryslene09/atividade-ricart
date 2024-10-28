function encontrarMaiorEMenor(lista) {
    if (lista.length !== 10) {
        throw new Error("A lista deve conter exatamente 10 números.");
    }

    const maior = Math.max(...lista);
    const menor = Math.min(...lista);

    return {
        maior: maior,
        menor: menor
    };
}

const numeros = [34, 78, 12, 56, 90, 24, 15, 67, 89, 5];
const resultado = encontrarMaiorEMenor(numeros);
console.log(`Maior: ${resultado.maior}, Menor: ${resultado.menor}`); 
