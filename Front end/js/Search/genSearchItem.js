import { Videos, fetchVideo } from './../fetchVideo.js';

async function fetchDatas() {
    await fetchVideo();
    const urlParams = new URLSearchParams(window.location.search);
    const searchQuery = urlParams.get('q');
    const Recieve = JSON.parse(decodeURIComponent(searchQuery));

    const Result = Videos.filter(video => {
        return video.Title.toLowerCase().includes(Recieve) ||
            video.Channel.toLowerCase().includes(Recieve) ||
            video.Category.toLowerCase().includes(Recieve)
    })
    console.log(Result);
}

fetchDatas();