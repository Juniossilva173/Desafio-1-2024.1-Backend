// Código do Júnio Silva - UNB Engnet.

function convertToRoman(num) 
{
    if (num <1 |num >3999) // Aqui o codigo verifica se o numero é menor que 1 ou maior que 3999 numeros abaixo de 1 e acima de 3999 não existem em romano.
    {
        return undefined;
    }
  let romanos = 
  { //tabela de significados de cada numeral dado no exercicio com variaveis (números) e valores(strings)
  1:  'I', 
  4:  'IV', 
  5:  'V', 
  9:  'IX', 
  10: 'X', 
  40: 'XL', 
  50: 'L', 
  90: 'XC', 
  100: 'C', 
  400: 'CD',
  500: 'D', 
  900: 'CM', 
  1000:'M'
  };

  let conversao = '';

  let roma = Object.keys(romanos).reverse(); // Obtem as "keys" de romanos e as iverte para começar de maneira decrescente.
  roma.forEach(key =>
  {
    
  while(key <= num) 
  {
    conversao += romanos[key];
    num -= key;
  }  
  });// enquanto o número convertido for maior ou igual a chave atual será adicionado o numeral romano correspondente a string conversao e diminui o valor da 'key' do numero convertido.

 return conversao; // retorna a string com o numero que virá a ser convertido.
}

console.log(convertToRoman(50));