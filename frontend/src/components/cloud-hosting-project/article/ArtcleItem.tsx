/**
 * @copyright 2025 mohamed boukhari
 * @license Apache-2.0
 * @description article component for the article page
 */

// node_modules
import Link from "next/link";

// type
import { Article } from "@/types/type.type";

interface ArticleItemProps {
  item: Article;
}

const ArticleItem: React.FC<ArticleItemProps> = ({ item }) => {
  return (
    <div
      className=" rounded-lg my-1 shadow-lg border-2 w-full border-gray-400 hover:bg-slate-200 lg:w-1/4 md:w-2/5"
      style={{ padding: "10px", margin: "10px" }}
      key={item.id}
    >
      <h3 className="text-xl font-bold text-gray-900">{item.title}</h3>
      <p className="my-2 text-xl text-gray-700 p-1 line-clamp-3">{item.body}</p>
      <Link
        className="text-xl bg-purple-700 hover:bg-purple-800 w-full block text-center p-1 text-white rounded-lg"
        style={{ padding: "4px", marginTop: "4px" }}
        href={`/articles/${item.id}`}
      >
        Read more
      </Link>
    </div>
  );
};

export default ArticleItem;
