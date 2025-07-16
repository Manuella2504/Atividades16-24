/* 
Solicite ao usuário um número de 1 a 4 e informe a estação do ano correspondente:
1 - Verão
2 - Outono
3 - Inverno
4 - Primavera

  Caso o número seja inválido, exiba uma mensagem de erro.
  */

let estacao = "1";

switch(estacao){

    case "1":
    console.log("Verão");
    break;

    case "2":
        console.log("Outono");
    break;

    case "3":
        console.log("Inverno");
    break;
    
        case "4":
    console.log("Primavera");
    break;
    
     default:
        console.log("O número não corresponde a uma estação!");
    break;   

}
