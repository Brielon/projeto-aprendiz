
const arr = [1,5,10,4,"ola",true,"mundo","teste",4]
//####################################################################################################
//##################################.every()##########################################################
//####################################################################################################
//quando a um falce ele retorna falce
//Metodo every() se todo a condiçoes postas do arrey for true ele retorna true

let sohNumeros = arr.every(function(){
    return true//aqui o return e true portanto ele sempre retornara true
})
let teste1 = arr.every(function(el,i){
    console.log(`${i}->${el}`)//enquanto o ciclo retornar true ela continuara
    return true //se apenas uma verificaçao retornar falso ela retornara falso
})
let sohNumeross = arr.every(function(el){
    return typeof el ==="number"//neste caso teve retornos falce entao every retorna falce

})
console.log(sohNumeross)

//####################################################################################################
//##################################.some()###########################################################
//####################################################################################################
//quando ha um true ele retorna true
let sohNumerosss = arr.some(function(el){
    return typeof el ==="number"//neste caso teve um retorno true ou mais entao o some retorna true
})
    console.log(sohNumerosss)
//####################################################################################################
//##################################.filter()#########################################################
//####################################################################################################
let arr1 = arr.filter(function(el, i, _arr){

    return typeof el === "number"
})
console.log(arr1) 
//####################################################################################################
//##################################.forEach()########################################################
//####################################################################################################
arr.forEach(function(el,i,_arr) {
    console.log(i ,":",el)

})
//e um loop que passa por todos os elementos do arrey
//####################################################################################################
//##################################.map()############################################################
//####################################################################################################
let arr4 = arr.map(function(elemento,indice,arrey) {
    return typeof elemento==="number"?"o quadrado do numero "+elemento+" é:"+elemento*elemento:elemento+" nao e numero"
})
console.log(arr4)
console.log (arr)
//####################################################################################################
//##################################.indexof(),.lastIndexof###########################################
//####################################################################################################
//retorna o primeiro e o ultimo elemento enncontrado ex
console.log("O primeiro numero 4 encontrado esta no indice: "+arr.indexOf(4))
console.log("O Ultimo numero 4 encontrado esta no indice: "+arr.lastIndexOf(4))
console.log(arr)
//se retornar -1 e porque o elemento buscado nao esta incluso
//####################################################################################################
//##################################.includes#########################################################
//####################################################################################################
//diz se o elemento buscado esta ou nao incluso no arrey
console.log(arr.includes(5)?"O elemento esta incluso":"O elemento nao esta incluso")
//aqui como 5 esta entre os elementos da arrey o retorno e true "O elemento esta incluso"

//####################################################################################################
//##################################.find()###########################################################
//####################################################################################################
//retorna o primeiro elemento que satisfaça uma condiçao
console.log(arr.find(function(elemento){
    return elemento > 4
}))

//####################################################################################################
//##################################.findIndex()######################################################
//####################################################################################################
//retorna o indice do primeiro elemento que satisfaça uma condiçao
console.log(arr.findIndex(function(elemento){
    return elemento > 4
}))
