import { youtube_v3 } from "googleapis";

const youtube = new youtube_v3.Youtube({
  auth: process.env.YOUTUBE_APIKEY,
});

export const YoutubeStats = async (id: Array<string>) => {
  try {
    const result = await youtube.videos.list({
      part: ["statistics", "snippet"],
      id,
    });
    return result.data.items;
  } catch (e) {
    console.error(e);
  }
};
