// Função para verificar a maioridade
function verificarMaiorIdade(idade) {
    if (idade >= 18) {
    return "Maior de idade";
    } else {
    return "Menor de idade";
    }
    }
    // Evento para lidar com o formulário
    document.getElementById('idadeForm').addEventListener('submit', function (e) {
    e.preventDefault(); // Evita o reload da página
    // Pega o valor do input
    const idade = parseInt(document.getElementById('idade').value);
    // Chama a função e mostra o resultado
    const resultado = verificarMaiorIdade(idade);
    document.getElementById('resultado').textContent = resultado;
    });