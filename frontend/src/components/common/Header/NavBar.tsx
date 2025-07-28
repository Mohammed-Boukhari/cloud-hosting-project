/**
 * @copyright 2025 mohamed boukhari
 * @license Apache-2.0
 * @description Nav-Bar components for the Header
 */

/* client component */
"use client";

// node_modules
import Link from "next/link";
import { useState } from "react";

// icon
import { GrTechnology } from "react-icons/gr";
import { AiOutlineMenu } from "react-icons/ai";
import { IoMdClose } from "react-icons/io";

const NavBar = () => {
  const [toggle, setToggle] = useState<boolean>(false);

  return (
    <nav className="navBar">
      <div>
        <Link className="logo" href="/">
          <span>CLOUD</span>
          <GrTechnology />
          <span>HOSTING</span>
        </Link>
        <div className="menu">
          {toggle ? (
            <IoMdClose
              onClick={() => {
                setToggle(!toggle);
              }}
            />
          ) : (
            <AiOutlineMenu
              onClick={() => {
                setToggle(!toggle);
              }}
            />
          )}
        </div>
      </div>

      <div
        style={{
          clipPath: toggle ? "polygon(0 0, 100% 0, 100% 100%, 0 100%)" : "",
        }}
        className="navLinksWrapper"
      >
        <ul className="navLinks">
          <Link
            onClick={() => {
              setToggle(false);
            }}
            className="navLink"
            href="/"
          >
            Home
          </Link>
          <Link
            onClick={() => {
              setToggle(false);
            }}
            className="navLink"
            href="/about"
          >
            About
          </Link>
          <Link
            onClick={() => {
              setToggle(false);
            }}
            className="navLink"
            href="/articles"
          >
            Article
          </Link>
          <Link
            onClick={() => {
              setToggle(false);
            }}
            className="navLink"
            href="/admin"
          >
            Admin Dashboard
          </Link>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
