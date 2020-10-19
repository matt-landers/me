interface VideoListProps {
  items: Array<{
    id: string;
    snippet: {
      thumbnails: { [key: string]: { url: string } };
      title: string;
      description: string;
    };
  }>;
}

export default (props: VideoListProps) => (
  <div className="video-list">
    {props.items.map((item) => (
      <article>
        <img src={item.snippet.thumbnails.standard.url} alt="" />
        <h2>
          <a
            href={`https://www.youtube.com/watch?v=${item.id}`}
            target="_blank"
          >
            {item.snippet.title}
          </a>
        </h2>
      </article>
    ))}
  </div>
);
