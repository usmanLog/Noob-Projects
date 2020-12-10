const amount1 = document.getElementById('number1');
const amount2 = document.getElementById('number2');
const total = document.getElementById('total');
const calculate = document.getElementById('calculate');

function calculateTotal() {
   total.value = `${+((amount1.value * 100) / amount2.value)}%`;
}

//Event Listeners

calculate.addEventListener('click', calculateTotal);
