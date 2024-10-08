"use client";
import { useState, useEffect } from "react";
export default function Header() {
  const [isNavOpen, setNavOpen] = useState(false);

  useEffect(() => {
    if (isNavOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [isNavOpen]);

  const toggleNav = () => {
    setNavOpen(!isNavOpen);
  };

  return (
    <header
      className={`transition-all duration-300 ease-in-out ${
        isNavOpen ? "h-screen" : "h-[68px] lg:h-[100px]"
      } bg-white border-b border-grey fixed w-full py-3 px-5 z-10 lg:px-0 lg:py-7`}
    >
      <div className="container mx-auto grid grid-rows-[auto,1fr] grid-cols-2 lg:grid-cols-7">
        <a href="#haut">
          <img src="/logo.svg" alt="Logo" className="h-11" />
        </a>
        <button
          className="col-start-2 justify-self-end lg:hidden focus:outline-none"
          onClick={toggleNav}
          aria-label="Toggle Menu"
        >
          <svg
            className={`w-11 h-11 text-blue transition-transform duration-300 ease-in-out transform ${
              isNavOpen ? "rotate-90" : "rotate-0"
            }`}
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
            isNavOpen
              ? "max-h-[500px] opacity-100"
              : "max-h-0 opacity-0 lg:opacity-100"
          } transition-all duration-300 ease-in-out col-span-2 flex flex-col gap-4 items-center mt-5 lg:mt-0 lg:col-span-4 lg:col-start-4 lg:grid lg:grid-cols-4`}
        >
          <a
            href="#vision"
            onClick={() => setNavOpen(false)}
            className=" text-blue font-black uppercase lg:col-start-1"
          >
            Notre vision
          </a>
          <a
            href="#services"
            onClick={() => setNavOpen(false)}
            className=" text-blue font-black uppercase lg:col-start-2"
          >
            Savoir-faire
          </a>
          <a
            href="#projects"
            onClick={() => setNavOpen(false)}
            className=" text-blue font-black uppercase lg:col-start-3"
          >
            Réalisations
          </a>
          <a
            href="#contact"
            onClick={() => setNavOpen(false)}
            className=" w-full text-center py-2 xl:px-11  bg-blue text-white font-black rounded-3xl uppercase lg:col-start-4 hover:text-blue hover:bg-white hover:transition hover:duration-300 hover:ease-in-out"
          >
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
}
