import React from "react";
import logo from "../images/logo.png";
function Nav() {
  return (
    <div>
      <nav className="fixed flex items-center h-auto justify-between top-0 w-full bg-white border-b border-gray-200 dark:bg-gray-800 dark:border-gray-700">
        <div>
          <img src={logo} className="w-36 rounded-lg h-auto" alt="rimal logo" />
        </div>
        <ul className=" flex items-center flex-row justify-center  px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white">
          <li>Home</li>
          <li>news</li>
          <li>what we do?</li>
          <li>contact us</li>
        </ul>
        <button className="bg-orange-400 border ml-10 justify-self-end">log in</button>
      </nav>
    </div>
  );
}

export default Nav;
