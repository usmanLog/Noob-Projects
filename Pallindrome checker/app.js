const text = document.getElementById('text');
const resultContainer = document.getElementById('result-container');
const result = document.getElementById('result');
const checkBtn = document.getElementById('check');

let answer = false;

function evaluate() {
   const revText = text.value
      .split('')
      .reverse()
      .join('')
      .toLowerCase()
      .replaceAll(/\W/g, '');
   console.log(revText);

   if (revText === text.value.toLowerCase().replaceAll(/\W/g, '')) {
      result.innerHTML = `Text is a Palindrome`;
   } else {
      result.innerHTML = `Text is not a Palindrome`;
      resultContainer.style.backgroundColor = 'rgb(230, 100, 100)';
      resultContainer.style.color = '#fff';
   }

   resultContainer.classList.add('show');
   setTimeout(() => {
      resultContainer.classList.remove('show');
   }, 4000);
}

//Event Listeners
checkBtn.addEventListener('click', evaluate);
