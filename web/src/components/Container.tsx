import React, { ReactNode } from "react";

interface Props {
  children: ReactNode,
}



function Container({ children: }: Props) {
  return <div className="container px-4 py-4 md:px-[10rem]">{children}</div>;
}

export default Container;
