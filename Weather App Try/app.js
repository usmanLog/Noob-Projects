const text = document.getElementById('search');
const addBtn = document.getElementById('show');
const temp = document.getElementById('temp');
const feel = document.getElementById('feel');
const low = document.getElementById('low');
const high = document.getElementById('high');
const visibility = document.getElementById('visibility');
const wind = document.getElementById('wind');
const container = document.querySelector('.data');

const images = {
   cold: 'cold.jpg',
   cool: 'cool.jpg',
   normal: 'normal.jpg',
   hot: 'hot.jpg',
};

async function weather() {
   const searchValue = text.value.trim().toLowerCase();
   const blob = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${searchValue}&appid=4655441ecf405d94fdc913066a590b54&units=metric`
   );
   const data = await blob.json();
   return data;
}

async function searchResults() {
   const values = await weather();
   updateValues(values);
   updateBackground(values);
}

function updateValues(values) {
   temp.innerHTML = `${Math.floor(values.main.temp)}°C`;
   feel.innerHTML = `Feels Like:  ${values.main['feels_like']}°C`;
   low.innerHTML = `Low: ${Math.floor(values.main['temp_min'])}°C`;
   high.innerHTML = `High: ${Math.floor(values.main['temp_max'])}°C`;
   visibility.innerHTML = `Visibility: ${values.visibility / 1000}km`;
   wind.innerHTML = `Wind Speed: ${Math.floor(values.wind.speed)}km/h`;
   container.classList.add('show');
}

function updateBackground(values) {
   let temperature = values.main.temp;
   temperature <= 5
      ? (document.body.background = images.cold)
      : temperature > 5 && temperature <= 15
      ? (document.body.background = images.cool)
      : temperature > 15 && temperature <= 30
      ? (document.body.background = images.normal)
      : (document.body.background = images.hot);
}

//Event Listeners
addBtn.addEventListener('click', searchResults);
