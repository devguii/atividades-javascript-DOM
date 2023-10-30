document.onload(console.log("Iniciou"));

function resolucao01() {
  var input = document.getElementById("input-ex01").value;
  var resultado = input.toUpperCase().replace(/[0-9]/g, "");
  document.getElementById("paragrafo").innerHTML = resultado;
}
