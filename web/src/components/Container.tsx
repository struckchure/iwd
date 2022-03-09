import React from "react";

function Container({ children: React.ReactNode }) {
  return <div className="container px-4 py-4 md:px-[10rem]">{children}</div>;
}

export default Container;
