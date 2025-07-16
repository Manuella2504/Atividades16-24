/*
Contexto:
Uma loja virtual de eletrônicos deseja criar um sistema de descontos para seus clientes. O
sistema deve aplicar um desconto baseado no valor total da compra e no tipo de cliente. Os
critérios são os seguintes:
1. Clientes Comuns:
○ Compras acima de R$100,00 recebem 5% de desconto.
○ Compras acima de R$500,00 recebem 10% de desconto.
○ Compras acima de R$1000,00 recebem 15% de desconto.

*/


let cliente = 2;
let compras = 1000;
let resultado = 0;

if(cliente == 1){
   
console.log("Você é um cliente Comum");

  if (compras >= 100  && compras <= 500){
    resultado = compras * 0.05;
    console.log("Você recebeu 5% de desconto:" + "" + resultado);
  }

  else if (compras >= 500  && compras <= 1000){
        resultado = compras * 0.10;
        console.log("Você recebeu 10% de desconto: " + resultado);
  }

  else if (compras >= 1000){
    resultado = compras * 0.15;
    console.log("Você recebeu 15% de desconto: " + resultado);
}};

/*
2. Clientes VIP:
○ Sempre recebem um 10% de desconto mínimo.
○ Compras acima de R$500,00 recebem 15% de desconto.
○ Compras acima de R$1000,00 recebem 20% de desconto.
*/

if(cliente == 2){
    
    console.log("Você é um cliente Vip");

    if (compras > 1 && compras < 500){
      resultado = compras * 0.10;
      console.log("Você recebeu 10% de desconto:" + "" + resultado);
    }
  
    else if (compras >= 500  && compras <= 1000){
          resultado = compras * 0.15;
          console.log("Você recebeu 15% de desconto: " + resultado);
    }
  
    else if (compras > 1000){
      resultado = compras * 0.20;
      console.log("Você recebeu 20% de desconto: " + resultado);
  }};
  

