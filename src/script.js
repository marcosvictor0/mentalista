//alert
//document.write
//console.log
var numeroSecreto = parseInt(Math.random(1) * 10)
var tentativas = 3

while (tentativas > 0) {
    var chute = parseInt(prompt("Escolha um número entre 0 e 10: "));
    if (numeroSecreto == chute) {
    alert("Opaa! você acertou!");
      break;
    } else if ( chute < numeroSecreto) {
    alert("Quase, o número secreto é um pouco maior.");
    tentativas = tentativas - 1
    } else if (chute > numeroSecreto) {
    alert("Quase, o número secreto é um pouco menor.");
    tentativas = tentativas - 1
  }
}

if (chute != numeroSecreto) {
  alert("As tentativas acabaram, mas o numero secreto era: " + numeroSecreto)
}