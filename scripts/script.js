// JS

// var acc = document.getElementsByClassName("accordion");
// var i;

// for (i = 0; i < acc.length; i++) {
//   acc[i].addEventListener("click", function() {
//     this.classList.toggle("active");
//     var panel = this.nextElementSibling;
//     if (panel.style.maxHeight) {
//       panel.style.maxHeight = null;
//     } else {
//       panel.style.maxHeight = panel.scrollHeight + "px";
//     } 
//   });
// }




// Code voor openklappen hamburger menu in nav

const menuButton = document.querySelector("#menuButton");
const hetMenu = document.querySelector("#menu");

menuButton.addEventListener("click", toggleMenu);

function toggleMenu() {
    hetMenu.classList.toggle("open");
}