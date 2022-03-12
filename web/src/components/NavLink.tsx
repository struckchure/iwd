import React from "react";
import { Link, LinkProps } from "react-router-dom";
import { useLocation } from "react-router-dom";

function NavLink(props: LinkProps) {
  const location = useLocation();

  let isActive = location.pathname == props.to;
  let className = isActive
    ? props.className || "" + "active"
    : props.className || "";

  props = {
    ...props,
    className,
  };

  return <Link {...props}>{props.children}</Link>;
}

export default NavLink;
