// calculadora.js - Uma calculadora que funciona no terminal
// Criada para aprender sobre argumentos de linha de comando

// process.argv é um array que contém todos os argumentos passados para o script
// [0] = caminho do node, [1] = caminho do script, [2] em diante = nossos argumentos
const args = process.argv.slice(2);

// 1. Verificar se o usuário passou exatamente 3 argumentos (número, operação, número)
if (args.length !== 3) {
  console.log('❌ Ops! Você precisa digitar exatamente 3 coisas:');
  console.log('✅ Uso correto: node calculadora.js <número1> <operação> <número2>');
  console.log('📌 Exemplo: node calculadora.js 10 + 5');
  console.log('🛠 Operações disponíveis: + - * /');
  process.exit(1);
}

// 2. Extrair os valores
const num1 = parseFloat(args[0]);  // primeiro número
const operacao = args[1];          // operação (+, -, *, /)
const num2 = parseFloat(args[2]);  // segundo número

// 3. Validar se os números são válidos
if (isNaN(num1) || isNaN(num2)) {
  console.log('❌ Erro: Os valores devem ser números válidos!');
  console.log('📌 Exemplo correto: node calculadora.js 10.5 + 3.2');
  process.exit(1);
}

console.log(`🧮 Calculando: ${num1} ${operacao} ${num2}`);

// 4. Fazer o cálculo
let resultado;

switch (operacao) {
  case '+':
    resultado = num1 + num2;
    console.log('➕ Fazendo uma soma...');
    break;

  case '-':
    resultado = num1 - num2;
    console.log('➖ Fazendo uma subtração...');
    break;

  case '*':
    resultado = num1 * num2;
    console.log('✖ Fazendo uma multiplicação...');
    break;

  case '/':
    if (num2 === 0) {
      console.log('❌ Erro: Não é possível dividir por zero!');
      console.log('ℹ Dica: Divisão por zero é indefinida na matemática.');
      process.exit(1);
    }
    resultado = num1 / num2;
    console.log('➗ Fazendo uma divisão...');
    break;

  default:
    console.log(`❌ Erro: Operação '${operacao}' não é válida!`);
    console.log('🛠 Operações disponíveis: + - * /');
    process.exit(1);
}

// 5. Mostrar o resultado
console.log('\n📌 Resultado:');
console.log(`${num1} ${operacao} ${num2} = ${resultado}`);

// Mostrar detalhado se for divisão com resto
if (operacao === '/' && resultado % 1 !== 0) {
  console.log(`🔎 Resultado detalhado: ${resultado.toFixed(4)}`);
}
