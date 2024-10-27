function converterNome(nomeCompleto) {

    const partes = nomeCompleto.split(" ");

    const primeiroNome = partes[0];

    const iniciaisIntermediarios = partes.slice(1, -1).map(nome => nome[0] + ".").join(" ");

    const ultimoNome = partes[partes.length - 1];

    return `${ultimoNome[0]}. ${iniciaisIntermediarios} ${primeiroNome}`;
}

const nome = "Alan Mathison Turing";
console.log(converterNome(nome)); 
