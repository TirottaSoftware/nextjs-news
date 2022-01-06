import axios from "axios";
import CategoryBar from "../../components/CategoryBar";
import NewsItem from "../../components/NewsItem";

function News({ news }) {
  return (
    <div className="">
      <CategoryBar />
      {news?.map((n) => {
        return <NewsItem key={n.publishedAt} news={n} />;
      })}
    </div>
  );
}

export default News;

export async function getServerSideProps({ query }) {
  // business entertainment general health science sports technology

  const category = query.category;

  const news = await axios
    .get(
      `https://newsapi.org/v2/top-headlines?country=us&category=${
        category ?? "general"
      }&apiKey=${process.env.API_KEY}`
    )
    .then((res) => {
      return res.data.articles;
    });

  return {
    props: {
      news: news.map((n) => ({
        id: n.source.id,
        title: n.title,
        author: n.author,
        description: n.description,
        content: n.content,
        publishedAt: n.publishedAt,
        urlToImage: n.urlToImage,
        url: n.url,
      })),
    },
  };
}
