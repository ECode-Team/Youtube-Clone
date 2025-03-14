export let Videos = [];

export async function fetchVideo() {
    try {
        const response = await fetch('https://ecopy369.pythonanywhere.com/api/video/')
        if (!response.ok) {
            throw new Error(`Failed to fetch video error: ${response.status}`)
        }
        const data = await response.json();

        Videos = [
            {
                Thumbnail: data[0].thumbnail,
                Title: data[0].title,
                Channel: data[0].uploaded_by.title,
                Views: `${data[0].views} &#183; 6 months ago`,
                link: data[0].video_url,
            },
            {
                Thumbnail: data[1].thumbnail,
                Title: data[1].title,
                Channel: data[1].uploaded_by.title,
                Views: `${data[1].views} &#183; 2 months ago`,
                link: data[1].video_url,
            },
            {
                Thumbnail: data[2].thumbnail,
                Title: data[2].title,
                Channel: data[2].uploaded_by.title,
                Views: `${data[2].views} &#183; 9 months ago`,
                link: data[2].video_url,
            },
            {
                Thumbnail: data[3].thumbnail,
                Title: data[3].title,
                Channel: data[3].uploaded_by.title,
                Views: `${data[3].views} &#183; 11 months ago`,
                link: data[3].video_url,
            },
            {
                Thumbnail: data[4].thumbnail,
                Title: data[4].title,
                Channel: data[4].uploaded_by.title,
                Views: `${data[4].views} &#183; 1 year ago`,
                link: data[4].video_url,
            },
            {
                Thumbnail: data[5].thumbnail,
                Title: data[5].title,
                Channel: data[5].uploaded_by.title,
                Views: `${data[5].views} &#183; 3 years ago`,
                link: data[5].video_url,
            },
            {
                Thumbnail: data[6].thumbnail,
                Title: data[6].title,
                Channel: data[6].uploaded_by.title,
                Views: `${data[6].views} &#183; 2 months ago`,
                link: data[6].video_url,
            },
            {
                Thumbnail: data[7].thumbnail,
                Title: data[7].title,
                Channel: data[7].uploaded_by.title,
                Views: `${data[7].views} &#183; 1 years ago`,
                link: data[7].video_url,
            },
            {
                Thumbnail: data[8].thumbnail,
                Title: data[8].title,
                Channel: data[8].uploaded_by.title,
                Views: `${data[8].views} &#183; 5 months ago`,
                link: data[8].video_url,
            },
            {
                Thumbnail: data[9].thumbnail,
                Title: data[9].title,
                Channel: data[9].uploaded_by.title,
                Views: `${data[9].views} &#183; 3 years ago`,
                link: data[9].video_url,
            },
            {
                Thumbnail: data[10].thumbnail,
                Title: data[10].title,
                Channel: data[10].uploaded_by.title,
                Views: `${data[10].views} &#183; 6 months ago`,
                link: data[10].video_url,
            },
            {
                Thumbnail: data[11].thumbnail,
                Title: data[11].title,
                Channel: data[11].uploaded_by.title,
                Views: `${data[11].views} &#183; 6 months ago`,
                link: data[11].video_url,
            },
            {
                Thumbnail: data[12].thumbnail,
                Title: data[12].title,
                Channel: data[12].uploaded_by.title,
                Views: `${data[12].views} &#183; 6 months ago`,
                link: data[12].video_url,
            },
            {
                Thumbnail: data[13].thumbnail,
                Title: data[13].title,
                Channel: data[13].uploaded_by.title,
                Views: `${data[13].views} &#183; 6 months ago`,
                link: data[13].video_url,
            },
            {
                Thumbnail: data[14].thumbnail,
                Title: data[14].title,
                Channel: data[14].uploaded_by.title,
                Views: `${data[14].views} &#183; 1 years ago`,
                link: data[14].video_url,
            },
            {
                Thumbnail: data[15].thumbnail,
                Title: data[15].title,
                Channel: data[15].uploaded_by.title,
                Views: `${data[15].views} &#183; 1 years ago`,
                link: data[15].video_url,
            },
            {
                Thumbnail: data[16].thumbnail,
                Title: data[16].title,
                Channel: data[16].uploaded_by.title,
                Views: `${data[16].views} &#183; 1 years ago`,
                link: data[16].video_url,
            },
            {
                Thumbnail: data[17].thumbnail,
                Title: data[17].title,
                Channel: data[17].uploaded_by.title,
                Views: `${data[17].views} &#183; 1 years ago`,
                link: data[17].video_url,
            },
            {
                Thumbnail: data[18].thumbnail,
                Title: data[18].title,
                Channel: data[18].uploaded_by.title,
                Views: `${data[18].views} &#183; 1 years ago`,
                link: data[18].video_url,
            },
            {
                Thumbnail: data[19].thumbnail,
                Title: data[19].title,
                Channel: data[19].uploaded_by.title,
                Views: `${data[19].views} &#183; 1 years ago`,
                link: data[19].video_url,
            },
            {
                Thumbnail: data[20].thumbnail,
                Title: data[20].title,
                Channel: data[20].uploaded_by.title,
                Views: `${data[20].views} &#183; 1 years ago`,
                link: data[20].video_url,
            },
            {
                Thumbnail: data[21].thumbnail,
                Title: data[21].title,
                Channel: data[21].uploaded_by.title,
                Views: `${data[21].views} &#183; 1 years ago`,
                link: data[21].video_url,
            },
        ];
    }
    catch (error) {
        console.error("error fetching videos", error);
    }
}

fetchVideo();
