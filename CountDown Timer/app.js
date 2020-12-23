const remTime = document.querySelector('.container h1');

const currentYear = new Date().getFullYear();
const newYearTime = new Date(`1/1/${currentYear + 1}`);

function updateTime() {
   const currentTime = new Date();
   const diff = newYearTime - currentTime;

   const days = Math.floor(diff / 1000 / 60 / 60 / 24);
   const hours = Math.floor(diff / 1000 / 60 / 60) % 24;
   const minutes = Math.floor(diff / 1000 / 60) % 60;
   const seconds = Math.floor(diff / 1000) % 60;

   remTime.innerHTML = `${days}: ${hours < 10 ? '0' + hours : hours}: ${
      minutes < 10 ? '0' + minutes : minutes
   }: ${seconds < 10 ? '0' + seconds : seconds}`;
}

window.setInterval(updateTime, 1000);
