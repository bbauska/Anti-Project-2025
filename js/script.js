[...document.querySelectorAll('li')].forEach(li => 
  li.addEventListener('click', e => (e.stopPropagation(), li.classList.toggle('done')))
);
