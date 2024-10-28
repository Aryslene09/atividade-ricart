function compararNumeros(a, b) {
    if (a > b) {
        return `${a} é maior que ${b}`;
    } else if (b > a) {
        return `${b} é maior que ${a}`;
    } else {
        return "Os números são iguais";
    }
}


const numero1 = 10;
const numero2 = 20;
console.log(compararNumeros(numero1, numero2)); 
