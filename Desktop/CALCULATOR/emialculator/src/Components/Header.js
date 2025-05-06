import React, { useState } from "react";
import { NavLink } from "react-router-dom";

export const Header = ({ darkMode, setDarkMode }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const Active =
    "block py-2 px-3 text-white bg-blue-700 rounded-sm md:bg-transparent md:text-gray-700 md:p-0 md:dark:text-blue-500";
  const InActive =
    "block py-2 px-3 text-gary rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700";

  return (
    <header>
      <nav className="border-gray-200 bg-sky-600 dark:bg-gray-800 dark:border-gray-700">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <NavLink to="#" className="flex items-center space-x-3 rtl:space-x-reverse">
            <span className="self-center text-2xl text-white font-semibold whitespace-nowrap dark:text-white">
              Loan Calculator
            </span>
          </NavLink>

          <label className="inline-flex items-center cursor-pointer">
            <input type="checkbox" className="sr-only peer" checked={darkMode} onChange={() => setDarkMode(!darkMode)} />
            <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300
              dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700
              peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full
              peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px]
              after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full
              after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600
              dark:peer-checked:bg-blue-600">
            </div>
          </label>

          <button
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 "
            aria-controls="navbar-default"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span className="sr-only">Open main menu</span>
            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
            </svg>
          </button>

          {/* Collapsible Menu */}
          <div className={`${menuOpen ? "block" : "hidden"} w-full md:block md:w-auto`} id="navbar-solid-bg">
            <ul className="flex flex-col font-medium mt-4 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-transparent dark:bg-gray-800 md:dark:bg-transparent dark:border-gray-700">
              <li><NavLink to="/" className={({ isActive }) => isActive ? Active : InActive} end>HOME</NavLink></li>
              <li><NavLink to="/exchange" className={({ isActive }) => isActive ? Active : InActive}>EXCHANGE RATES (LIVE)</NavLink></li>
              <li><NavLink to="/about" className={({ isActive }) => isActive ? Active : InActive}>ABOUT</NavLink></li>
              <li><NavLink to="*" className={({ isActive }) => isActive ? Active : InActive}>ERROR PAGE</NavLink></li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};
