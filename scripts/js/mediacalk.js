
(function(){//declarada em anonimo
    function calculoMedia(){
        let total = 0;
        let qtd = arguments.length; //arguments seria o vetor que foi chamado e lengs o tamanho total desse vetor ou array
        for(let i=0;i<qtd;i++){
            if(typeof arguments[i] !== "number"){
                throw Error("only numbers")
            }
            total += arguments[i]
        }
        return total/qtd
    }
    let media = calculoMedia(34,2,50,05,50,50,50,50,50,50,50,50,50,50)
    console.log(media)
})()

//pode receber um ou mais valores
//deve retornar um unico numero
//deve gerar um erro se receber um parametro nao numero
//deve retornar 0 caso nao receba nenhum parametro
// #################################
// ##calcularMedia()// 0############
// ##calcularMedia(2,6)//4##########
// ##calcularMedia(2,6,1,1,2,6)//3##
// ##calcularMedia("2","6")//Error##
// #################################
// function calcularMedia(n1) {
//     let soma = 0
//     if(n1==undefined){
//         return console.log(0)
// }
//     for(i=0;i<n1.length;i++){
//         if(n1[i]==NaN){
//         return console.log("Error")
//         }
//         soma += n1[i]
//     }
//     return console.log(soma)

// }
// calcularMedia()
// let variavel = ""
// console.log(typeof variavel)