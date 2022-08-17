let counter = document.querySelector("#counter");
let increment = document.querySelector("#increment");
let decrement = document.querySelector("#decrement");

function mudarValor(valor) {
  counter.innerText = +counter.innerText + valor
}

increment.addEventListener('click', () => mudarValor(1));
decrement.addEventListener('click', () => mudarValor(-1));