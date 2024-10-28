function somaCubos(lista) {
    return lista.reduce((soma, numero) => soma + Math.pow(numero, 3), 0);
}

const numeros = [2, 3, 4];
console.log(somaCubos(numeros));
