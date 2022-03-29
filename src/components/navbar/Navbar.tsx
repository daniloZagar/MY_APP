import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="h-20 flex justify-center items-center bg-black">
      <ul className="flex gap-x-10">
        <li className="text-white text-xl">
          <Link to={{ pathname: "/" }}>Home</Link>
        </li>
        <li className="text-white text-xl">
          <Link to={{ pathname: "/launches" }}>Launches</Link>
        </li>
      </ul>
    </nav>
  );
}
