import Home from "./pages/Home.jsx";

// Single-page portfolio — every section lives on one route and is
// reached via in-page anchors (see Navbar). No auth, no admin, no
// router: less surface area, faster load, nothing to secure.
export default function App() {
  return <Home />;
}
