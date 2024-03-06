//Questao numero 1
//O valor da variável SOMA será igual a 91

// Questao numero 2
function verificaFibonacci(numero) {
  let n1 = 0;
  let n2 = 1;
  let proximoTermo;

  if (numero === n1 || numero === n2) {
    console.log(`${numero} pertence à sequência de Fibonacci.`);
    return;
  }

  proximoTermo = n1 + n2;

  while (proximoTermo <= numero) {
    if (proximoTermo === numero) {
      console.log(`${numero} pertence à sequência de Fibonacci.`);
      return;
    }
    n1 = n2;
    n2 = proximoTermo;
    proximoTermo = n1 + n2;
  }

  console.log(`${numero} não pertence à sequência de Fibonacci.`);
}

//Questao numero 3
/* a) 9 
b) 128
c) 49
d) 100
e) 13
f) 21
*/

//Questao numero 4
/* Para descobrir qual interruptor controla cada
lâmpada em apenas uma ia a sala das lâmpadas, liguei o primeiro interruptor e o mantive ligado
por uns minutos. Depois liguei o segundo interruptor e desliguei o primeiro mantendo o terceiro
desligado. Entrei na sala das lâmpadas, a lâmpada que estava quente foi o primerio interruptor que
liguei, a que estava acesa foi o segundo interruptor, e que estava apagada era o
terceiro interruptor que não liguei.

Para descobrir qual interruptor controla cada lâmpada em duas idas a sala das lâmpadas,
eu ligo o primeiro interruptor e vou a sala e vejo qual lâmpada acendeu, depois volto a sala
dos interruptores apago a que acendi, acendo outro interruptor e vou a sala das lâmpadas vê qual
acendeu, descobrindo assim duas lâmpadas a unica que não acendi, foi o terceiro interruptor. */

// Questao numero 5

function inverterString(myString) {
  let stringInvertida = "";

  for (let i = myString.length - 1; i >= 0; i--) {
    stringInvertida += myString[i];
  }

  return stringInvertida;
}
