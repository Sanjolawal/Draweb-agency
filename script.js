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




// Pricing html script writing

let web = document.querySelector('.price-p1')
let software = document.querySelector('.price-p2')
let box1 = document.querySelector("#box1");
let box2 = document.querySelector("#box2");
let box3 = document.querySelector("#box3");
let box4 = document.querySelector("#box4");

console.log(box1)

software.addEventListener("click", Showsoft)

function Showsoft() {
    web.style.color = "black"
    software.style.color = "red"
    box1.style.display = "none"
    box2.style.display = "none";
    box3.style.display = "block";
    box4.style.display = "block";
}
 

web.addEventListener("click", Showweb);

function Showweb() {
  web.style.color = "red";
  software.style.color = "black";
  box1.style.display = "block";
  box2.style.display = "block";
  box3.style.display = "none";
  box4.style.display = "none";
}
