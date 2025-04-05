import { Shorts, fetchShorts } from '../fetchShort.js';

async function fetchDatas() {
    await fetchShorts();
    const urlParams = new URLSearchParams(window.location.search);
    const videoID = urlParams.get('short');
    
    const Result = Shorts.filter(video => {
        return String(video.ID).includes(videoID);
    })
    console.log(Result);
    
    
    // iframe
    document.querySelector(".shortFrame").src = Result[0].link;
    // title
    document.querySelector(".title-dwon").textContent = Result[0].Title;
    // channel picture
    document.querySelector(".channel-picture-short").src = Result[0].ChannelPicture;
    // channel name
    document.querySelector(".channel-name-short").textContent = Result[0].Channel;
    // likes
    document.querySelector(".count-text").textContent = Result[0].Likes;
    // views
    document.querySelector(".views").textContent = Result[0].Views;
}
fetchDatas();