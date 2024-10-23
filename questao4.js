function verificaNumeros(num1, num2) {
    
    return num1 === 30 || num2 === 30 || (num1 + num2) === 30;
}


const numero1 = parseFloat(prompt("Digite o primeiro número:"));
const numero2 = parseFloat(prompt("Digite o segundo número:"));

const resultado = verificaNumeros(numero1, numero2);

alert(`O resultado é: ${resultado}`);
