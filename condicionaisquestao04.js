function calcularMedias(alunos) {
    alunos.forEach(aluno => {
        const nome = aluno[0];
        const notas = aluno[1];
        
        const somaNotas = notas.reduce((soma, nota) => soma + nota, 0);
        const media = somaNotas / notas.length;
        
        const status = media >= 70 ? "Aprovado" : "Reprovado";
        
        console.log(`${nome}, média ${media.toFixed(2)}, ${status}`);
    });
}

const alunos = [
    ["Aluno1", [10, 50, 100]],
    ["Aluno2", [55, 78, 90]],
    ["Aluno3", [65, 60, 70]],
    ["Aluno4", [80, 85, 88]],
    ["Aluno5", [40, 50, 30]]
];

calcularMedias(alunos);
