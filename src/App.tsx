import { Router, Route } from "./lib/router";

import { DetailsPage } from "./pages/details";
import { HomePage } from "./pages/home";

import { RootLayout } from "./components/root-layout";

export default function App() {
  return (
    <RootLayout>
      <Router>
        <Route path="/">
          <HomePage />
        </Route>

        <Route path="/details">
          <DetailsPage />
        </Route>
      </Router>
    </RootLayout>
  );
}
