function verificarNumeros(num1, num2, num3) {
    
    if ((num1 >= 50 && num1 <= 99) && (num2 >= 50 && num2 <= 99) && (num3 >= 50 && num3 <= 99)) {
        console.log("Sucesso! Todos os números estão entre 50 e 99.");
    } else {
        console.log("Erro! Um ou mais números não estão dentro do intervalo de 50 a 99.");
    }
}


const numero1 = parseInt(prompt("Digite o primeiro número inteiro:"));
const numero2 = parseInt(prompt("Digite o segundo número inteiro:"));
const numero3 = parseInt(prompt("Digite o terceiro número inteiro:"));

verificarNumeros(numero1, numero2, numero3);
