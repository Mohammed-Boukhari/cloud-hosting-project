/**
 * @copyright 2025 mohamed boukhari
 * @license Apache-2.0
 * @description Skeleton component for the articles page
 */

// skeleton arr for articles
const articlesSkeleton: number[] = [1, 2, 3, 4, 5, 6];

const loading = () => {
  return (
    <section className=" fix-height container m-auto px-5 animate-pulse">
      <div className="my-5 w-full md:w-2/2 m-auto bg-gray-300 h-12 rounded"></div>
      <div className=" flex items-center justify-center flex-wrap gap-7">
        {articlesSkeleton.map((item) => (
          <div
            key={item}
            className=" rounded-lg my-1 bg-gray-300 w-full  lg:w-1/4 md:w-2/5"
            style={{ padding: "10px", margin: "10px" }}
          >
            <h3 className="bg-gray-300 h-6"></h3>
            <p className="my-2 text-xl bg-gray-300 p-1 h-10"></p>
            <div
              className="w-full block  p-1 bg-gray-400 rounded-lg h-8"
              style={{ padding: "4px", marginTop: "4px" }}
            ></div>
          </div>
        ))}
      </div>

      <div className="flex items-center justify-center mt-2 mb-10">
        <div className="bg-gray-300 w-60 rounded-sm h-9"></div>
      </div>
    </section>
  );
};

export default loading;
