/**
 * Programa para determinar se o número é primo ou não.
 */
function primoOuNao(n){

  //Verificar o número, não pode ser inferior a 1;
  if(n<=1) return false;
  // Verificar se o numero é 2 ou 3;
  if(n <=3) return true;
  //verificar se o numero é divisivel por 2 e 3;
  if(n % 2 == 0 || n % 3 == 0) return false;
  //O número 5 é o proximo na sequencia depois + 6;
for(let i = 5; i*i <=n; i+=6){
    if(n % i == 0 || n % (i+2) == 0) return false;
}
return true;
  //retornar verdadeiro
}
// Digitar o valor e verificar.
let primo = primoOuNao(7);
console.log(primo);