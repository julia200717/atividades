 function pegaDados(){
    const nome = document.querySelector("#nome");
    const sobrenome = document.querySelector("#sobrenome");
    const idade = document.querySelector("#idade");
    const resultado = document.querySelector(".resultado");

    const nomeValor = nome.value;
    const sobrenomevalor = sobrenome.value;
    const idadevalor = idade.value;

    if(nomeValor === ""){
      erro.textContent = "O campo não pode ficar vazio!";
      nome.style.borderColor = "red";
      return;
    }

    if(idadevalor === ""){
        document.querySelector(".erro-idade").textContent = "Campo obrigatório";
        nome.style.borderColor = "red";
        return;
    }
    if(idade < 0){
        document.querySelector(".erro-idade").textContent = "não pode ser menor que 0!";
        idade.style.borderColor = "red";
        return;
     
    }

    resultado.innerHTML = ` <p>Nome: ${nomeValor}</p>
                             <p>sobrenome: ${sobrenomevalor}</p>
                             <p>Idade: ${idadevalor}</p>
    `;
 }


