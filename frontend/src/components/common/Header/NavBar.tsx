/**
 * @copyright 2025 mohamed boukhari
 * @license Apache-2.0
 * @description Nav-Bar components for the Header
 */

// node_modules
import Link from "next/link";

// icon
import { GrTechnology } from "react-icons/gr";

const NavBar = () => {
    return (
         <nav className="navBar" >
        <div>
          <Link className="logo" href="/">
            <span>CLOUD</span>
            <GrTechnology />
            <span>HOSTING</span>
          </Link>
        </div>
        <ul className="navLinks">
          <Link className="navLink" href="/">
            Home
          </Link>
          <Link className="navLink" href="/about">
            About
          </Link>
          <Link className="navLink" href="/articles">
            Article
          </Link>
          <Link className="navLink" href="/admin">
            Admin Dashboard
          </Link>
        </ul>
      </nav>
    );
}

export default NavBar;
