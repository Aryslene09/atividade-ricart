function contarVogaisConsoantes(frase) {
    const vogais = "aeiouAEIOU";
    let contadorVogais = 0;
    let contadorConsoantes = 0;

    for (const char of frase) {
        if (char.match(/[a-zA-Z]/)) { 
            if (vogais.includes(char)) {
                contadorVogais++;
            } else {
                contadorConsoantes++;
            }
        }
    }

    return {
        vogais: contadorVogais,
        consoantes: contadorConsoantes
    };
}

const frase = "O rato roeu a roupa do rei de Roma.";
const resultado = contarVogaisConsoantes(frase);
console.log(`Vogais: ${resultado.vogais}, Consoantes: ${resultado.consoantes}`); 
