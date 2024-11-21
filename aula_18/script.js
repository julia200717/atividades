
const botaoAdicionar = document.querySelector(".btn-adicionar");
const botaoremover = document.querySelector(".btn-remover");
const botaoalterar = document.querySelector(".btn-alterar");
const caixa = document.querySelector(".caixa");

botaoAdicionar.addEventListener("click", () => {
    caixa.classList.add("vermelho")
})

botaoremover.addEventListener("click", () => {
    caixa.classList.remove("vermelho")
})

botaoalterar.addEventListener("click", () => {
    caixa.classList.toggle("rosa")
})

