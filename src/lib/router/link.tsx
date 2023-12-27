import React, { useContext } from "react";
import { RouterContext } from "./router";

type LinkProps = React.AnchorHTMLAttributes<HTMLAnchorElement> & {
  replace?: boolean;
};

export const Link = ({ href, replace, children, ...props }: LinkProps) => {
  const { pushState, replaceState } = useContext(RouterContext);

  function clickHandler(e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) {
    e.preventDefault();

    replace ? replaceState(href!) : pushState(href!);
  }

  return (
    <a href={href} onClick={clickHandler} {...props}>
      {children}
    </a>
  );
};
