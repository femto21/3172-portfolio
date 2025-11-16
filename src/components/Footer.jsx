import React from "react";

function Footer() {
  return (
    <>
      <div className="gradient-line-1"></div>
      <footer className="text-center flex flex-col py-4  text-gray-400 text-sm">
        <nav className="m-auto w-1/4 mb-4">
          <ul className="flex flex-row justify-between ">
            <li className="hover:text-amber-200">
              <a href="/home">Home</a>
            </li>
            <li className="hover:text-amber-200">
              <a href="/about">About</a>
            </li>
            <li className="hover:text-amber-200">
              <a href="/projects">Projects</a>
            </li>
          </ul>
        </nav>
        <div>
          &copy; 2025, Arpit Gahlot {<br></br>}
          arpitgahlot@dal.ca
        </div>
      </footer>
    </>
  );
}

export default Footer;
