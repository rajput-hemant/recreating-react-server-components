import React from "react";
import { RouterContext } from "./router";

type RouteProps = {
  path: string;
  children: React.ReactNode;
};

export const Route = ({ path, children }: RouteProps) => {
  const { path: currentPath } = React.useContext(RouterContext);

  if (removeSearchParam(currentPath) === removeSearchParam(path)) {
    return children;
  }

  return null;
};

function removeSearchParam(path: string) {
  return path.split("?")[0];
}
