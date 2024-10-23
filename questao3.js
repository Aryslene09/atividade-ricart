function celsiusParaFahrenheit(celsius) {
    
    return (celsius * 9/5) + 32;
}

function fahrenheitParaCelsius(fahrenheit) {
   
    return (fahrenheit - 32) * 5/9;
}

function realizarConversao() {
    const opcao = prompt("Escolha uma opção:\n1. Converter de Celsius para Fahrenheit\n2. Converter de Fahrenheit para Celsius");

    if (opcao === '1') {
        const celsius = parseFloat(prompt("Informe a temperatura em Celsius:"));
        const fahrenheit = celsiusParaFahrenheit(celsius);
        alert(`${celsius.toFixed(2)}°C é igual a ${fahrenheit.toFixed(2)}°F`);
    } else if (opcao === '2') {
        const fahrenheit = parseFloat(prompt("Informe a temperatura em Fahrenheit:"));
        const celsius = fahrenheitParaCelsius(fahrenheit);
        alert(`${fahrenheit.toFixed(2)}°F é igual a ${celsius.toFixed(2)}°C`);
    } else {
        alert("Opção inválida. Tente novamente.");
    }
}


realizarConversao();
