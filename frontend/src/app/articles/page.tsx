/**
 * @copyright 2025 mohamed boukhari
 * @license Apache-2.0
 * @description articles page for the app
 */

// components
import ArtcleItem from "@/components/cloud-hosting-project/article/ArtcleItem";

// type
import { Article } from "@/types/type.type";


const Articlespage = async () => {
  
  // Fetching articles from a public API
  const response: Response = await fetch(
    "https://jsonplaceholder.typicode.com/posts"
  );
  if (!response.ok) {
    throw new Error("Failed to fetch articles");
  }
  const articles: Article[] = await response.json();

  return (
    <section
      style={{ margin: " auto !important" }}
      className=" container m-auto px-5"
    >
      <div className=" flex items-center justify-center flex-wrap gap-7">
        {articles.map((item) => (
          <ArtcleItem key={item.id} item={item} />
        ))}
      </div>
    </section>
  );
};

export default Articlespage;
