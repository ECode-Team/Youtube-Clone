const menuBtn = document.querySelector(".menu-btn")
const btnClosd = document.querySelector(".menu-btn-side")
const sidebar = document.querySelector(".sidebar-container")
const coverblack = document.querySelector(".cover-black")

menuBtn.addEventListener("click", () => {
    sidebar.classList.toggle("close")
    coverblack.classList.toggle("active")
    sidebar.style.top = "0"
    sidebar.style.background= "#0f0f0f"
});

coverblack.addEventListener('click', () => {
    coverblack.classList.remove("active")
    sidebar.classList.add("close")
});

btnClosd.addEventListener("click", () => {
    sidebar.classList.add("close")
    coverblack.classList.remove("active")
})