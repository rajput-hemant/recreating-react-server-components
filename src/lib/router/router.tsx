import React from "react";

export const RouterContext = React.createContext({
  path: "",
  pushState: (_path: string) => {},
  replaceState: (_path: string) => {},
});

export const Router = ({ children }: React.PropsWithChildren) => {
  const [path, setPath] = React.useState(window.location.pathname);

  const pushState = (path: string) => {
    window.history.pushState({}, "", path);
    setPath(path);
  };

  const replaceState = (path: string) => {
    window.history.replaceState({}, "", path);
    setPath(path);
  };

  React.useEffect(() => {
    window.addEventListener("popstate", () => {
      setPath(window.location.pathname);
    });

    return () => {
      window.removeEventListener("popstate", () => {
        setPath(window.location.pathname);
      });
    };
  }, []);

  return (
    <RouterContext.Provider value={{ path, pushState, replaceState }}>
      {children}
    </RouterContext.Provider>
  );
};
