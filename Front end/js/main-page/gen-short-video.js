import { Shorts, fetchShorts } from "../fetchShort.js";
export const shortElementsArray = [];

export async function loadShorts() {
  await fetchShorts();
  // Access to html elements
  const ShortSection = document.querySelector(".Short-video-section");
  
  Shorts.forEach((short) => {
    const shortElement = document.createElement("a");
    shortElement.href = `short.html?short=${encodeURIComponent(short.ID)}`;
    ShortSection.appendChild(shortElement);

    shortElement.innerHTML = `<div class="short-video-box">
            <div>
              <div class="short-thumbnail">
                <img src="${short.Thumbnail}">
              </div>
              <div class="short-video-info">
                <div class="short-video-title">
                  <span class="short-video-title">${short.Title}</span>
                  <img src="imgs/Icons/Shorts video/menu-icon.svg">
                </div>
                <p class="short-video-stats">1.4M views</p>
              </div>
            </div>
          </div>`
    shortElementsArray.push(shortElement);
  })
}