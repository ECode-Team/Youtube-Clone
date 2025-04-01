const btn = document.querySelector(".Show-more-icon");
const hiddenItems = document.querySelectorAll(".subscription-item.hidden");

let isExpanded = false;

btn.addEventListener("click", () => {
  isExpanded = !isExpanded;

  hiddenItems.forEach(item => {
    item.style.display = isExpanded ? "flex" : "none";
  });

  btn.textContent = isExpanded ? "Show less" : "Show more";
});
