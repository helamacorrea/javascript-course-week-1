let agencia;
let conta;
let cartoes;
let emprestimos;
let negativado;

agencia = prompt("Agencia: ");
conta = prompt("Conta: ");
cortoes = prompt("Cartoes: ");
emprestimos = prompt("Emprestimos: ");
negativado = prompt("O nome consta no spc? ");

if(negativado == "Sim" || negativado == "sim"){
    negativado = true;
} else if(negativado == "não") {
    negativado = false;
} else {
    negativado = "Erro ao ler a situação cadastral."
}



alert(`Agência: ${agencia} \n
Conta: ${conta} \n
Cortoes: ${cartoes} \n
Emprestimos: ${emprestimos} \n
Negativado: ${negativado} \n`);

