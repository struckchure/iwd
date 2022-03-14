import React from "react";

import Container from "./Container";

function Footer() {
  return (
    <footer>
      <button
        className="scroll-top-button"
        onClick={() => {
          document.body.scrollTop = 0;
        }}
      >
        <i className="icon arrow up"></i>
      </button>

      <Container>
        <ul>
          <li>
            <h4 className="text-3xl">IWD Kano 2022</h4>
          </li>
        </ul>

        <ul className="links__footer flex w-full flex-wrap gap-4">
          <li>
            <a href="#">IWD Kano 2021</a>
          </li>
          <li>
            <a href="#">About GDG Program</a>
          </li>
          <li>
            <a href="#">About WTM Program</a>
          </li>
          <li>
            <a href="#">About GDG Program</a>
          </li>
          <li>
            <a href="#">Google Dev Library</a>
          </li>

          <li>
            <a href="#">FAQ</a>
          </li>
          <li>
            <a href="#">Code of conduct</a>
          </li>

          <li>
            <a href="#">Community </a>
          </li>

          <li>
            <a href="#">Guidelines</a>
          </li>
        </ul>
      </Container>
    </footer>
  );
}

export default Footer;
