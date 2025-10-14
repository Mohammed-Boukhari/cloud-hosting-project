/**
 * @copyright 2025 mohamed boukhari
 * @license Apache-2.0
 * @description search page for the articles
 */

// types
interface SearchArticlePageProps {
  searchParams: {
    searchText: string;
  };
}

const SearchArticlePage = (props: SearchArticlePageProps) => {
  return (
    <section className="fix-height container m-auto px-5">
      <h1 className="text-2xl font-bold">
        search page for: {props.searchParams.searchText}
      </h1>
    </section>
  );
};

export default SearchArticlePage;
