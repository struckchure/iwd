import React from "react";
import { get_image_url } from "../utils";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header>
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
            <Link className="active" to="/">
              Home
            </Link>
          </li>

          <li>
            <Link to="/teams">Team</Link>
          </li>

          <li>
            <Link to="/communities">Communities</Link>
          </li>

          <li>
            <Link to="/badge">Badge</Link>
          </li>

          <li>
            <Link to="/faq">FAQ</Link>
          </li>

          <li>
            <button>
              <i className="icon user circle"></i>
              <span className="uppercase">register</span>
            </button>
          </li>
        </ul>
      </nav>

      <section className="w-full bg-gray-700 py-2 text-center text-sm text-white">
        Want to become a speaker of our{" "}
        <span className="font-bold">#IWDIndia2022</span>.
        <a href="#">Click here</a>
      </section>
    </header>
  );
}

export default Header;
