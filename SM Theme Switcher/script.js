const container = document.getElementById('container');
const toggleBtn = document.getElementById('toggle-btn');
const dashboard = document.getElementById('dashboard-container');
const heading = document.querySelector('h2');
const statsCont = document
   .getElementById('stats-container')
   .getElementsByClassName('d1');
console.log(heading);
console.log(statsCont);

const followerCount = document
   .getElementById('follower-count')
   .getElementsByTagName('div');

toggleBtn.addEventListener('click', () => {
   container.classList.toggle('show');
   dashboard.classList.toggle('show');

   for (let i = 0; i < followerCount.length; i++) {
      followerCount[i].classList.toggle('show');
   }

   heading.classList.toggle('show');

   for (let i = 0; i < statsCont.length; i++) {
      statsCont[i].classList.toggle('show');
   }
});
