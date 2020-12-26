const billValue = document.getElementById('bill');
const range = document.getElementById('range');
const percentage = document.getElementById('percentage');
const tipAmount = document.querySelector('.tip-amount');
const totalAmount = document.querySelector('.total-amount');

function percentageToggle() {
   percentage.innerHTML = `${range.value}%`;
   evaluate();
}

function evaluate() {
   let tip = +((billValue.value * range.value) / 100);
   tipAmount.innerHTML = `Tip amount - ${tip.toFixed(2)}`;

   totalAmount.innerHTML = `Total Bill with Tip amount - ${(
      +billValue.value + tip
   ).toFixed(2)}`;
}

//Event Listeners
range.addEventListener('input', percentageToggle);
billValue.addEventListener('input', evaluate);
