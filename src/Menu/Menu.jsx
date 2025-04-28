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
    { title: "WEB VIEWER", bgColor: "bg-[#e7e3d8]" },
    { title: "COMICS STUDIES", bgColor: "bg-[#e7e3d8]" },
    { title: "IITJ LAB", bgColor: "bg-[#e7e3d8]" },
  ];

  useEffect(() => {
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
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 3000);

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
    { icon: Youtube, url: "https://youtu.be/Fn1na19EaM0" },
    { icon: Linkedin, url: "https://www.linkedin.com/in/comics-studies-lab-887911327/" },
    { icon: Instagram, url: "https://www.instagram.com/comicsstudieslabatiitj/" },
    { icon: Facebook, url: "https://www.facebook.com/profile.php?id=61565129591764" },
    { icon: Twitter, url: " https://x.com/ComicsSLabIITJ" },
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
      className="relative min-h-screen w-full flex flex-col items-center justify-center overflow-x-hidden bg-[#f3eed3] p-6"
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
        className="fixed top-4 right-4 bg-black bg-opacity-50 hover:bg-opacity-70 text-white p-2 rounded-full transition-all"
      >
        {user ? (
          <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-lg font-bold text-black">
            {user.name.charAt(0).toUpperCase()}
          </div>
        ) : (
          <User size={24} />
        )}
      </button>

      {/* Carousel Section */}
      <div className="w-full max-w-4xl bg-[#d6d3c4] rounded-2xl p-8 mb-20 text-center shadow-lg">
        {/* Increased max-w to 4xl, padding to p-8, margin-bottom to mb-20 */}
        <h1 className="text-5xl md:text-6xl font-extrabold text-black">{slides[currentSlide].title}</h1>
      </div>

      <div className="w-full flex flex-col md:flex-row justify-center gap-16">
        {/* Logo and Title Section */}
        <div className="flex flex-col h-full md:flex-row items-center mb-10 gap-8">
          {/* Logo Image */}
          <div className="flex-shrink-0 justify-center h-full">
            <img src={logo} alt="Logo" className="w-28 h-40" />
          </div>

          {/* Title and Socials */}
          <div className="flex flex-col items-center text-center justify-center w-full max-w-md">
            <h1 className="text-4xl md:text-4xl font-extrabold text-[#3c602f] mt-2">
              WELCOME TO COMICS STUDIES LAB @ IITJ
            </h1>

            <p className="text-xl mt-10 italic text-[#5a704d]">
              A site for collective viewing, consuming, & reception of Comics.
            </p>

            {/* Social Links */}
            <div className="flex gap-6 mt-10 justify-center items-center">
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

        </div>

        {/* Navigation Buttons */}
        <div className="flex flex-col items-center gap-4 w-full max-w-xs">
          {links.map(({ text, path }, index) => (
            <Link
              key={index}
              to={path}
              className="w-full bg-[#5a704d] hover:bg-[#3c602f] text-white font-semibold py-3 rounded-full text-center shadow-md hover:shadow-lg transition-all"
            >
              {text}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Menu;
