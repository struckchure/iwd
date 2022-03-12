import React, { ReactNode, useEffect } from "react";

import Container from "../components/Container";
import Footer from "../components/Footer";
import Header from "../components/Header";

interface Props {
  children: ReactNode;
  title?: string;
}

function BaseLayout({ children, title }: Props) {
  useEffect(() => {
    document.title = title || "IWD Nigeria 2022";
  }, []);

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
