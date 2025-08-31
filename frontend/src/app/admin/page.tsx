/**
 * @copyright 2025 mohamed boukhari
 * @license Apache-2.0
 * @description admin page for the application
 */

// ui components
import AddArticleForm from "./_ui/AddArticleForm";

const Page = () => {
  return (
    <div className=" fix-height flex items-center justify-center px-5 lg:px-20">
      <div className=" shadow p-4 bg-white rounded w-full">
        <h2 className=" text-xl lg:text-2xl text-gray-700 font-semibold mb-4">
          Add New Article
        </h2>
        <AddArticleForm />
      </div>
    </div>
  );
};

export default Page;
