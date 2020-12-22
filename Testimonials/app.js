const text = document.getElementById('testimonial');
const userName = document.getElementById('naame');
const job = document.getElementById('post');
const image = document.getElementById('image');
const prev = document.getElementById('prev');
const next = document.getElementById('next');

let index = 0;

const users = [
   {
      user: 'Tanya Sinclair',
      post: 'UX Engineer',
      testimonial:
         'I’ve been interested in coding for a while but never taken the jump, until now. I couldn’t recommend this course enough. I’m now in the job of my dreams and so excited about the future.',
      image: 'images/image-tanya.jpg',
   },
   {
      user: 'John Tarkpor',
      post: 'Junior Front-end Developer',
      testimonial:
         'If you want to lay the best foundation possible I’d recommend taking this course. The depth the instructors go into is incredible. I now feel so confident about starting up as a professional developer.',
      image: 'images/image-john.jpg',
   },
];

function runData() {
   userName.innerHTML = users[index].user;
   text.innerHTML = users[index].testimonial;
   job.innerHTML = users[index].post;
   image.setAttribute('src', `${users[index].image}`);
}
runData();

next.addEventListener('click', () => {
   if (index === users.length - 1) {
      next.disabled = true;
      return;
   } else {
      index++;
      runData();
      prev.disabled = false;
   }
});

prev.addEventListener('click', () => {
   if (index === 0) {
      prev.disabled = true;
      return;
   } else {
      index--;
      runData();
      next.disabled = false;
   }
});
