import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="h-20 flex justify-between items-center bg-black">
      <ul className="flex gap-x-10 pl-20">
        <li className="text-white text-xl font-montserrat">
          <Link to={{ pathname: "/" }}>Home</Link>
        </li>
        <li className="text-white text-xl font-montserrat">
          <Link to={{ pathname: "/launches" }}>Launches</Link>
        </li>
      </ul>
      <div>
        <Link
          className="pr-20 pl-20 h-20 flex justify-center items-center text-white text-2xl font-montserrat  bg-red-500"
          to={{ pathname: "/quote" }}
        >
          Get a Quote
        </Link>
      </div>
    </nav>
  );
}
