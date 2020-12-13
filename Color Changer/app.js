const container = document.getElementById('container');

container.addEventListener('click', () => {
   let randomColor1 = Math.floor(Math.random() * 255);
   let randomColor2 = Math.floor(Math.random() * 255);
   let randomColor3 = Math.floor(Math.random() * 255);
   let randomColor4 = Math.floor(Math.random() * 255);
   let randomColor5 = Math.floor(Math.random() * 255);
   let randomColor6 = Math.floor(Math.random() * 255);
   container.style[
      'background'
   ] = `linear-gradient(to right, rgb(${randomColor1}, ${randomColor2}, ${randomColor3}), rgb(${randomColor4}, ${randomColor5}, ${randomColor6}))`;
});
