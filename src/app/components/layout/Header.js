"use client";
import { useState } from "react";
export default function Header() {
  const [isNavOpen, setNavOpen] = useState(false);

  const toggleNav = () => {
    setNavOpen(!isNavOpen);
  };

  return (
    <header className="fixed w-full bg-white grid grid-cols-2 lg:grid-cols-7 px-12 py-7">
      <img src="/logo.svg" alt="Logo" className="h-11" />
      <button
        className="col-start-2 justify-self-end lg:hidden focus:outline-none"
        onClick={toggleNav}
        aria-label="Toggle Menu"
      >
        {/* Simple Hamburger Icon */}
        <svg
          className="w-8 h-8 text-blue"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d={isNavOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
          />
        </svg>
      </button>
      <nav
        className={`${
          isNavOpen ? "flex" : "hidden"
        } flex-col items-center absolute top-full left-0 w-full bg-white shadow-lg lg:shadow-none lg:bg-transparent lg:flex lg:relative lg:flex-row lg:col-span-4 lg:col-start-4 lg:justify-end`}
      >
        <a
          href="#"
          className="block py-2 lg:py-0 lg:mx-4 text-blue font-black uppercase"
        >
          Notre vision
        </a>
        <a
          href="#"
          className="block py-2 lg:py-0 lg:mx-4 text-blue font-black uppercase"
        >
          Savoir-faire
        </a>
        <a
          href="#"
          className="block py-2 lg:py-0 lg:mx-4 text-blue font-black uppercase"
        >
          Réalisations
        </a>
        <a
          href="#"
          className="block w-full text-center py-2 lg:py-0 lg:w-auto lg:px-11 lg:mx-4 bg-blue text-white font-black rounded-3xl lg:rounded-none uppercase"
        >
          Contact
        </a>
      </nav>
    </header>
  );
}
