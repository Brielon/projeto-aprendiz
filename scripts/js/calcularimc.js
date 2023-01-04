//requisitos
//Deve receber um numero o iMC
//reve retornar uma string
//deve retornar um erro se receceber um parametro nao numero 
//deve retornar erro caso nao receba nenhum parametro
//classificaçao                     imc
//muito abaixo do peso                  16 a 16,9kg/m2
//abaixo do peso                        17 a 18,4kg/m2
//peso normal                           18,5 a 24,9kg/m2
//acima do peso                         25 a 29,9kg/m2
//obesidade de grau I                   30 a 34,9kg/m2
//obesidade de grau II                  35 a 40kg/m2    
//obesidade de grau III                 maior que 40kg/m2
// IMC = peso / (altura x altura)
(function(){

    //funcao de callback classifica o imc
        const cb = function(IMC) {    
        let msg = ""
        if(IMC<17){
            //muito baixo
            msg += `Muito abaixo do peso`
        }else if(IMC<18.5){
            //abaixo do peso
            msg += `Abaixo do peso`
        }else if(IMC<25){
            //peso normal
            msg += `Peso normal`   
        }else if(IMC<30){
            //acima do peso
            msg += `Acima do peso`
        }else if(IMC<35){
            //obesidade de grau I
            msg += `Obesidade de grau I`  
        } else if (IMC<40) {
            //obesidade de grau II
            msg += `Obesidade de grau II`
        } else if (IMC>=40) {
            //obesidade de grau III
            msg += `Obesidade de grau III`   
        }
        return msg
    }



    function imcCalculoPA(peso,altura,cb) {
        if(peso === undefined || altura === undefined){
            throw Error("Dados icorretos")
        }
        let IMC = peso / (altura * altura)
         if (arguments[2]==undefined) {
             return IMC.toFixed(1)    
        }else{
        return `O IMC calculado foi ${IMC.toFixed(1)} ${cb(IMC)}`
    }
    }
    let mensagem2 = imcCalculoPA(70,2,cb)
    let mensagem = imcCalculoPA(70,2)
    console.log(mensagem,mensagem2)

})()