const arr = [1,5,10,4,"ola",true,"mundo","teste",4]
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