import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Youtube, Linkedin, Instagram, Facebook, Twitter, User } from "lucide-react";
import logo from "../assets/logo.png";
import bg from "../assets/welcome_page_bg.png";
const Menu = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  const slides = [
    { title: "WEB VIEWER", bgColor: "bg-[#bfbba6]" },
    { title: "COMICS STUDIES", bgColor: "bg-[#dcd8bb]" },
    { title: "IITJ LAB", bgColor: "bg-[#bfbba6]" },
  ];

  useEffect(() => {
    // Load user data
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      try {
        setUser(JSON.parse(storedUser));
      } catch (error) {
        console.error('Error parsing user data:', error);
      }
    }
    setIsLoading(false);
  }, []);

  useEffect(() => {
    // Set up carousel interval
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 3000);

    // Clean up interval on component unmount
    return () => clearInterval(interval);
  }, [slides.length]);

  const links = [
    { text: "ACTIVITY", path: "/activity" },
    { text: "CREATIVITY", path: "/creativity" },
    { text: "INCLUSIVITY", path: "/login" },
    { text: "ORIGINALITY", path: "/originality" },
    { text: "QUESTIONALITY", path: "/questionality" },
    { text: "VISIBILITY", path: "/visibility" },
  ];

  const socialLinks = [
    { icon: Youtube, url: "https://youtube.com" },
    { icon: Linkedin, url: "https://linkedin.com" },
    { icon: Instagram, url: "https://instagram.com" },
    { icon: Facebook, url: "https://facebook.com" },
    { icon: Twitter, url: "https://twitter.com" },
  ];

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#f3eed3]">
        <div className="text-2xl text-[#3c602f]">Loading...</div>
      </div>
    );
  }

  return (
    
    <div
      className="relative min-h-screen w-full flex flex-col md:flex-row text-center overflow-hidden"
      style={{
        backgroundImage: `url(${bg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Profile Icon */}
      <button
        onClick={() => navigate('/profile')}
        className="fixed top-4 right-4 z-20 bg-black bg-opacity-50 hover:bg-opacity-70 text-white p-2 rounded-full transition-all duration-200"
      >
        {user ? (
          <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-lg font-bold text-black">
            {user.name.charAt(0).toUpperCase()}
          </div>
        ) : (
          <User size={24} />
        )}
      </button>

      {/* Left Section */}
      <div className="flex-1 flex flex-col justify-center items-center px-6 py-10">
        {/* Carousel */}
        <div className="w-full max-w-4xl mb-8 relative">
          <div className="overflow-hidden rounded-lg shadow-xl">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {slides.map((slide, index) => (
                <div
                  key={index}
                  className={`w-full ${slide.bgColor} px-10 py-8 flex-shrink-0`}
                >
                  <h1 className="text-4xl md:text-5xl font-extrabold text-black">
                    {slide.title}
                  </h1>
                </div>
              ))}
            </div>
          </div>
          <div className="flex justify-center mt-4 gap-2">
            {slides.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full ${
                  currentSlide === index ? "bg-[#3c602f]" : "bg-gray-300"
                }`}
                onClick={() => setCurrentSlide(index)}
              />
            ))}
          </div>
        </div>

        {/* Logo and Title Section */}
        <div className="flex items-center justify-center gap-6 mb-8">
          <img src={logo} alt="Logo" className="w-20 h-20" />
          <div className="text-left">
            <h2 className="text-2xl md:text-3xl font-bold text-[#3c602f]">WELCOME TO</h2>
            <h1 className="text-3xl md:text-4xl font-extrabold text-[#3c602f] leading-tight">
              COMICS STUDIES LAB @ IITJ
            </h1>
            <p className="text-md md:text-lg italic text-[#5a704d] mt-2">
              A site for collective viewing, consuming, & reception of Comics.
            </p>
          </div>
        </div>

        {/* Social Icons */}
        <div className="flex justify-center gap-6">
          {socialLinks.map(({ icon: Icon, url }, index) => (
            <a
              key={index}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#3c602f] hover:text-[#5a704d] transition-colors"
            >
              <Icon size={28} />
            </a>
          ))}
        </div>
      </div>

      {/* Right Sidebar */}
      <div className="w-full md:w-72 bg-[#dcd8bb] flex flex-col justify-center items-center py-10 gap-4 shadow-lg md:mr-4">
        {links.map(({ text, path }, index) => (
          <Link
            key={index}
            to={path}
            className="w-64 text-white bg-[#5a704d] hover:bg-[#3c602f] px-6 py-4 rounded-lg text-md font-semibold transition duration-300 text-center shadow-md hover:shadow-lg transform hover:-translate-y-1"
          >
            {text}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Menu;
