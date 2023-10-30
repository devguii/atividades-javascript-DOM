document.onload(console.log("Iniciou"));

function resolucao01() {
  var input = document.getElementById("input-ex01").value;
  var resultado = input.toUpperCase().replace(/[0-9]/g, "");
  document.getElementById("paragrafo").innerHTML = resultado;
}

function resolucao02() {
  var imagem1 = document.getElementById("imagem1");
  var imagem2 = document.getElementById("imagem2");
  var temp = imagem1.src;
  imagem1.src = imagem2.src;
  imagem2.src = temp;
}

function resolucao03() {
  document.body.style.backgroundColor =
    document.getElementById("colorPicker").value;
}

function atividade1(num) {
  var fatorial = num;
  for (i = num - 1; i > 0; i--) {
    fatorial = fatorial * i;
  }
  return fatorial;
}

function atividade2(n, mensagem) {
  stringRetorno = mensagem;
  for (i = 1; i < n; i++) {
    stringRetorno += " ";
    stringRetorno += mensagem;
  }
  return stringRetorno;
}

function atividade3(num1, num2, operacao) {
  switch (operacao) {
    case "+":
      return num1 + num2;
    case "-":
      return num1 - num2;
    case "*":
      return num1 * num2;
    case "/":
      if (num2 == 0) {
        return null;
      }
      return num1 / num2;
    default:
      return null;
  }
}

function fatorial() {
  var input = Number(document.getElementById("numeroFatorial").value);
  var resultado = atividade1(input).toString();
  document.getElementById("resultadoFatorial").innerHTML = resultado;
}
