import { Router, Route } from "./lib/router";
import { HomePage } from "./pages/home";

export default function App() {
  return (
    <Router>
      <Route path="/">
        <HomePage />
      </Route>
    </Router>
  );
}
