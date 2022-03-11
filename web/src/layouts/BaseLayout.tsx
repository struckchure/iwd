import React, { ReactNode } from "react";
import Container from "../components/Container";
import Header from "../components/Header";
import Accordion from "../components/Accordion";
import { get_image_url } from "../utils";
import Footer from "../components/Footer";

interface Props {
  children: ReactNode;
}

function BaseLayout({ children }: Props) {
  return (
    <main>
      <Header />

      <div>{children}</div>

      <div className="divider"></div>

      <Footer />
    </main>
  );
}

export default BaseLayout;
