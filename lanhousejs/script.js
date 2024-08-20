const valorDeUso = 3;
let tempoDeUso = document.getElementById("usotxt");
let res = document.getElementById("res");


function calcular() {
    const valor =  tempoDeUso.value * 0.2;
    res.innerHTML = `Valor a pagar: R$ ${valor.toFixed(2)}`;
}

tempoDeUso.addEventListener('keypress',  (e) => {
    console.log(e)
    if(e.code === 'Enter') {
        calcular()
    } 
    if (e.code === 'KeyC') {
        res.innerHTML = 'Parabéns, ao apertar a tecla C vc descobriu um easterEgg, a carol é a mulher mais linda do mundo';
    }
});