const text = document.getElementById('text');
const addBtn = document.getElementById('add');
const listUl = document.querySelector('.list');

function addTask() {
   if (text.value === '') {
      alert("Task can't be empty");
   } else {
      const task = document.createElement('li');
      task.innerHTML = `<input type="checkbox"> ${text.value} <button class="del">X</button>`;
      task.classList.add('list-item');
      listUl.appendChild(task);
      removeTask();
      completeTask();
      text.value = '';
   }
}

function removeTask() {
   const btns = document.querySelectorAll('.del');
   btns.forEach((btn) =>
      btn.addEventListener('click', () => {
         btn.parentElement.remove();
      })
   );
}

function completeTask() {
   const inputs = document.querySelectorAll('input');
   inputs.forEach((input) => {
      input.addEventListener('click', () => {
         if (input.checked === true) {
            input.parentElement.classList.add('checked');
         } else {
            input.parentElement.classList.remove('checked');
         }
      });
   });
}

//Event Listeners
addBtn.addEventListener('click', addTask);
