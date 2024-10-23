function encontrarNumeroMaisFrequente(arr) {
    let mapaDeFrequencia = {};
    let maxFrequencia = 0;
    let numeroMaisFrequente;

    
    for (let i = 0; i < arr.length; i++) {
        let numero = arr[i];
        mapaDeFrequencia[numero] = (mapaDeFrequencia[numero] || 0) + 1;

        
        if (mapaDeFrequencia[numero] > maxFrequencia) {
            maxFrequencia = mapaDeFrequencia[numero];
            numeroMaisFrequente = numero;
        }
    }

    return numeroMaisFrequente;
}


let array = [1, 2, 3, 2, 4, 5, 2, 6, 3, 3, 3];
let numeroMaisFrequente = encontrarNumeroMaisFrequente(array);

console.log("O número mais frequente no array é:", numeroMaisFrequente);
