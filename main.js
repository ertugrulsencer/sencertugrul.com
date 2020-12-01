/* WINDOW LOADING */
window.addEventListener('load', () => {
  document.querySelector('#page-loading').style.visibility = "hidden";
  document.querySelector('#page-loading').style.opacity = "0";
  window.location.href = "#Intro";
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
/* RESPONSIVE MENU TOGGLE */
function toggleMenu(){
    let navbar = document.getElementById('navbar');
    let menu_toggle_btn = document.getElementById('menuToggle');
    menu_toggle_btn.classList.toggle('active');
    navbar.classList.remove('sticky');
    scrollEvents();
    if(menu_toggle_btn.className.indexOf('active') > 0 && navbar.className.indexOf('sticky') < 0){
      navbar.classList.add('sticky');
    }
}
document.getElementById('menuToggleButton').addEventListener('click', (e) => toggleMenu());

/* HIDE MENU */
function autoHideMenu(){
  var links = [
    document.querySelector('#navLinkIntro'),
    document.querySelector('#navLinkSkills'),
    document.querySelector('#navLinkPortfolyo'),
    document.querySelector('#navLinkGaleri'),
    document.querySelector('#navLinkAboutMe'),
    document.querySelector('#navLinkContact')
  ];
  links.forEach((link) => {
    console.log('Tıklandııı');
    link.addEventListener('click', () => toggleMenu());
  });
}
autoHideMenu();
