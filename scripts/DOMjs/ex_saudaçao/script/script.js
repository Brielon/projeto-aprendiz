
(function(){
let nome = null
if(typeof(nome)=="string"){
    let hero=document.querySelector(".hero"),
        h_content=document.querySelector(".hero-content")
//hero.innerHTML = `<div class="top-bar"><p>Bem-vindo(a),${nome}</p></div>${hero.innerHTML}`
let div = document.createElement("div")
div.className = "top-bar"
hero.insertBefore(nome,h_content)
let nome = document.createElement("p")
div.insertAdjacentHTML(nome)

}
let teste = document.querySelector("main")
teste.className = "teste"

    
}) ()