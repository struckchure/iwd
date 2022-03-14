import React from "react";
import { Link } from "react-router-dom";

import { get_image_url } from "../utils";
import NavLink from "./NavLink";

function nav_links() {
  return (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>

      <li>
        <NavLink to="/teams">Team</NavLink>
      </li>

      <li>
        <NavLink to="/communities">Communities</NavLink>
      </li>

      <li>
        <NavLink to="/badge">Badge</NavLink>
      </li>

      <li>
        <NavLink to="/faq">FAQ</NavLink>
      </li>

      <li>
        <button>
          <i className="icon user circle"></i>
          <span className="uppercase">register</span>
        </button>
      </li>
    </>
  );
}

function toggle_mobile_menu() {
  const elem = document.querySelector(".mobile-menu");

  if (elem?.classList.contains("w-0")) {
    elem?.classList.add("w-full");
    elem?.classList.remove("w-0");
  } else if (elem?.classList.contains("w-full")) {
    elem?.classList.add("w-0");
    elem?.classList.remove("w-full");
  }
}

function Header() {
  return (
    <>
      <nav>
        <ul className="logo">
          <li>
            <Link to="/">
              <img
                src={get_image_url("wtm-logo.svg")}
                alt=""
                className="h-auto w-[12rem] object-contain"
              />
            </Link>
          </li>

          <li className="block md:hidden">
            <button
              className="bg-transparent text-black"
              onClick={toggle_mobile_menu}
            >
              <i className="icon large bars"></i>
            </button>
          </li>
        </ul>

        <ul className="links">{nav_links()}</ul>
      </nav>

      <div className="mobile-menu fixed top-0 left-0 z-50 h-screen w-0 overflow-hidden bg-white transition duration-500">
        <div className="mx-auto">
          <button
            className="bg-transparent text-black"
            onClick={toggle_mobile_menu}
          >
            <i className="icon large close"></i>
          </button>
        </div>

        <ul className="flex flex-col items-center justify-center gap-2 pt-20">
          {nav_links()}
        </ul>
      </div>

      <header>
        <div className="w-full bg-gray-700 py-2 text-center text-xs text-white md:text-sm">
          Want to become a speaker of our{" "}
          <span className="font-bold">#IWDIndia2022</span>.
          <a href="#">Click here</a>
        </div>
      </header>
    </>
  );
}

export default Header;
