/* PROGRESS */
let allProgress = document.querySelectorAll('.progress');
allProgress.forEach((progress) => {
  var bar = document.createElement('div');
  bar.classList.add('bar');
  bar.style.width = progress.getAttribute('data-width') + '%';
  progress.appendChild(bar);
});
