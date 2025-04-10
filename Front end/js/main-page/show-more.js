const moreBtn = document.querySelector(".Show-icon.more");
const lessBtn1 = document.querySelector(".Show-icon.less");
const hiddenItems = document.querySelectorAll(".subscription-item.hidden");

hiddenItems.forEach(item => item.style.display = "none");
lessBtn1.style.display = "none";

moreBtn.addEventListener("click", () => {
  hiddenItems.forEach(item => {
    item.style.display = "flex";
  });

  moreBtn.style.display = "none";
  lessBtn1.style.display = "flex";
});

lessBtn1.addEventListener("click", () => {
  hiddenItems.forEach(item => {
    item.style.display = "none";
  });

  lessBtn1.style.display = "none";
  moreBtn.style.display = "flex";
});
