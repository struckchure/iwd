import React from "react";
import { Link } from "react-router-dom";

import { get_image_url } from "../utils";
import NavLink from "./NavLink";

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
        </ul>

        <ul className="links">
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
        </ul>
      </nav>

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
