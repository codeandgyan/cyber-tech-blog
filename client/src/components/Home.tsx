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
      "How do hackers steal your passwords do hackers steal your passwords?",
    summary:
      "Dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Lorum ipsum dolor.",
    author: "John Doe",
  },
  {
    id: "ghi789",
    headline:
      "How do hackers steal your passwords do hackers steal your passwords?",
    summary:
      "Dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Lorum ipsum dolor.",
    author: "John Doe",
  },
];
function Home() {
  return (
    <div className="w-full">
      <div className="w-full lg:w-3/4">
        <ArticleList articles={articles} />
      </div>
    </div>
  );
}

export default Home;
