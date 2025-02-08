//Código do Júnio Silva - UNB Engnet.
//Nesse código é possivel fazer apenas usando 'regular expressions'
//Fazendo uso do site https://regex101.com/ pode-se ter mais noção de cada caso diferente para o uso da regex.
function telephoneCheck(str) {
let regex = /^(1\s?)?(\d{3}|\(\d{3}\))[\-\s]?\d{3}[\-\s]?\d{4}$/
// ^- inicio da string (tem que começar com um número.)
// (1\s?)? - código do país que é opcional (1), seguido por um espaço opcinal (\s?).
// (\d{3}|\(d{3}\))  - Grupamentos de 3 digitos '555' \d{3}, e grupo de 3 digitos entre parêntes \(d{3}\).
// [\-\s]? - hífens e espaços opcionais.
// \d{3} - três digitos.
// [\-\s] - outro hífen.
// d{4} - 4 digitos.
// $ - fim da string.

  return regex.test(str);// para retornar verdadeiro ou falso.
}

console.log(telephoneCheck("5555555"));