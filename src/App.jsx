import { useState } from "react";
import "./App.css";
import Navbar from "../src/components/navbar";
import Sidebar from "../src/components/sidebar";
import Carousel from "../src/components/carousel";
import Home from "./pages/home.jsx";
import ComicCards from "../src/components/comiccards.jsx";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="w-full min-h-screen bg-cream text-black flex flex-col">
      <Sidebar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Carousel />
      <Home />
      <ComicCards />
      <Navbar setMenuOpen={setMenuOpen} />
    </div>
  );
}

export default App;
