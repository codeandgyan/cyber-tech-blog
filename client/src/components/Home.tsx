import ArticleList from "./ArticleList";

const articles = [
  {
    id: "abc123",
    headline: "How do hackers steal your passwords?",
    summary:
      "Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas.",
    author: "John Doe",
  },
  {
    id: "def456",
    headline:
      "Lorem ipsum dolor sit amet consectetur adipiscing elit quisque faucibus ex sapien?",
    summary:
      "Dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Lorum ipsum dolor.",
    author: "Jane Doe",
  },
  {
    id: "ghi789",
    headline:
      "Pellentesque sem placerat in id cursus mi pretium tellus duis convallis tempus leo eu aenean sed diam?",
    summary:
      "Dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Lorum ipsum dolor.",
    author: "Robin Smith",
  },
];
function Home() {
  return (
    <div className="w-full flex flex-row">
      <div className="w-full lg:w-3/4">
        <ArticleList articles={articles} />
      </div>
      <div className="hidden lg:block w-1/4 ml-4 mt-4 px-2 border-l-2 border-gray-200 dark:border-gray-700"></div>
    </div>
  );
}

export default Home;
