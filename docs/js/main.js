// =======================
// MENU (jQuery)
// =======================

const $menuBtn=$('.menu-btn');
const $menu=$('.menu');
const $menuNav=$('.menu-nav');
const $menuBranding=$('.menu-branding');
const $navItem=$('li');

//Set Initial State Of Menu
let showMenu=false;
$menuBtn.on('click', toggleMenu);

function toggleMenu(){
    if(!showMenu){
        $menuBtn.addClass('close');
        $menu.addClass('show');
        $menuNav.addClass('show');
        $menuBranding.addClass('show');
        $navItem.addClass('show');
        showMenu=true
    } else {
        $menuBtn.removeClass('close');
        $menu.removeClass('show');
        $menuNav.removeClass('show');
        $menuBranding.removeClass('show');
        $navItem.removeClass('show');
        showMenu=false
    }
}

// =======================
// CAROUSEL (Vanilla JS)
// =======================
document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll('.carousel').forEach(carousel => {
    const track = carousel.querySelector('.carousel-track');
    const images = carousel.querySelectorAll('.carousel-img');
    let index = 0;

    setInterval(() => {
      index = (index + 1) % images.length;
      track.style.transform = `translateX(-${index * 100}%)`;
    }, 3000);
  });
});
