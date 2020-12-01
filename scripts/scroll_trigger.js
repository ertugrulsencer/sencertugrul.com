let intro = document.querySelector('#Intro');
let skills = document.querySelector('#Skills');
window.addEventListener('scroll', () => {
  console.log(window.pageYOffset);
  go_scroll(0, '#Intro');
  console.log(skills.scrollTop);
  go_scroll(skills.scrollTop, '#Intro');
});

function go_scroll(OffsetY, Id){
  if (window.pageYOffset === OffsetY) {
    location.href = Id;
  }
}
go_scroll(0, '#Intro');
