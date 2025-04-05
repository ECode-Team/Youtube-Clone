const moreBtn = document.querySelector(".Show-icon.more");
const lessBtn = document.querySelector(".Show-icon.less");
const hiddenItems = document.querySelectorAll(".subscription-item.hidden");

hiddenItems.forEach(item => item.style.display = "none");
lessBtn.style.display = "none";

moreBtn.addEventListener("click", () => {
  hiddenItems.forEach(item => {
    item.style.display = "flex";
  });

  moreBtn.style.display = "none";
  lessBtn.style.display = "flex";
});

lessBtn.addEventListener("click", () => {
  hiddenItems.forEach(item => {
    item.style.display = "none";
  });

  lessBtn.style.display = "none";
  moreBtn.style.display = "flex";
});
