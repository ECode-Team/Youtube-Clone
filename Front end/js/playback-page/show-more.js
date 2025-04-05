const showBtn = document.querySelector(".show-btn.more")
const lessBtn = document.querySelector(".show-btn.less")
const forShowOne = document.querySelector(".for-show-one")
const forShowTwo = document.querySelector(".for-show-two")

forShowOne.style.display = "none";
forShowTwo.style.display = "none";
lessBtn.style.display = "none"

showBtn.addEventListener("click", () => {
    forShowOne.style.display = "flex";
    forShowTwo.style.display = "flex";
    showBtn.style.display = "none"
    lessBtn.style.display= "flex"
})

lessBtn.addEventListener("click", () => {
    forShowOne.style.display = "none";
    forShowTwo.style.display = "none";
    showBtn.style.display = "flex"
    lessBtn.style.display= "none"
})

