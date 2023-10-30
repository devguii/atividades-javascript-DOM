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
