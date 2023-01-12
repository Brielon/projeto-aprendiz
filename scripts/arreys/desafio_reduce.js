const numeros = [2,3,3,4,1,4,5,3,5,8,92,3,3,4,1,4,5,3,5,8,92,3,3,4,1,4,5,3,5,8,92,3,3,4,1,4,5,3,5,8,92,3,3,4,1,4,5,3,5,8,92,3,3,4,1,4,5,3,5,8,92,3,3,4,1,4,5,3,5,8,9]
// retorno [1,3,4,5,8,9]
 let retorno = numeros.reduce(function(acumulador, atual) {
     
    if(!acumulador.includes(atual)){
        acumulador.push(atual)
        return acumulador
    }
        return acumulador
 },[])//acumulador e um arrey
 console.log(retorno)