import { NextApiHandler, NextApiRequest, NextApiResponse } from "next";
import { YoutubeStats } from "../../server/youtube";
import { apolloClient } from "../../lib/apollo";
import { gql } from "apollo-boost";

interface StatsCache {
  cachedTime: Date;
  items: Array<any>;
}

const _statsCache: StatsCache = {
  cachedTime: null,
  items: [],
};

const _query = gql`
  query {
    videos {
      nodes {
        slug
        title
        id
        acfVideoFields {
          youtubeId
          url
        }
      }
    }
  }
`;

const handler: NextApiHandler = async (
  req: NextApiRequest,
  res: NextApiResponse
) => {
  if (!_statsCache.cachedTime) {
    const result = await apolloClient.query({
      query: _query,
    });
    const videos: Array<{ acfVideoFields: { youtubeId: string } }> =
      result.data.videos.nodes;
    const ids = videos.map((video) => video.acfVideoFields.youtubeId);
    console.log(ids);
    const stats = await YoutubeStats(ids);
    _statsCache.items = stats;
    _statsCache.cachedTime = new Date();
  }

  res.json(_statsCache.items);
};

export default handler;
