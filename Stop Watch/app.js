const timer = document.querySelector('.timer');
const startBtn = document.querySelector('.start');
const resetBtn = document.querySelector('.reset');

let seconds = 0;
let minutes = 0;
let interval = null;
let started = false;

let displaySeconds = 0;
let displayMinutes = 0;

function incTime() {
   seconds++;
   if (seconds < 10) {
      displaySeconds = '0' + seconds.toString();
   } else {
      displaySeconds = seconds;
   }
   //Increament minutes after every second
   if (seconds / 60 === 1) {
      minutes++;
      seconds = 0;
   }

   //Check if minutes are less than 10
   if (minutes < 10) {
      displayMinutes = '0' + minutes.toString();
   } else {
      minutes = minutes;
   }

   timer.innerHTML = `${displayMinutes}:${displaySeconds}`;
}

//Start and stop functionality
function startStop() {
   if (started === false) {
      interval = window.setInterval(incTime, 1000);
      startBtn.innerHTML = `Stop`;
      started = true;
   } else {
      clearInterval(interval);
      startBtn.innerHTML = `Start`;
      started = false;
   }
}

function reset() {
   window.clearInterval(interval);
   seconds = 0;
   minutes = 0;
   timer.innerHTML = '00:00';
   startBtn.innerHTML = 'Start';
   started = false;
}

//Event Listeners
startBtn.addEventListener('click', startStop);
resetBtn.addEventListener('click', reset);
