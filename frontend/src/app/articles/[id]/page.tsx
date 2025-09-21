/**
 * @copyright 2025 mohamed boukhari
 * @license Apache-2.0
 * @description Single article page component for the articles section
 */

// utils
import { URL } from "@/utils/URL";

// components
import { type Article } from "@/types/type.type";

// types
import AddCommentForm from "@/components/comments/AddCommentForm";
import CommentItem from "@/components/comments/CommentItem";
interface SingleArticlePageProps {
  params: { id: string };
}

const SingleArticlePage = async ({ params }: SingleArticlePageProps) => {
  // Fetching a single article based on the ID from the URL parameters

  const response: Response = await fetch(`${URL}/${params.id}`);
  if (!response.ok) {
    throw new Error("Failed to fetch articles");
  }
  const article: Article = await response.json();

  return (
    <section
      // style={{ paddingTop: `32px`, paddingInline: `20px` }}
      className=" fix-height container m-auto w-full px-5 pt-8 md:w-3/4 "
    >
      <div
        style={{ padding: `28px`, marginBottom: `28px` }}
        className="bg-white p-7 rounded-lg"
      >
        <h1
          style={{ marginBottom: `14px`, textTransform: `capitalize` }}
          className="text-3xl font-bold text-gray-700 "
        >
          {article.title}
        </h1>
        <div className="text-sm text-gray-400">1/1/2025</div>
        <p
          style={{ marginTop: `20px` }}
          className="text-gray-800 text-xl mt-5 !important"
        >
          {article.body}
        </p>
      </div>
      {/* AddCommentForm */}
      <AddCommentForm />
      {/*=== AddCommentForm ===*/}

      <h4 className="text-xl text-gray-800 ps-1 font-semibold mb-2 mt-7">
        Comments
      </h4>

      {/* CommentItem */}
      <CommentItem />
      {/*=== CommentItem ===*/}
      {/* CommentItem */}
      <CommentItem />
      {/*=== CommentItem ===*/}
      {/* CommentItem */}
      <CommentItem />
      {/*=== CommentItem ===*/}
    </section>
  );
};

export default SingleArticlePage;
