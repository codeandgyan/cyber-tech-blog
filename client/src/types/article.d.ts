interface Article {
  id: string;
  headline: string;
  summary: string;
  content?: string;
  imageUrl?: string;
  author?: string;
  publishedAt?: string;
  tags?: string[];
}
