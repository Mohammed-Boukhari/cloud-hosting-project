/**
 * @copyright 2025 mohamed boukhari
 * @license Apache-2.0
 * @library https://fkhadra.github.io/react-toastify/migration-v11
 * @description Add Comment Form component for the application
 */

// use client
"use client";

// node_modules
import { useState } from "react";
import { toast } from "react-toastify"; // library

const AddCommentForm = () => {
  const [Text, setText] = useState<string>("");

  const formSubmitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (Text === "") toast.error("please write something");
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <input
        className="rounded-lg text-xl p-2 w-full bg-white focus:shadow-md"
        type="text"
        placeholder="Add a comment..."
        value={Text}
        onChange={(e) => setText(e.target.value)}
      />
      <button
        type="submit"
        className="bg-green-700 text-white mt-2 p-1 w-min text-xl rounded-lg hover:bg-green-900"
      >
        Comment
      </button>
    </form>
  );
};

export default AddCommentForm;
