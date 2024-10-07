// Code van accordion

var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    } 
  });
}

// Code voor openklappen hamburger menu in nav

const menuButton = document.querySelector("#menuButton");
const hetMenu = document.querySelector("#menu");

menuButton.addEventListener("click", toggleMenu);

function toggleMenu() {
    hetMenu.classList.toggle("open");
}





let lastScrollTop = 0;
const header = document.querySelector('.nav-geveltuin');

window.addEventListener('scroll', () => {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
    if (scrollTop > lastScrollTop && scrollTop > 100) {
        // Als je naar beneden scrolt en niet helemaal bovenaan bent
        header.style.top = '-80px';  // Pas de waarde aan afhankelijk van de hoogte van de header
    } else {
        // Als je naar boven scrolt of bovenaan de pagina bent
        header.style.top = '0';
    }
    
    lastScrollTop = scrollTop;
});