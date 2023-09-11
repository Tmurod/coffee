
const burger = document.getElementById("burger");
const box = document.getElementById("header-box");

burger.addEventListener("click", () => {
    box.classList.toggle("header-box");
})