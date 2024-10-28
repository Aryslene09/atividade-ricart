function inverterNumero(numero) {
    const numeroInvertido = numero.toString().split("").reverse().join("");
    return parseInt(numeroInvertido);
}

const numero = 12356;
console.log(inverterNumero(numero)); 
