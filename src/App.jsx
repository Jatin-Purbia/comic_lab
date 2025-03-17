import { useState } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar";
import Sidebar from "./components/sidebar";
import Carousel from "./components/carousel";
import Home from "./pages/home.jsx";
import ComicCards from "./components/comiccards.jsx";
import Creations from "./pages/creations";
import About from "./pages/info/about";
import Members from "./pages/info/member";
import Contact from "./pages/info/contact";
import Login from "./pages/login";
import News from "./pages/news";
import DC from "./pages/project/dc";
import Course from "./pages/project/course";
import Conference from "./pages/project/conference";
import Competitions from "./pages/project/competition";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <div className="w-full min-h-screen bg-cream text-black flex flex-col">
              <Sidebar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
              <div className="flex-grow">
                <Carousel />
                <Home />
              </div>
              <Navbar setMenuOpen={setMenuOpen} />
            </div>
          }
        />
        <Route
          path="/creations"
          element={
            <div className="w-full min-h-screen bg-cream text-black flex flex-col">
              <Sidebar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
              <div className="flex-grow">
                <Creations />
              </div>
              <Navbar setMenuOpen={setMenuOpen} />
            </div>
          }
        />
        <Route
          path="/about"
          element={
            <div className="w-full min-h-screen bg-cream text-black flex flex-col">
              <Sidebar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
              <div className="flex-grow">
                <About />
              </div>
              <Navbar setMenuOpen={setMenuOpen} />
            </div>
          }
        />
        <Route
          path="/members"
          element={
            <div className="w-full min-h-screen bg-cream text-black flex flex-col">
              <Sidebar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
              <div className="flex-grow">
                <Members />
              </div>
              <Navbar setMenuOpen={setMenuOpen} />
            </div>
          }
        />
        <Route
          path="/contact"
          element={
            <div className="w-full min-h-screen bg-cream text-black flex flex-col">
              <Sidebar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
              <div className="flex-grow">
                <Contact />
              </div>
              <Navbar setMenuOpen={setMenuOpen} />
            </div>
          }
        />
        <Route
          path="/login"
          element={
            <div className="w-full min-h-screen bg-cream text-black flex flex-col">
              <Sidebar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
              <div className="flex-grow">
                <Login />
              </div>
              <Navbar setMenuOpen={setMenuOpen} />
            </div>
          }
        />
        <Route
          path="/news"
          element={
            <div className="w-full min-h-screen bg-cream text-black flex flex-col">
              <Sidebar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
              <div className="flex-grow">
                <News />
              </div>
              <Navbar setMenuOpen={setMenuOpen} />
            </div>
          }
        />
        <Route
          path="/dc"
          element={
            <div className="w-full min-h-screen bg-cream text-black flex flex-col">
              <Sidebar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
              <div className="flex-grow">
                <DC />
              </div>
              <Navbar setMenuOpen={setMenuOpen} />
            </div>
          }
        />
        <Route
          path="/course"
          element={
            <div className="w-full min-h-screen bg-cream text-black flex flex-col">
              <Sidebar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
              <div className="flex-grow">
                <Course />
              </div>
              <Navbar setMenuOpen={setMenuOpen} />
            </div>
          }
        />
        <Route
          path="/conference"
          element={
            <div className="w-full min-h-screen bg-cream text-black flex flex-col">
              <Sidebar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
              <div className="flex-grow">
                <Conference />
              </div>
              <Navbar setMenuOpen={setMenuOpen} />
            </div>
          }
        />
        <Route
          path="/competitions"
          element={
            <div className="w-full min-h-screen bg-cream text-black flex flex-col">
              <Sidebar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
              <div className="flex-grow">
                <Competitions />
              </div>
              <Navbar setMenuOpen={setMenuOpen} />
            </div>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;