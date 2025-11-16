import React from "react";
const Header = () => {
  return (
    <>
      <section className="w-full flex items-center justify-between  py-4 bg-transparent">
        <div className="flex flex-col">
          <h1 className="text-3xl font-bold text-white tracking-tight">
            Arpit Gahlot
          </h1>
          <p className="text-gray-300 text-sm">BCS, Dalhousie University</p>
        </div>
        <div className="flex gap-6 text-white text-xl">
          <a
            href="https://github.com/femto21"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa-brands fa-github fa-xl"></i>
          </a>
          <a href="mailto:arpitgahlot2003@gmail.com">
            <i className="fa-regular fa-envelope fa-xl"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/arpit-gahlot-1bb63a300"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa-brands fa-linkedin-in fa-xl"></i>
          </a>
          <a
            href="https://discord.com/users/530748472278646805"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa-brands fa-discord fa-xl"></i>
          </a>
        </div>
        <nav className="min-w-1/4">
          <ul className="flex flex-row text-md justify-between ">
            <li className="hover:text-amber-200">
              <a href="/">Home</a>
            </li>
            <li className="hover:text-amber-200">
              <a href="/about">About</a>
            </li>
            <li className="hover:text-amber-200">
              <a href="/projects">Projects</a>
            </li>
          </ul>
        </nav>
      </section>
      <div className="gradient-line-1"></div>
    </>
  );
};
export default Header;
