/**
 * @copyright 2025 mohamed boukhari
 * @license Apache-2.0
 * @description Form UI component for the Register page
 * @library https://fkhadra.github.io/react-toastify/migration-v11
 */

// use client
"use client";

// node_modules
import { useState } from "react";
import { toast } from "react-toastify"; // liprary

const Form = () => {
  const [username, setUsername] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const formSubmitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (username === "") toast.error("username is required");
    if (email === "") toast.error("Email is required");
    if (password === "") toast.error("Password is required");
  };

  return (
    <form className="flex flex-col" onSubmit={formSubmitHandler}>
      <input
        type="text"
        placeholder="Enter Your User Name"
        className="mb-4 border rounded p-2 text-xl"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />

      <input
        type="email"
        placeholder="Enter Your Email"
        className="mb-4 border rounded p-2 text-xl"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <input
        type="password"
        placeholder="Enter Your Password"
        className="mb-4 border rounded p-2 text-xl"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <button className=" text-2xl text-white bg-blue-800 p-2 rounded-lg font-bold cursor-pointer">
        Log In
      </button>
    </form>
  );
};

export default Form;
