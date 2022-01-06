function NewsItem({ news }) {
  return (
    <div
      onClick={() => {
        window.open(news.url);
      }}
      className="w-3/4 m-auto text-center cursor-pointer my-10"
    >
      <img className="w-2/3 m-auto" src={news.urlToImage} />
      <h1 className="w-2/3 m-auto my-3 text-2xl text-center">{news.title}</h1>
      <p className="mt-1 w-2/4 m-auto">{news.description}</p>
      <label className="text-gray-400">
        {news.publishedAt} {news.author ? "via " + news.author : ""}
      </label>
    </div>
  );
}

export default NewsItem;
