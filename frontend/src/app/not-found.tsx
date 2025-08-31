/**
 * @copyright 2025 mohamed boukhari
 * @license Apache-2.0
 * @description not found page for the application
 */

// node_modules
import Link from "next/link";

const NotFound = () => {
  return (
    <section className="fix-height flex justify-center items-center flex-col">
      <h1 className="text-7xl text-gray-800 font-bold">404</h1>
      <p
        style={{ marginTop: "8px", marginBottom: "20px" }}
        className="text-gray-500 text-3xl "
      >
        Page Not Found
      </p>
      <Link className="text-xl underline text-blue-700 !important" href={"/"}>
        Go to Home page
      </Link>
    </section>
  );
};

export default NotFound;
