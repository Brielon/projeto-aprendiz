let variavel = 20;//o let faz a tipagem das variaveis
const constante = 20;//o const faz a tipagem das constantes
//alem dessas temos tambem o 'var' porem nao e recomendado sua utilizaçao devido aos erros
/*console.log(typeof variavel , typeof constante);
variavel = "animal";
console.log(typeof variavel);
variavel = 20.1;
console.log(typeof variavel);
o resultado do descrito assima e: 
number number
string
number 
ou seja, as variaveis sao englobadas por string e number*/
/*Ser maior de 18 OU Estar acompanhado dos pais
te comprado um bilhete*/
let M_idade = true;
let A_pais = true;
let C_bilhete = false;
console.log((M_idade || A_pais)&&C_bilhete);
//
