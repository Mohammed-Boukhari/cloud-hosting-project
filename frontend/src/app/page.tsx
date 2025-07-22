/**
 * @copyright 2025 mohamed boukhari
 * @license Apache-2.0
 * @description home page for the app
 */
// node_modules
import Link from "next/link";

const Home = () => {
  return (
    <div>
      <h1>home page</h1>
      <div>
        <Link href="/admin"> Go to admin page </Link>
        <Link href="/about"> Go to aboust page </Link>
        <Link href="/articles"> Go to article page </Link>
        <Link href="/articles/search"> Go to search page </Link>
        <Link href="/login"> Go to login page </Link>
        <Link href="/register"> Go to register page </Link>
      </div>
    </div>
  );
};

export default Home;
