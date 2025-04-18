import React from "react";
import { Link } from "react-router-dom";
import youtubeIcon from "../assets/media-1.png";
import linkedinIcon from "../assets/media-1.png";
import instagramIcon from "../assets/media-1.png";
import facebookIcon from "../assets/media-1.png";
import twitterIcon from "../assets/media-1.png";

const Menu = () => {
  const links = [
    { text: "ACTIVITY", path: "/activity" },
    { text: "CREATIVITY", path: "/creativity" },
    { text: "INCLUSIVITY", path: "/login" },
    { text: "ORIGINALITY", path: "/originality" },
    { text: "QUESTIONALITY", path: "/questionality" },
    { text: "VISIBILITY", path: "/visibility" },
  ];

  return (
    <div className="relative min-h-screen w-full flex flex-col md:flex-row bg-[#f3eed3] text-center overflow-hidden">
      {/* Left Section */}
      <div className="flex-1 flex flex-col justify-center items-center px-6 py-10">
        <div className="bg-[#bfbba6] px-10 py-6 rounded-lg shadow-lg mb-6">
          <h1 className="text-4xl md:text-5xl font-extrabold text-black">“WEB VIEWER”</h1>
        </div>

        <div>
          <h2 className="text-2xl md:text-3xl font-bold text-[#3c602f]">WELCOME TO</h2>
          <h1 className="text-3xl md:text-4xl font-extrabold text-[#3c602f] leading-tight mt-1">
            COMICS STUDIES <br /> LAB @ IITJ
          </h1>
          <p className="text-md md:text-lg italic text-[#5a704d] mt-3">
            A site for collective viewing, <br /> consuming, & reception of Comics.
          </p>
        </div>

        <div className="flex justify-center gap-6 mt-6">
          <img src={youtubeIcon} alt="YouTube" className="w-8 h-8 hover:scale-110 transition-transform" />
          <img src={linkedinIcon} alt="LinkedIn" className="w-8 h-8 hover:scale-110 transition-transform" />
          <img src={instagramIcon} alt="Instagram" className="w-8 h-8 hover:scale-110 transition-transform" />
          <img src={facebookIcon} alt="Facebook" className="w-8 h-8 hover:scale-110 transition-transform" />
          <img src={twitterIcon} alt="Twitter" className="w-8 h-8 hover:scale-110 transition-transform" />
        </div>
      </div>

      {/* Right Sidebar */}
      <div className="w-full md:w-64 bg-[#dcd8bb] flex flex-col justify-center items-center py-10 gap-4 shadow-lg">
        {links.map(({ text, path }, index) => (
          <Link
            key={index}
            to={path}
            className="w-52 text-white bg-[#5a704d] hover:bg-[#3c602f] px-4 py-3 rounded-full text-sm md:text-md font-semibold transition duration-300 text-center"
          >
            {text}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Menu;
