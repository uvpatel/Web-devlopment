// script.js
const listitems = document.querySelectorAll("li");

function toggleDone(e) {
  
  const li = e.target.closest('li');
  if (!li) return;
  li.classList.toggle('done');
}

listitems.forEach(item => item.addEventListener('click', toggleDone));
