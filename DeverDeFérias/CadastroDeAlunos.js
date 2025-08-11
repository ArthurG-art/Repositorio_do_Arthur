const fs = require('fs');
const arquivo = 'alunos.json';

// Função para carregar alunos do arquivo JSON
function carregarAlunos() {
    if (fs.existsSync(arquivo)) {
        const dados = fs.readFileSync(arquivo, 'utf-8');
        return JSON.parse(dados);
    }
    return [];
}

// Função para salvar alunos no arquivo JSON
function salvarAlunos(alunos) {
    fs.writeFileSync(arquivo, JSON.stringify(alunos, null, 4), 'utf-8');
}

// Função para cadastrar novo aluno
function cadastrarAluno(rl) {
    rl.question('Digite o nome do aluno: ', (nome) => {
        rl.question('Digite a idade do aluno: ', (idade) => {
            const alunos = carregarAlunos();
            alunos.push({ nome, idade });
            salvarAlunos(alunos);
            console.log(`Aluno ${nome} cadastrado com sucesso!\n`);
            menu(rl);
        });
    });
}

// Função para ver lista de alunos
function verLista(rl) {
    const alunos = carregarAlunos();
    if (alunos.length === 0) {
        console.log('Nenhum aluno cadastrado.\n');
    } else {
        console.log('\n Lista de alunos:');
        alunos.forEach((aluno, i) => {
            console.log(`${i + 1}. ${aluno.nome} - ${aluno.idade} anos`);
        });
        console.log();
    }
    menu(rl);
}

// Menu principal
function menu(rl) {
    console.log("=== Sistema de Cadastro de Alunos ===");
    console.log("[1] Cadastrar aluno");
    console.log("[2] Ver lista");
    console.log("[3] Sair");

    rl.question('Escolha uma opção: ', (opcao) => {
        switch (opcao) {
            case '1':
                cadastrarAluno(rl);
                break;
            case '2':
                verLista(rl);
                break;
            case '3':
                console.log('Saindo do programa...');
                rl.close();
                break;
            default:
                console.log('Opção inválida!\n');
                menu(rl);
                break;
        }
    });
}

// Início do programa
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

menu(rl);
