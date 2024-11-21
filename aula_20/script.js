
function cadastrar() {
    const nome = document.querySelector("#nome");
    const apelido = document.querySelector("apelido");
    const nascimento = document.querySelector("#nascimento");
    const genero = document.getElementById("genero");
    const email = document.querySelector("#email");
    const senha = document.getElementById("senha");

    const nomevalor = nome.value;
    const apelidovalor = apelido.value;
    const nascimentovalor = nascimento.value;
    const generovalor = genero.value;
    const emailvalor = genero.value;
    const senhavalor = senha.value;

    if(nomevalor === ""){
        nome.classList.add("erro")
        return
    }else{
    nome.classList.remove("erro")  
}
    if(apelidovalor === ""){
        nome.classList.add("erro")
        return
    }
}