import { useState } from "react";
import "./App.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { FaBars, FaTimes } from "react-icons/fa";

function App() {
  const [count, setCount] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);

  const comicCategories = [
    "Superhero",
    "Manga",
    "Sci-Fi",
    "Fantasy",
    "Horror",
    "Comedy",
    "Adventure",
    "Mystery",
  ];

  const comicCards = [
    { title: "The Dark Knight", image: "/assets/comic1.jpg" },
    { title: "Naruto", image: "/assets/comic2.jpg" },
    { title: "Cyberpunk Chronicles", image: "/assets/comic3.jpg" },
    { title: "Mythical Legends", image: "/assets/comic4.jpg" },
  ];

  return (
    <div className="w-full min-h-screen bg-black text-white flex flex-col">
      {/* Sidebar Menu */}
      <div
        className={`fixed top-0 left-0 h-full w-72 bg-gray-900 p-6 transition-transform z-50 shadow-lg ${menuOpen ? "translate-x-0" : "-translate-x-72"}`}
      >
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-bold text-yellow-400">Comic Categories</h2>
          <FaTimes className="text-white text-2xl cursor-pointer" onClick={() => setMenuOpen(false)} />
        </div>
        <ul className="space-y-4">
          {comicCategories.map((category, index) => (
            <li
              key={index}
              className="p-3 bg-gray-800 rounded-lg hover:bg-yellow-400 hover:text-black cursor-pointer transition text-lg"
            >
              {category}
            </li>
          ))}
        </ul>
      </div>

      {/* Navbar */}
      <nav className="w-full bg-gray-800 py-4 px-8 flex justify-between items-center shadow-md sticky top-0 z-40">
        <div className="flex items-center space-x-6">
          <FaBars className="text-white text-2xl cursor-pointer" onClick={() => setMenuOpen(true)} />
          <h1 className="text-3xl font-bold text-yellow-400">Comic Lab</h1>
        </div>
        <ul className="hidden md:flex space-x-8 text-lg">
          <li className="hover:text-yellow-400 cursor-pointer">Home</li>
          <li className="hover:text-yellow-400 cursor-pointer">About</li>
          <li className="hover:text-yellow-400 cursor-pointer">Gallery</li>
          <li className="hover:text-yellow-400 cursor-pointer">Contact</li>
        </ul>
      </nav>

      {/* Image Carousel */}
      <div className="w-full h-80 md:h-96 overflow-hidden mt-6">
        <Swiper pagination={{ clickable: true }} modules={[Pagination]} className="h-full w-full">
          <SwiperSlide>
            <img src="/assets/slide1.jpg" alt="Comic 1" className="w-full h-full object-cover rounded-lg" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/assets/slide2.jpg" alt="Comic 2" className="w-full h-full object-cover rounded-lg" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/assets/slide3.jpg" alt="Comic 3" className="w-full h-full object-cover rounded-lg" />
          </SwiperSlide>
        </Swiper>
      </div>

      {/* Home Page Content */}
      <div className="text-center px-8 py-16 max-w-4xl mx-auto">
        <h2 className="text-5xl font-bold text-yellow-400">Welcome to Comic Lab - IIT Jodhpur</h2>
        <p className="mt-6 text-lg text-gray-300">
          Where creativity meets imagination! Dive into the world of comics, storytelling, and innovation.
        </p>
        <button
          className="mt-8 px-8 py-4 bg-yellow-400 text-black font-semibold rounded-lg shadow-lg hover:bg-yellow-500 transition text-lg"
          onClick={() => setCount(count + 1)}
        >
          Click Me {count}
        </button>
      </div>

      {/* Comic Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 px-10 pb-16">
        {comicCards.map((comic, index) => (
          <div key={index} className="bg-gray-800 p-6 rounded-lg shadow-lg hover:scale-105 transition-transform">
            <img src={comic.image} alt={comic.title} className="w-full h-56 object-cover rounded-md" />
            <h3 className="mt-5 text-2xl font-semibold text-yellow-400 text-center">{comic.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;