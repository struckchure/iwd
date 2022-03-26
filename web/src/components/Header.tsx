import React, { useEffect, useState } from "react";
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
        <a
          href={
            "https://gdg.community.dev/events/details/google-gdg-cloud-kano-presents-wtm-cloud-kano-international-womens-day/"
          }
          className="rounded-full p-0 hover:rounded-full hover:border-none hover:bg-current hover:no-underline"
        >
          <button>
            <i className="icon user circle"></i>
            <span className="uppercase">register</span>
          </button>
        </a>
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
  const [count_down, set_count_down] = useState("...");

  useEffect(() => {
    // Set the date we're counting down to
    var countDownDate = new Date("Apr 2, 2022 00:00:00").getTime();

    // Update the count down every 1 second
    var x = setInterval(function () {
      // Get today's date and time
      var now = new Date().getTime();

      // Find the distance between now and the count down date
      var distance = countDownDate - now;

      // Time calculations for days, hours, minutes and seconds
      var days = Math.floor(distance / (1000 * 60 * 60 * 24));
      var hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      var seconds = Math.floor((distance % (1000 * 60)) / 1000);

      // Display the result in the element with id="demo"
      var __count_down =
        days + "d " + hours + "h " + minutes + "m " + seconds + "s ";

      // If the count down is finished, write some text
      if (distance < 0) {
        clearInterval(x);
        __count_down = "Starting now ...";
      }

      set_count_down(__count_down);
    }, 1000);
  }, []);

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
          <span className="font-mono">{count_down}</span>
        </div>
      </header>
    </>
  );
}

export default Header;
