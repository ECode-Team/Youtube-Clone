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
                ID: data[0].id,
                Likes: data[0].count_like,
                Description: data[0].description,
                Thumbnail: data[0].thumbnail,
                Title: data[0].title,
                Channel: data[0].uploaded_by.title,
                channelPicture : data[0].uploaded_by.profile_picture,
                Views: `${data[0].views} views`,
                link: data[0].video_url,
                Category: data[0].category
            },
            {
                ID: data[1].id,
                Likes: data[1].count_like,
                Description: data[1].description,
                Thumbnail: data[1].thumbnail,
                Title: data[1].title,
                Channel: data[1].uploaded_by.title,
                channelPicture : data[1].uploaded_by.profile_picture,
                Views: `${data[1].views} views`,
                link: data[1].video_url,
                Category: data[1].category
            },
            {
                ID: data[2].id,
                Likes: data[2].count_like,
                Description: data[2].description,
                Thumbnail: data[2].thumbnail,
                Title: data[2].title,
                Channel: data[2].uploaded_by.title,
                channelPicture : data[2].uploaded_by.profile_picture,
                Views: `${data[2].views} views`,
                link: data[2].video_url,
                Category: data[2].category
            },
            {
                ID: data[3].id,
                Likes: data[3].count_like,
                Description: data[3].description,
                Thumbnail: data[3].thumbnail,
                Title: data[3].title,
                Channel: data[3].uploaded_by.title,
                channelPicture : data[3].uploaded_by.profile_picture,
                Views: `${data[3].views} views`,
                link: data[3].video_url,
                Category: data[3].category
            },
            {
                ID: data[4].id,
                Likes: data[4].count_like,
                Description: data[4].description,
                Thumbnail: data[4].thumbnail,
                Title: data[4].title,
                Channel: data[4].uploaded_by.title,
                channelPicture : data[4].uploaded_by.profile_picture,
                Views: `${data[4].views} views`,
                link: data[4].video_url,
                Category: data[4].category
            },
            {
                ID: data[5].id,
                Likes: data[5].count_like,
                Description: data[5].description,
                Thumbnail: data[5].thumbnail,
                Title: data[5].title,
                Channel: data[5].uploaded_by.title,
                channelPicture : data[5].uploaded_by.profile_picture,
                Views: `${data[5].views} views`,
                link: data[5].video_url,
                Category: data[5].category
            },
            {
                ID: data[6].id,
                Likes: data[6].count_like,
                Description: data[6].description,
                Thumbnail: data[6].thumbnail,
                Title: data[6].title,
                Channel: data[6].uploaded_by.title,
                channelPicture : data[6].uploaded_by.profile_picture,
                Views: `${data[6].views} views`,
                link: data[6].video_url,
                Category: data[6].category
            },
            {
                ID: data[7].id,
                Likes: data[7].count_like,
                Description: data[7].description,
                Thumbnail: data[7].thumbnail,
                Title: data[7].title,
                Channel: data[7].uploaded_by.title,
                channelPicture : data[7].uploaded_by.profile_picture,
                Views: `${data[7].views} views`,
                link: data[7].video_url,
                Category: data[7].category
            },
            {
                ID: data[8].id,
                Likes: data[8].count_like,
                Description: data[8].description,
                Thumbnail: data[8].thumbnail,
                Title: data[8].title,
                Channel: data[8].uploaded_by.title,
                channelPicture : data[8].uploaded_by.profile_picture,
                Views: `${data[8].views} views`,
                link: data[8].video_url,
                Category: data[8].category
            },
            {
                ID: data[9].id,
                Likes: data[9].count_like,
                Description: data[9].description,
                Thumbnail: data[9].thumbnail,
                Title: data[9].title,
                Channel: data[9].uploaded_by.title,
                channelPicture : data[9].uploaded_by.profile_picture,
                Views: `${data[9].views} views`,
                link: data[9].video_url,
                Category: data[9].category
            },
            {
                ID: data[10].id,
                Likes: data[10].count_like,
                Description: data[10].description,
                Thumbnail: data[10].thumbnail,
                Title: data[10].title,
                Channel: data[10].uploaded_by.title,
                channelPicture : data[10].uploaded_by.profile_picture,
                Views: `${data[10].views} views`,
                link: data[10].video_url,
                Category: data[10].category
            },
            {
                ID: data[11].id,
                Likes: data[11].count_like,
                Description: data[11].description,
                Thumbnail: data[11].thumbnail,
                Title: data[11].title,
                Channel: data[11].uploaded_by.title,
                channelPicture : data[11].uploaded_by.profile_picture,
                Views: `${data[11].views} views`,
                link: data[11].video_url,
                Category: data[11].category
            },
            {
                ID: data[12].id,
                Likes: data[12].count_like,
                Description: data[12].description,
                Thumbnail: data[12].thumbnail,
                Title: data[12].title,
                Channel: data[12].uploaded_by.title,
                channelPicture : data[12].uploaded_by.profile_picture,
                Views: `${data[12].views} views`,
                link: data[12].video_url,
                Category: data[12].category
            },
            {
                ID: data[13].id,
                Likes: data[13].count_like,
                Description: data[13].description,
                Thumbnail: data[13].thumbnail,
                Title: data[13].title,
                Channel: data[13].uploaded_by.title,
                channelPicture : data[13].uploaded_by.profile_picture,
                Views: `${data[13].views} views`,
                link: data[13].video_url,
                Category: data[13].category
            },
            {
                ID: data[14].id,
                Likes: data[14].count_like,
                Description: data[14].description,
                Thumbnail: data[14].thumbnail,
                Title: data[14].title,
                Channel: data[14].uploaded_by.title,
                channelPicture : data[14].uploaded_by.profile_picture,
                Views: `${data[14].views} views`,
                link: data[14].video_url,
                Category: data[14].category
            },
            {
                ID: data[15].id,
                Likes: data[15].count_like,
                Description: data[15].description,
                Thumbnail: data[15].thumbnail,
                Title: data[15].title,
                Channel: data[15].uploaded_by.title,
                channelPicture : data[15].uploaded_by.profile_picture,
                Views: `${data[15].views} views`,
                link: data[15].video_url,
                Category: data[15].category
            },
            {
                ID: data[16].id,
                Likes: data[16].count_like,
                Description: data[16].description,
                Thumbnail: data[16].thumbnail,
                Title: data[16].title,
                Channel: data[16].uploaded_by.title,
                channelPicture : data[16].uploaded_by.profile_picture,
                Views: `${data[16].views} views`,
                link: data[16].video_url,
                Category: data[16].category
            },
            {
                ID: data[17].id,
                Likes: data[17].count_like,
                Description: data[17].description,
                Thumbnail: data[17].thumbnail,
                Title: data[17].title,
                Channel: data[17].uploaded_by.title,
                channelPicture : data[17].uploaded_by.profile_picture,
                Views: `${data[17].views} views`,
                link: data[17].video_url,
                Category: data[17].category
            },
            {
                ID: data[18].id,
                Likes: data[18].count_like,
                Description: data[18].description,
                Thumbnail: data[18].thumbnail,
                Title: data[18].title,
                Channel: data[18].uploaded_by.title,
                channelPicture : data[18].uploaded_by.profile_picture,
                Views: `${data[18].views} views`,
                link: data[18].video_url,
                Category: data[18].category
            },
            {
                ID: data[19].id,
                Likes: data[19].count_like,
                Description: data[19].description,
                Thumbnail: data[19].thumbnail,
                Title: data[19].title,
                Channel: data[19].uploaded_by.title,
                channelPicture : data[19].uploaded_by.profile_picture,
                Views: `${data[19].views} views`,
                link: data[19].video_url,
                Category: data[19].category
            },
            {
                ID: data[20].id,
                Likes: data[20].count_like,
                Description: data[20].description,
                Thumbnail: data[20].thumbnail,
                Title: data[20].title,
                Channel: data[20].uploaded_by.title,
                channelPicture : data[20].uploaded_by.profile_picture,
                Views: `${data[20].views} views`,
                link: data[20].video_url,
                Category: data[20].category
            },
            {
                ID: data[21].id,
                Likes: data[21].count_like,
                Description: data[21].description,
                Thumbnail: data[21].thumbnail,
                Title: data[21].title,
                Channel: data[21].uploaded_by.title,
                channelPicture : data[21].uploaded_by.profile_picture,
                Views: `${data[21].views} views`,
                link: data[21].video_url,
                Category: data[21].category
            },
            {
                ID: data[22].id,
                Likes: data[22].count_like,
                Description: data[22].description,
                Thumbnail: data[22].thumbnail,
                Title: data[22].title,
                Channel: data[22].uploaded_by.title,
                channelPicture : data[22].uploaded_by.profile_picture,
                Views: `${data[22].views} views`,
                link: data[22].video_url,
                Category: data[22].category
            },
            {
                ID: data[23].id,
                Likes: data[23].count_like,
                Description: data[23].description,
                Thumbnail: data[23].thumbnail,
                Title: data[23].title,
                Channel: data[23].uploaded_by.title,
                channelPicture : data[23].uploaded_by.profile_picture,
                Views: `${data[23].views} views`,
                link: data[23].video_url,
                Category: data[23].category
            },
            {
                ID: data[24].id,
                Likes: data[24].count_like,
                Description: data[24].description,
                Thumbnail: data[24].thumbnail,
                Title: data[24].title,
                Channel: data[24].uploaded_by.title,
                channelPicture : data[24].uploaded_by.profile_picture,
                Views: `${data[24].views} views`,
                link: data[24].video_url,
                Category: data[24].category
            },
            {
                ID: data[25].id,
                Likes: data[25].count_like,
                Description: data[25].description,
                Thumbnail: data[25].thumbnail,
                Title: data[25].title,
                Channel: data[25].uploaded_by.title,
                channelPicture : data[25].uploaded_by.profile_picture,
                Views: `${data[25].views} views`,
                link: data[25].video_url,
                Category: data[25].category
            },
            {
                ID: data[26].id,
                Likes: data[26].count_like,
                Description: data[26].description,
                Thumbnail: data[26].thumbnail,
                Title: data[26].title,
                Channel: data[26].uploaded_by.title,
                channelPicture : data[26].uploaded_by.profile_picture,
                Views: `${data[26].views} views`,
                link: data[26].video_url,
                Category: data[26].category
            },
            {
                ID: data[27].id,
                Likes: data[27].count_like,
                Description: data[27].description,
                Thumbnail: data[27].thumbnail,
                Title: data[27].title,
                Channel: data[27].uploaded_by.title,
                channelPicture : data[27].uploaded_by.profile_picture,
                Views: `${data[27].views} views`,
                link: data[27].video_url,
                Category: data[27].category
            },
            {
                ID: data[28].id,
                Likes: data[28].count_like,
                Description: data[28].description,
                Thumbnail: data[28].thumbnail,
                Title: data[28].title,
                Channel: data[28].uploaded_by.title,
                channelPicture : data[28].uploaded_by.profile_picture,
                Views: `${data[28].views} views`,
                link: data[28].video_url,
                Category: data[28].category
            },
            {
                ID: data[29].id,
                Likes: data[29].count_like,
                Description: data[29].description,
                Thumbnail: data[29].thumbnail,
                Title: data[29].title,
                Channel: data[29].uploaded_by.title,
                channelPicture : data[29].uploaded_by.profile_picture,
                Views: `${data[29].views} views`,
                link: data[29].video_url,
                Category: data[29].category
            },
            {
                ID: data[30].id,
                Likes: data[30].count_like,
                Description: data[30].description,
                Thumbnail: data[30].thumbnail,
                Title: data[30].title,
                Channel: data[30].uploaded_by.title,
                channelPicture : data[30].uploaded_by.profile_picture,
                Views: `${data[30].views} views`,
                link: data[30].video_url,
                Category: data[30].category
            },
            {
                ID: data[31].id,
                Likes: data[31].count_like,
                Description: data[31].description,
                Thumbnail: data[31].thumbnail,
                Title: data[31].title,
                Channel: data[31].uploaded_by.title,
                channelPicture : data[31].uploaded_by.profile_picture,
                Views: `${data[31].views} views`,
                link: data[31].video_url,
                Category: data[31].category
            },
            {
                ID: data[32].id,
                Likes: data[32].count_like,
                Description: data[32].description,
                Thumbnail: data[32].thumbnail,
                Title: data[32].title,
                Channel: data[32].uploaded_by.title,
                channelPicture : data[32].uploaded_by.profile_picture,
                Views: `${data[32].views} views`,
                link: data[32].video_url,
                Category: data[32].category
            },
            {
                ID: data[33].id,
                Likes: data[33].count_like,
                Description: data[33].description,
                Thumbnail: data[33].thumbnail,
                Title: data[33].title,
                Channel: data[33].uploaded_by.title,
                channelPicture : data[33].uploaded_by.profile_picture,
                Views: `${data[33].views} views`,
                link: data[33].video_url,
                Category: data[33].category
            },
            {
                ID: data[34].id,
                Likes: data[34].count_like,
                Description: data[34].description,
                Thumbnail: data[34].thumbnail,
                Title: data[34].title,
                Channel: data[34].uploaded_by.title,
                channelPicture : data[34].uploaded_by.profile_picture,
                Views: `${data[34].views} views`,
                link: data[34].video_url,
                Category: data[34].category
            },
            {
                ID: data[35].id,
                Likes: data[35].count_like,
                Description: data[35].description,
                Thumbnail: data[35].thumbnail,
                Title: data[35].title,
                Channel: data[35].uploaded_by.title,
                channelPicture : data[35].uploaded_by.profile_picture,
                Views: `${data[35].views} views`,
                link: data[35].video_url,
                Category: data[35].category
            }
        ];
    }
    catch (error) {
        console.error("error fetching videos", error);
    }
}

fetchVideo();