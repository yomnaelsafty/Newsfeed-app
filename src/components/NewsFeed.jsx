import NewsArticle from "./NewsArticle";
import Typography from "@mui/material/Typography";
import LoadingArticles from "./LoadingArticles";

function NewsFeed(props) {
  const { articles, loading } = props;

  if (!loading && !articles.length) {
    return (
      <Typography
        align="center"
        variant="h6"
        color="textSecondary"
        sx={{ marginTop: 4 }}
      >
        No articles found.
      </Typography>
    );
  }

  return (
    <div>
      {loading &&
        [...Array(5)].map((_, index) => <LoadingArticles key={index} />)}
      {!loading &&
        articles.map((article) => (
          <NewsArticle key={JSON.stringify(article)} {...article} />
        ))}
    </div>
  );
}

export default NewsFeed;
