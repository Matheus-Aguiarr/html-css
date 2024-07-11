const valorDeUso = 3;
let tempoDeUso = document.getElementById("usotxt");
let res = document.getElementById("res");

function calcular() {
    const valor =  tempoDeUso.value * 0.2;
    res.innerHTML = `Valor a pagar: R$ ${valor.toFixed(2)}`;
}
