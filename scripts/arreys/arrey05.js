let arr = [1,3,5,7,9]
//####################################################################################################
//##################################.push()###########################################################
//####################################################################################################
let teste = arr.push(11,133,232,343,23)//armazenou o novo lenth do arrey 
console.log(teste)
console.log(arr)//adicionou elementos ao arrey
//####################################################################################################
//##################################.pop()############################################################
//####################################################################################################
// remove  o ultimo elemento e retorna o mesmo ex:
let ultimoElemento = arr.pop()
console.log(ultimoElemento)
console.log(arr)
//####################################################################################################
//##################################.shift()##########################################################
//####################################################################################################
// remove  o primeiro elemento e retorna o mesmo ex:
let primeiroElemento = arr.shift()
console.log(primeiroElemento)
console.log(arr)
//####################################################################################################
//##################################.unshift()########################################################
//####################################################################################################
let teste1 = arr.unshift(11,133,232,343,23)//armazenou o novo lenth do arrey 
console.log(teste1)
console.log(arr)//adicionou elementos ao inicio do arrey

//####################################################################################################
//##################################.slice()########################################################
//####################################################################################################
// faz um recorte do arrey 
let arr3 = arr.slice(7)
console.log(arr3)
//####################################################################################################
//##################################.splice()########################################################
//####################################################################################################
// retorna os elementos reemovidos 

let arr4 = arr.splice(7 ,"olamundo")
console.log(arr4)
