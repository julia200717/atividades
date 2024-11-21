document.querySelector(".botao").addEventListener("click", function(){
    const paragrafo = document.querySelector(".paragrafo")

   paragrafo.innerHTML = "Você clicou no botão!" 
   paragrafo.style.color = "green"
})