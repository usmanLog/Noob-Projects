const text = document.getElementById('text');
const btn = document.getElementById('btn');
const result = document.getElementById('result');
const resultContainer = document.querySelector('.result-container');

let count = 0;
let vowels = ['a', 'e', 'i', 'o', 'u'];

function evaluate() {
   let input = text.value.trim().toLowerCase().split('');

   //We loop through all the elements of input while comparing each element of input with the vowels array
   for (let i = 0; i < input.length; i++) {
      for (let j = 0; j < vowels.length; j++) {
         if (input[i] === vowels[j]) {
            count++;
         }
      }
   }

   result.innerHTML = `Count of Vowels is ${count}`;
   resultContainer.classList.add('show');
   setTimeout(() => {
      text.value = '';
   }, 3000);
   setTimeout(() => {
      resultContainer.classList.remove('show');
   }, 10000);
   count = 0;
}

//Event Listeners
btn.addEventListener('click', evaluate);
