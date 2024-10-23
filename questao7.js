function modificarFrase(frase) {
    
    let palavras = frase.split(" ");
    let novaFrase = palavras.map(palavra => {
       
        if (palavra.length < 5) {
            return palavra.toUpperCase();
        } 
        
        else {
            return palavra.toLowerCase();
        }
    });

    
    return novaFrase.join(" ");
}


let frase = prompt("Digite uma frase:");
let fraseModificada = modificarFrase(frase);

console.log("Frase modificada:", fraseModificada);
