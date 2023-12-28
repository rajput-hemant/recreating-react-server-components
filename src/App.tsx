import React from "react";
import { Router, Route } from "./lib/router";

import { RootLayout } from "./components/root-layout";

import DetailsPage from "./pages/details";
import HomePage from "./pages/home";

export default function App() {
  React.useLayoutEffect(() => {
    if (location.pathname === "/") {
      location.pathname = "/home";
    }
  }, []);

  return (
    <RootLayout>
      <Router>
        <Route path="/home">
          <HomePage />
        </Route>

        <Route path="/details">
          <DetailsPage />
        </Route>
      </Router>
    </RootLayout>
  );
}
