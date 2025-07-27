/**
 * @copyright 2025 mohamed boukhari
 * @license Apache-2.0
 * @description Header components for the app
 */

// node_modules
import Link from "next/link";

// components
import NavBar from "./NavBar";

// style
import "./header.css";

const Header = () => {
  return (
    <header className="header">
      {/* Nav-Bar components */}
      <NavBar />

      <div className="right">
        <Link className="btn" href="/login">
          login
        </Link>
        <Link className="btn" href="/register">
          register
        </Link>
      </div>
    </header>
  );
};

export default Header;
