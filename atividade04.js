/*
Uma clínica médica deseja implementar um sistema de triagem para direcionar os
pacientes conforme a especialidade médica necessária. O recepcionista deve digitar o
número correspondente ao sintoma do paciente, e o sistema indicará o especialista
recomendado.

Os sintomas e suas respectivas especialidades são:
1️⃣ Dor de cabeça → Neurologista
2️⃣ Dor no peito → Cardiologista
3️⃣ Dificuldade para respirar → Pneumologista
4️⃣ Dores musculares → Ortopedista
5️⃣ Problemas digestivos → Gastroenterologista
6️⃣ Problemas de pele → Dermatologista
7️⃣ Outro sintoma → Clínico Geral
O programa receberá o número correspondente ao sintoma e usará switch-case para exibir
a especialidade indicada.

*/

/* 
Solicite ao usuário um número de 1 a 4 e informe a estação do ano correspondente:
1 - Verão
2 - Outono
3 - Inverno
4 - Primavera

  Caso o número seja inválido, exiba uma mensagem de erro.
  */

let especialidade = "2";

switch(especialidade){

    case "1":
    console.log("Neurologista");
    break;

    case "2":
        console.log("Cardiologista");
    break;

    case "3":
        console.log("Pneumologista");
    break;
    
    case "4":
    console.log("Ortopedista");
    break;

    case "5":
    console.log("Gastroenterologista");
    break;

    case "6":
    console.log("Dermatologista");
    break;

    case "7":
    console.log("Clínico Geral");
    break;
    
     default:
        console.log("O número não corresponde a uma especialidade!");
    break;   

}
