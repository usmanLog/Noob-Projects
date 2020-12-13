const image = document.querySelectorAll('#image-container');

image.forEach((img) => {
   img.addEventListener('click', () => {
      img.classList.toggle('show');
   });
});
