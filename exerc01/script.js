// Função para calcular a média
function calcularMedia(num1, num2, num3) {
    return (num1 + num2 + num3) / 3;
    }
    // Evento para lidar com o formulário
    document.getElementById('mediaForm').addEventListener('submit', function (e) {
    e.preventDefault(); // Evita o reload da página
    // Pega os valores dos inputs
    
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    const num3 = parseFloat(document.getElementById('num3').value);
    // Calcula a média
    const media = calcularMedia(num1, num2, num3);
    // Exibe o resultado
    document.getElementById('resultado').textContent = `A média é: ${media.toFixed(2)}`;
    });