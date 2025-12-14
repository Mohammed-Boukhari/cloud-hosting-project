/**
 * @copyright 2025 mohamed boukhari
 * @license Apache-2.0
 * @description articles page for the app
 */

// components
import ArticleItem from "@/components/cloud-hosting-project/article/ArticleItem";
import SearchArticleInput from "@/components/cloud-hosting-project/article/SearchArticleInput";
import Pagination from "@/components/cloud-hosting-project/article/Pagination";

// utils
import { URL } from "@/utils/URL";

// type
import type { Metadata } from "next";
import { Article } from "@/types/article.type";

// element for [ hade ]
export const metadata: Metadata = {
  title: "Articles Page  ",
  description: "Articles about programming",
};

const Articlespage = async () => {
  // Fetching articles from a public API
  const response: Response = await fetch(URL);
  if (!response.ok) {
    throw new Error("Failed to fetch articles");
  }
  const articles: Article[] = await response.json();

  return (
    <section
      style={{ margin: " auto !important" }}
      className=" container m-auto px-5"
    >
      {/* Search Article Input */}
      <SearchArticleInput />
      {/*=== Search Article Input ===*/}

      <div className=" flex items-center justify-center flex-wrap gap-7">
        {articles.slice(0, 6).map((item) => (
          <ArticleItem key={item.id} item={item} />
        ))}
      </div>
      {/*=== Pagination ===*/}
      <Pagination />
      {/*=== Pagination ===*/}
    </section>
  );
};

export default Articlespage;
