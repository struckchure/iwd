import React, { ReactNode } from "react";

import Container from "../components/Container";
import Footer from "../components/Footer";
import Header from "../components/Header";

interface Props {
  children: ReactNode;
}

function BaseLayout({ children }: Props) {
  return (
    <main>
      <Header />

      <Container>{children}</Container>

      <div className="divider"></div>

      <Footer />
    </main>
  );
}

export default BaseLayout;
