const i = document.getElementById('i-tag');
const priceOne = document.querySelector('.price-one');
const price = document.querySelector('.price-one');
const price = document.querySelector('.price-one');

i.addEventListener('click', () => {
   if (i.classList.contains('fa-toggle-off')) {
      i.classList.replace('fa-toggle-off', 'fa-toggle-on');
      priceOne.innerHTML = `&dollar;199.99`;
   } else if (i.classList.contains('fa-toggle-on')) {
      i.classList.replace('fa-toggle-on', 'fa-toggle-off');
      priceOne.innerHTML = `&dollar;19.99`;
   }
});
