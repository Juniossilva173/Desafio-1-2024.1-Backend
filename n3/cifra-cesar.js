//Código do Júnio Silva - UNB Engnet
function rot13(str) 
{
  let letras = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'; // Váriavel para detectar todas as letras do alfabeto.
  // somente em maisculo como diz o exercício.
  let cesar = '';// Váriavel que irá armazenar a palavra codificada.

  for(let i =0; i < str.length; i++)
  {
    let index = letras.indexOf(str[i]);//Detecta a posição dos caracteres na variavel letras.

    if (index == -1)  //verifica caracteres fora do alfabeto como espaços, pontuações, etc.
    { 
      cesar += str[i];

    }else{
      let newIndex  = (index + 13) % 26; // Faz o calculo e desloca 13 posições a frente como dito no exercício.
      cesar += letras[newIndex]
      //adiciona a letra correspondente ao "newIndex".
    }
  }
  return cesar;
}

console.log(rot13("SERR PBQR PNZC"));