import React, { ReactNode } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";

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
