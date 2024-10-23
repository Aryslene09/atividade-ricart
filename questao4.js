function verificaNumeros(num1, num2) {
    // Retorna true se um dos números for 30 ou se a soma dos dois for 30
    return num1 === 30 || num2 === 30 || (num1 + num2) === 30;
}

// Testando a função
const numero1 = parseFloat(prompt("Digite o primeiro número:"));
const numero2 = parseFloat(prompt("Digite o segundo número:"));

const resultado = verificaNumeros(numero1, numero2);

alert(`O resultado é: ${resultado}`);
