import { Videos, fetchVideo } from './../fetchVideo.js';

async function fetchDatas() {
    await fetchVideo();
    const urlParams = new URLSearchParams(window.location.search);
    const searchQuery = urlParams.get('q');
    const Recieve = decodeURIComponent(searchQuery);
    const searchedList = document.querySelector('.searched-list')

    const Result = Videos.filter(video => {
        return video.Title.toLowerCase().includes(Recieve) ||
            video.Channel.toLowerCase().includes(Recieve) ||
            video.Category.toLowerCase().includes(Recieve)
    })

    Result.forEach(video => {
        const VideoCard = document.createElement("div");
        VideoCard.classList.add("searched-video");

        VideoCard.innerHTML = `
        <img src="${video.Thumbnail}" alt="Thumbnail">
            <div class="searched-video-info">
                <h4>${video.Title}</h4>
                <span>${video.Channel}</span>
                <span>${video.Views}</span>
            </div>
            <div class="ellipsis"><img src="imgs/Icons/playback page/more-icon.png"></div>
        `;
        searchedList.appendChild(VideoCard);
    })   
}

fetchDatas();