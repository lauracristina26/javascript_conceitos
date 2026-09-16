const entrada = require('readline-sync');

const entrada = 5;
let hora = 0;

for (let hora = 1; hora<=5; hora++) {
  const producao = entrada.questionInt("Digite o valor da producao ${1}");
  producao += hora;
}; 