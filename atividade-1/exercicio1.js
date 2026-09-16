const entrada = require('readline-sync');

const produto = entrada.question("Digite o produto: ");
const qtdPorHora = entrada.questionInt("Dirige a quantidade produzida por hora: ");
const horasTrabalhadas = entrada.questionFloat("Digite as horas trabalhadas: ");

const total = qtdPorHora * horasTrabalhadas;

console.log(`\n=== Relatorio de Producao ===`);
console.log(`Produto: ${produto}`);
console.log(`Producao por hora: ${qtdPorHora} por hora`);
console.log(`Horas Trabalhadas: ${horasTrabalhadas} horas`);
console.log(`Total de pecas produzidas: ${total} pecas`);