let bar = document.querySelector('.bar');
let bar1 = document.querySelector(".bar1");
let nav = document.querySelector("#nav");

bar.addEventListener("click", Show)

function Show() {
    bar.style.display = "none"
    bar1.style.display = "block"
    nav.style.display = "block"

}

bar1.addEventListener("click", Hide)

function Hide() {
    bar.style.display = "block"
    bar1.style.display = "none"
    nav.style.display = "none"
}

