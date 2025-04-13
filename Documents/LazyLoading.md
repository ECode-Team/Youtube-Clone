# YouTube Video Lazy Loading System

## Overview

This lazy loading system is a custom solution for optimizing performance in a YouTube-style video grid.  
Instead of rendering all videos at once, it uses placeholders and only loads the video content once the user scrolls near them.

## Key Features

- 🔹 Creates **lightweight placeholders** for all video items initially.
- 🔹 Calculates **visible portion** of each placeholder relative to viewport.
- 🔹 Loads video data only if at least **30%** of the element is visible.
- 🔹 Replaces the placeholder with the full video card once the image is fully loaded.

## How It Works

#### 1. Placeholder Generation

```js
export async function createPlaceholder() {
  if (videoElementsArray.length > 0) return;

  Videos.forEach(() => {
    const placeHolder = document.createElement("div");
    placeHolder.classList.add("placeholder");

    placeHolder.innerHTML = `
      <div class="PHthumbnail"></div>
      <div class="PHinfo">
          <span class="PHprofile"></span>
          <div class="PHtitle"></div>
      </div>`;
      
    videoElementsArray.push(placeHolder);
  });
}
```

#### 2. Check if it is in the viewport

```js
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
```

#### 3. Replace placeholder with video
```js
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
```