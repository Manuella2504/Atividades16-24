/*

�� Contexto
Imagine que você é responsável por criar um sistema para uma escola que determina a
situação de um aluno com base em suas notas. A escola tem as seguintes regras:
● A média é calculada a partir de três notas.
● A média final é obtida por:
● Se a média for maior ou igual a 7.0, o aluno está APROVADO.
● Se a média for menor que 7.0 e maior ou igual a 5.0, o aluno está em
RECUPERAÇÃO.
● Se a média for menor que 5.0, o aluno está REPROVADO.
● Se qualquer nota for menor que 0 ou maior que 10, o programa deve mostrar uma
mensagem de erro.

*/

let nota1 = 10;
let nota2 = 9;
let nota3 = 8;
let soma = nota1 + nota2 + nota3;
let mediafinal = soma / 3;


if (mediafinal >= 7){
    console.log("Aprovado para o próximo ano! " + mediafinal);
};

if (mediafinal < 7 && mediafinal >= 5){
    console.log("Você ainda pode recuperar a sua nota! " + mediafinal);
};

if (mediafinal < 5){
    console.log("Você ficou reprovado! " + mediafinal);
};

if(nota1 < 0 || nota1 > 10 || nota2 < 0 || nota2 > 10 || nota3 < 0 || nota3 > 10) {
   console.log("ERROR: As notas devem estar entre 0 e 10.");
};

