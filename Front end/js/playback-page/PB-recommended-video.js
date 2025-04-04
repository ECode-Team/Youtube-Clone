import { Videos, fetchVideo } from "../fetchVideo.js";

async function loadVideos() {
    await fetchVideo();

    // Generate video cards
    function GenerateVideoCards() {
        const VideoList = document.querySelectorAll(".video-list");

        VideoList.forEach(VideoList => {
            // For each on of objects
            Videos.forEach(video => {
                const VideoCard = document.createElement("div");
                VideoCard.classList.add("video-card");

                VideoCard.innerHTML = `
        <img src="${video.Thumbnail}" alt="Thumbnail">
            <div class="video-card-info">
                <h4>${video.Title}</h4>
                <span>${video.Channel}</span>
                <span>${video.Views}</span>
            </div>
            <div class="ellipsis"><img src="imgs/Icons/playback page/more-icon.png"></div>
        `;
                // Make VideoCard child of VideoList
                VideoList.appendChild(VideoCard);
            });
        })
    }

    GenerateVideoCards();
}
loadVideos()