import hero from "../assets/hero1.jpg";
type Props = {
  article: Article;
};
function ArticleCard({ article }: Props) {
  return (
    <section
      key={article.id}
      className="group flex flex-col-reverse sm:flex-row w-full space-x-4 px-2 py-4 relative overflow-hidden cursor-pointer"
    >
      <div className="sm:w-1/3 sm:space-y-4">
        <img
          src={article.imageUrl || hero}
          alt={article.headline}
          className={`w-full object-contain rounded-lg 
            group-hover:opacity-60 group-hover:shadow-lg group-hover:shadow-gray-600 dark:group-hover:shadow-blue-400
            group-active:opacity-60 group-active:shadow-lg group-active:shadow-gray-600 dark:group-active:shadow-blue-400
            transition-all duration-300 ease-in-out
            `}
        />
        <div>
          <h3 className="text-sm font-bold">{`By ${article.author}`}</h3>
          <div className="flex space-x-1 lg:space-x-3 text-sm font-medium opacity-50">
            <h5 className="">{`3 hours ago`}</h5>
            <h5 className="">|</h5>
            <h5 className="">{`3 min read`}</h5>
          </div>
        </div>
      </div>
      <div className="sm:w-2/3 space-y-4 pb-4 group:hover:opacity-80">
        <h2
          className={`text-2xl font-bold 
          group-hover:text-gray-600 dark:group-hover:text-blue-400 group-hover:underline
          group-active:text-gray-600 dark:group-active:text-blue-400 group-active:underline
          `}
        >
          {article.headline}
        </h2>
        <p
          className={`text-gray-700 dark:text-gray-300 
          group-hover:text-gray-600 dark:group-hover:text-blue-400 group-hover:underline
          group-active:text-gray-600 dark:group-active:text-blue-400 group-active:underline`}
        >
          {article.summary}
        </p>
      </div>
    </section>
  );
}

export default ArticleCard;
