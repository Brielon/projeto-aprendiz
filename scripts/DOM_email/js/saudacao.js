
let email = document.querySelector("#txtEmail")
let enviar = function() {
    let conteudo = email.value,
        feedback = document.querySelector("#newsletterFeedback")
        feedback.innerHTML = `<p>O email ${conteudo}, foi cadastrado com sucesso</p>`
        email.value = ""
        
}

