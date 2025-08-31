/**
 * @copyright 2025 mohamed boukhari
 * @license Apache-2.0
 * @description Form UI component for the login page
 * @library https://fkhadra.github.io/react-toastify/migration-v11
 */

// use client
"use client";

// node_modules
import { useState } from "react";
import { toast } from "react-toastify"; // liprary

const Form = () => {
  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");

  const formSubmitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (title === "") toast.error("title is required");
    if (description === "") toast.error("description is required");
  };

  return (
    <form className="flex flex-col" onSubmit={formSubmitHandler}>
      <input
        type="text"
        placeholder="Enter Your text"
        className="mb-4 border rounded p-2 text-xl"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        className=" mb-4 p-2 lg:text-xl rounded resize-none"
        rows={5}
        placeholder="Enter Artice Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      ></textarea>
      <button className=" text-2xl text-white bg-blue-700 hover:bg-blue-900 p-2 rounded-lg font-bold cursor-pointer">
        Add
      </button>
    </form>
  );
};

export default Form;
