import { Videos, fetchVideo } from '../fetchVideo.js';

async function fetchDatas() {
    await fetchVideo();
    const urlParams = new URLSearchParams(window.location.search);
    const videoID = urlParams.get('video');
    
    const Result = Videos.filter(video => {
        return String(video.ID).includes(videoID);
    })
    
    // iframe
    document.querySelector(".videoFrame").src = Result[0].link;
    // title
    document.querySelector(".video-info-title").textContent = Result[0].Title;
    // channel picture
    document.querySelector(".channel-picture").src = Result[0].channelPicture;
    // channel name
    document.querySelector(".channel-name").textContent = Result[0].Channel;
    // likes
    document.querySelector(".count-text").textContent = Result[0].Likes;
    // share link
    document.querySelector(".share-link").textContent = Result[0].link;
    // views
    document.querySelector(".views").textContent = Result[0].Views;
    // description
    document.querySelector(".for-show-one").textContent = Result[0].Description;
}
fetchDatas();