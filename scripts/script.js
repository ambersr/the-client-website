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


// Navigatie balk hide when scroll
document.addEventListener('DOMContentLoaded', () => {
    let lastScrollTop = 0;
    const header = document.querySelector('.nav-geveltuin');
    const menuButton = document.getElementById('menuButton');
    const menu = document.getElementById('menu');

    if (menuButton && menu) {
        // Hamburger menu openen en sluiten
        menuButton.addEventListener('click', () => {
            menu.classList.toggle('open');
            document.body.classList.toggle('menu-open'); // Voorkomt scrollen als menu open is
        });

        // Scroll logica voor het verbergen/tonen van de header
        window.addEventListener('scroll', () => {
            let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

            // Alleen scrollen als het menu niet open is
            if (!menu.classList.contains('open')) {
                if (scrollTop > lastScrollTop && scrollTop > 100) {
                    // Scrollen naar beneden - verberg de header
                    header.style.top = '-95px';  // Pas de waarde aan afhankelijk van de hoogte van de header
                } else {
                    // Scrollen naar boven of bij de bovenkant - toon de header
                    header.style.top = '0';
                }
            }

            lastScrollTop = scrollTop;
        });
}

});