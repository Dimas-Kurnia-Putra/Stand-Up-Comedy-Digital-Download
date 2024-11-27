const hamburgerMenu = document.querySelector('.hamburger-menu');
const menu = document.querySelector('.menu');

hamburgerMenu.addEventListener('click', function() {
  this.classList.toggle('active');
  menu.classList.toggle('active');
});

//Tangkap elemen header
const header = document.querySelector("header");

// Tambahkan event listener untuk mendeteksi scroll
window.addEventListener("scroll", () => {
  if (window.scrollY > 0) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});

