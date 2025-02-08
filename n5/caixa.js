//Código do Júnio Silva - UNB Engnet.
//As variaveis foram quase todas escritas pelo que diz no exercicio.
// 'cid' significa "cash in dawer", cidSum representa o dinheiro total na gaveta do caixa.
//curr é o nome da moeda/cedula que será processada no loop, e o currSum significa quanto dinheiro vale a cedula/moeda.
//

const dinheiro = // valores multiplicados por 100.
{
  "PENNY": 1,
  "NICKEL": 5,
  "DIME": 10,
  "QUARTER": 25,
  "ONE": 100,
  "FIVE": 500,
  "TEN": 1000,
  "TWENTY": 2000,
  "ONE HUNDRED": 10000
}


function checkCashRegister(price, cash, cid) 
{
  let changeSum = cash * 100 - price * 100; // troco convertido para centavos.
  let changeSumCheck = changeSum;//verifica o troco.
  let change = []; //lista cedulas ou moedas que podem ser entregues no troco.
  let status = ''; // status do caixa.

  let cidSum = 0; //total de dinheiro no caixa.
  let filteredCid = cid.filter(elem => elem[1] !== 0).reverse();//remove valores que são iguais a 0.

//calculo do dinheiro do caixa.
  filteredCid.forEach(elem => 
  {
    let curr = elem[0];//nome da moeda ou cedula.
    let currSum = elem[1] * 100;// valor total da moeda ou cedula.
    cidSum += currSum;//soma o total da moeda/cedula no caixa.
    let total = 0;// valor para o troco.

    while (changeSum >= dinheiro[curr] && currSum > 0) // equanto precisar de troco e dinheiro suficiente.
    {
      total += dinheiro[curr];// soma o valor retirado do caixa.
      changeSum -= dinheiro[curr];// diminui o troco restante.
      currSum -= dinheiro[curr];// diminui do caixa.
    }
    if (total !== 0) 
    {
      change.push([curr, total / 100]);// adiciona a unidade usado no troco.
    }
  });

  if (changeSum > 0) //status do caixa
  {
    status = 'INSUFFICIENT_FUNDS';// verifica se ainda precisa de troco, mas o caixa não tem recurso.
    change = [];
  } else if (changeSum == 0 && changeSumCheck == cidSum) 
  {
    status = 'CLOSED';// se o troco for igual o total no caixa
    change = cid;
  } else 
  {
    status = 'OPEN';// A dinheiro suficiente no caixa então ele não precisa fechar.
  }
  return { 'status': status, 'change': change };
}

console.log(checkCashRegister(19.5, 20, [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]));