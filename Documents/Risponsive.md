# YouTube Long & Short Video Grid Responsive System

## Overview
The **YouTube Long & Short Video Grid Responsive System** is a dynamic layout designed to handle both standard YouTube videos and short-form reels seamlessly. The system automatically adjusts the number of videos per row based on the screen width, ensuring an optimized viewing experience for all devices.

## How It Works
1. **Dynamic Video Grid** - The system arranges long videos into two separate containers and moves them under short videos as the screen size decreases.
2. **Automatic Adjustments** - As the screen resizes, the layout recalculates and redistributes the videos using `appendChild()` for long videos.
3. **Shorts Handling** - Short videos are placed in a separate container that adapts to screen size by dynamically **removing** videos one by one when reducing the screen width and **adding** them back when increasing.
4. **Performance Optimization** - Hides excess videos and short clips dynamically to improve performance and user experience.

## Implementation
### HTML Structure
```html
<div class="content-container">
    <div class="video-grid"></div>
    <div class="Short-video-container"></div>
</div>
```

### JavaScript for Dynamic Layout Adjustment
```js
function adjustLayout() {
    // Access to html elements
    const [container, shortContainer] = [...document.querySelectorAll('.content-container, .Short-video-container')];
    const screenWith = document.querySelector('.content-container').getBoundingClientRect().width;

    // Calculate max video/short per row
    const maxShortPerRow = Math.round(screenWith / 260);
    const maxLongPerRow = Math.round(screenWith / 370);

    // Shorts responsive
    shortElementsArray.forEach((short, index) => {
        if (index >= maxShortPerRow) {
            short.style.display = 'none';
        } else {
            short.style.display = 'flex';
        }
    });

    // Delete video grid for update again
    document.querySelectorAll('.video-grid').forEach((row) => {
        row.remove();
    });

    // Create video grid and place it top of the short container
    let currentRow = document.createElement('div');
    currentRow.classList.add('video-grid');
    container.insertBefore(currentRow, shortContainer);

    let videoPerRow = 0;
    videoElementsArray.forEach((video) => {
        if (videoPerRow < maxLongPerRow) {
            currentRow.appendChild(video);
            videoPerRow++;
        } else {
            currentRow = document.createElement('div');
            currentRow.classList.add('video-grid');
            container.appendChild(currentRow);
            currentRow.appendChild(video);
            videoPerRow = 1;
        }
    });
}

window.addEventListener('resize', adjustLayout);
```

## Benefits
- **Fully Responsive**: Adjusts seamlessly to different screen sizes.
- **Dynamic Content Management**: Moves long videos below shorts and removes short videos dynamically based on screen width.
- **Performance Efficient**: Hides unnecessary elements to improve page load speed.
- **Scalability**: Easily supports more videos and shorts without affecting layout integrity.
- **Better User Experience**: Keeps content well-organized and accessible on all devices.

## Conclusion
This responsive system is essential for video platforms that handle both long and short videos. By leveraging JavaScript-based dynamic layout adjustments using `appendChild()`, the system enhances user engagement and optimizes performance across devices.

