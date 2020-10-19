import styles from "./VideoList.module.scss";

interface VideoListProps {
  items: Array<{
    id: string;
    snippet: {
      thumbnails: { [key: string]: { url: string } };
      title: string;
      description: string;
    };
    statistics: {
      viewCount: string;
      likeCount: string;
    };
  }>;
}

export const VideoList = ({ items }: VideoListProps) => {
  const totalCounts = {
    likes: 0,
    views: 0,
  };
  items.forEach((item) => {
    totalCounts.views += parseInt(item.statistics.viewCount);
    totalCounts.likes += parseInt(item.statistics.likeCount);
  });

  return (
    <div className={styles.videolist}>
      <h3 className={styles.statistics}>
        <p>Engagement Statistics</p>
        <p>👀 {totalCounts.views}</p>
        <p>❤️ {totalCounts.likes}</p>
      </h3>
      {items.map((item) => (
        <article key={item.id}>
          <img src={item.snippet.thumbnails.maxres.url} alt="" />
          <div className={styles.info}>
            <h2>
              <a
                href={`https://www.youtube.com/watch?v=${item.id}`}
                target="_blank"
              >
                {item.snippet.title}
              </a>
            </h2>
            <p>👀 {item.statistics.viewCount}</p>
            <p>❤️ {item.statistics.likeCount}</p>
          </div>
        </article>
      ))}
    </div>
  );
};
