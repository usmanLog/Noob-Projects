const loadingContainer = document.getElementById('loading-container');
const loading = document.querySelector('.loading');

let width = 0;

function showLoading() {
   if (width < 70) {
      width++;
   }
   loading.innerHTML = `${width}%`;
   loading.style.width = `${width}%`;
   loading.classList.add('show');
   clear();
}

let interval = window.setInterval(showLoading, 25);

function clear() {
   if (width === 70) {
      window.clearInterval(interval);
   }
}

//Event Listeners
window.addEventListener('load', showLoading);
