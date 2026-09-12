function calcularIMC(peso, altura) {
  return peso / (altura * altura);
}

document.getElementById('form-imc').addEventListener('submit', function (evento) {
  evento.preventDefault();

  const peso = parseFloat(document.getElementById('peso').value);
  const altura = parseFloat(document.getElementById('altura').value);

  const imc = calcularIMC(peso, altura);

  document.getElementById('valor-imc').textContent = imc.toFixed(2);
  document.getElementById('resultado').hidden = false;
});
