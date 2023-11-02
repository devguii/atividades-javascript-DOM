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

function atividade4(num) {
  var tabuada = [];
  for (i = 0; i < 10; i++) {
    tabuada[i] = num * (i + 1);
  }
  return tabuada;
}

function atividade5(num) {
  return parseInt(num.toString().split("").reverse().join(""));
}

function fatorial() {
  var input = Number(document.getElementById("numeroFatorial").value);
  var resultado = atividade1(input).toString();
  document.getElementById("resultadoFatorial").innerHTML = resultado;
}

function tabuada() {
  var input = Number(document.getElementById("numeroTabuada").value);
  var resultado = atividade4(input).toString();
  document.getElementById("resultadoTabuada").innerHTML = resultado;
}

function invertido() {
  var input = document.getElementById("numeroInvertido").value;
  var resultado = atividade5(input).toString();
  document.getElementById("resultadoInvertido").innerHTML = resultado;
}

function insert(num) {
  var numero = document.getElementById("resultado").innerHTML;
  document.getElementById("resultado").innerHTML = numero + num;
}
function clean() {
  document.getElementById("resultado").innerHTML = "";
}
function back() {
  var resultado = document.getElementById("resultado").innerHTML;
  document.getElementById("resultado").innerHTML = resultado.substring(
    0,
    resultado.length - 1
  );
}
function calcular() {
  var resultado = document.getElementById("resultado").innerHTML;
  if (resultado) {
    document.getElementById("resultado").innerHTML = eval(resultado);
  } else {
    document.getElementById("resultado").innerHTML = "Nada...";
  }
}
