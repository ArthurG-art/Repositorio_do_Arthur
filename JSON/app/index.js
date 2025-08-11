const prompt = require('promp-sync')();
const fs = require('fs');

let dados = fs.readFileSync('dados.json', 'utf-8');
let alunos= JSON.parse(dados);

const nome = prompt("Digite o nome do aluno:");
const idade = parseInt(prompt("Digite a idade do aluno:"));

const novoAluno ={
    nome : "Lucas",
    idade : 14,
    matrícula: alunos.length + 1
};

alunos.push(novoAluno);
fs.writeFileSync('dados.json', JSON.stringify(null, 2, alunos));

// console.log("Aluno cadastrado com sucesso")