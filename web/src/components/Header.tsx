import React from "react";
import { get_image_url } from "../utils";

function Header() {
  return (
    <div>
      <header>
        <nav>
          <ul className="logo">
            <li>
              <a href="#">
                <img
                  src={get_image_url("wtm-logo.svg")}
                  alt=""
                  className="h-auto w-[12rem] object-contain"
                />
              </a>
            </li>
          </ul>

          <ul className="links">
            <li>
              <a href="#" className="active">
                Home
              </a>
            </li>

            <li>
              <a href="#">Team</a>
            </li>

            <li>
              <a href="#">Communities</a>
            </li>

            <li>
              <a href="#">Badge</a>
            </li>

            <li>
              <a href="#">FAQ</a>
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
    </div>
  );
}

export default Header;
