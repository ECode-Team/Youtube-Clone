import { Videos } from "../fetchVideo.js";
export const videoElementsArray = [];

export async function createPlaceholder() {
  if (videoElementsArray.length > 0) return;
  Videos.forEach(() => {
    const placeHolder = document.createElement("div");
    placeHolder.classList.add("placeholder");
    
    placeHolder.innerHTML = `<div class="PHthumbnail"></div>
     <div class="PHinfo">
         <span class="PHprofile"></span>
         <div class="PHtitle"></div>
     </div>`;
    videoElementsArray.push(placeHolder);
  })
}

export async function checkVisiblePart() {
  videoElementsArray.forEach((placeHolder, index) => {
    const rect = placeHolder.getBoundingClientRect();
    const videoHeight = rect.height;
    const visiblePart = Math.min(window.innerHeight, rect.bottom) - Math.max(0, rect.top);

    if (visiblePart > videoHeight * 0.3) {
      loadVideos(index)
    }
  })
}

async function loadVideos(index) {
  const video = Videos[index];

  const videoElement = document.createElement("a");
  videoElement.href = `video.html?video=${encodeURIComponent(JSON.stringify(video.ID))}`;

  videoElement.innerHTML = `
    <div class="video-preview">
      <div class="thumbnail-row">
        <img class="thumbnail" src="${video.Thumbnail}" />
        <div class="video-time">9:30</div>
      </div>
      <div class="video-info-grid">
        <div class="channel-picture">
          <img class="profile-picture" src="${video.channelPicture}" />
        </div>
        <div class="video-info">
          <div class="video-title">
            <span>${video.Title}</span>
            <img src="imgs/Icons/Shorts video/menu-icon.svg">
          </div>
          <p class="video-author">${video.Channel}</p>
          <p class="video-stats">${video.Views}</p>
        </div>
      </div>
    </div>`;

  const img = videoElement.querySelector(".thumbnail");
  img.src = video.Thumbnail;

  img.onload = function () {
    img.style.display = 'block';
    videoElementsArray[index].replaceWith(videoElement);
    videoElementsArray[index] = videoElement;
  }
}