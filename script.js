function calcularIMC(peso, altura) {
  return peso / (altura * altura);
}

function classificarIMC(imc) {
  if (imc < 18.5) return 'Abaixo do peso';
  if (imc < 25) return 'Peso normal';
  if (imc < 30) return 'Sobrepeso';
  if (imc < 35) return 'Obesidade grau I';
  if (imc < 40) return 'Obesidade grau II';
  return 'Obesidade grau III';
}

document.getElementById('form-imc').addEventListener('submit', function (evento) {
  evento.preventDefault();

  const peso = parseFloat(document.getElementById('peso').value);
  const altura = parseFloat(document.getElementById('altura').value);

  const imc = calcularIMC(peso, altura);

  document.getElementById('valor-imc').textContent = imc.toFixed(2);
  document.getElementById('classificacao-imc').textContent = classificarIMC(imc);
  document.getElementById('resultado').hidden = false;
});
