const entrada = require('readline-sync');

let total = 0; //acumulador iniciado em 0.

for (let inspecao = 1; inspecao <= 6; inspecao++) { //for tem três ciclos, começo, fim e o calculo que abastece o começo
    const valor = entrada.questionFloat(`Digite a medida da ${inspecao}a: `);
    total += valor;
}

const media = total / 6; //o total vai divido pelo valor que foi pedido antes

console.log(`Total de defeitos: ${total.toFixed(2)}`);
console.log(`Media de defeitos: ${media.toFixed(2)}`);