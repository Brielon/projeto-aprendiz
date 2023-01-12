// reetorna a soma dos argumentos passados 
const meus_numeros = [2,3,3,4,1,4,5,3,5,8,92,3,3,4,1,4,5,3,5,8,92,3,3,4,1,4,5,3,5,8,92,3,3,4,1,4,5,3,5,8,92,3,3,4,1,4,5,3,5,8,92,3,3,4,1,4,5,3,5,8,92,3,3,4,1,4,5,3,5,8,9]
const sum = function(numeros){
    let soma = 0
    for(variavel of numeros){
        soma += variavel
    }
    console.log(soma)

}
sum(meus_numeros)