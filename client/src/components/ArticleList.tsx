import ArticleCard from "./ArticleCard";

type Props = {
  articles: Article[];
};
function ArticleList({ articles }: Props) {
  return (
    <div className="divide-y-2 divide-gray-200 dark:divide-gray-700">
      {articles.map((article: Article) => (
        <ArticleCard article={article} key={article.id} />
      ))}
    </div>
  );
}

export default ArticleList;
