/* WINDOW LOADING */
window.addEventListener('load', () => {
  document.querySelector('#page-loading').style.visibility = "hidden";
  document.querySelector('#page-loading').style.opacity = "0";
});
/* STICKY NAVBAR */
scrollEvents();
window.addEventListener('scroll', scrollEvents);
function scrollEvents(){
  let navbar = document.getElementById("navbar");
  let sticky = navbar.offsetTop;
  if (window.pageYOffset <= sticky) {
    navbar.classList.remove("sticky");
  } else {
    navbar.classList.add("sticky")
  }
}
