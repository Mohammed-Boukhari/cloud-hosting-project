/**
 * @copyright 2025 mohamed boukhari
 * @license Apache-2.0
 * @description error components for the app
 */

/* client component */
"use client";

// node_modules
import Link from "next/link";

// types
interface ErrorProps {
  error: Error;
  reset: () => void;
}

const Error = ({ error, reset }: ErrorProps) => {
  return (
    <div style={{ paddingTop: "28px" }} className=" fix-height text-center">
      <p style={{marginBottom: "8px"}}>This is custom error page for app</p>
      <div className="text-3xl text-red-600 font-semibold">
        Something went wrong
      </div>
      <h2
        style={{ marginBlock: " 12px " }}
        className="text-gray-700 my-3 text-xl"
      >
        Error Message: {error.message}
      </h2>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold rounded-full py-2 px-4"
        style={{ paddingBlock: "8px", paddingInline: "16px" }}
        onClick={() => reset()}
      >
        Try Again
      </button>
      <Link
        style={{ marginTop: "24px" }}
        className="text-xl underline text-blue-700 block mt-6"
        href="/"
      >
        Go back to home
      </Link>
    </div>
  );
};

export default Error;
