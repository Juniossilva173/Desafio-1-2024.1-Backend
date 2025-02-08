//Código do Júnio Silva - UNB Engenet .

function palindrome(word) //função feita pelo propio sistema.
{
  let newWord = word.toLowerCase().replace(/[^a-z\d]/g,''); 
  //A expressão /[^a-z\d]/g serve para substituir qualquer caractere que não seja uma letra minúscula entre 'a' e 'z' ou um dígito numérico. O modificador g garante que a substituição ocorra em todas as ocorrências encontradas na string, e a substituição por '' remove esses caracteres.

  let reverseWord = newWord.split('').reverse().join(''); 
  // Nessa linha a variavel reverseWord recebe a versão invertida da variavel newWord a string é dividida, invertida e depois os caracteres serão juntos novamente.

  if (newWord === reverseWord){ 
    // se a string de newWord for igual a de reverseWord será retornado true se não falso.
    return true;
  }else{
    return false;
  }
  

  return true;
}


console.log (palindrome("almostomla"));