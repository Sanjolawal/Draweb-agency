let menu1 = document.querySelector(".menu1");
let menu = document.querySelector(".menu");
let nav = document.querySelector("#nav");
let navp = document.querySelector("#nav-p");

console.log(menu1)

menu1.addEventListener("click", Show);

function Show() {
  nav.style.display = "block";
  navp.style.display = "block";
  menu1.style.display = "none";
  menu.style.display = "block";
}

menu.addEventListener("click", Hide);

function Hide() {
  nav.style.display = "none";
  navp.style.display = "none";
  menu1.style.display = "block";
  menu.style.display = "none";
}
