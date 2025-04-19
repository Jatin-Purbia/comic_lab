import React from "react";
import { useNavigate } from "react-router-dom";

// Import images (adjust the paths according to your folder structure)
import Media1 from "../assets/media-1.png";
import Media2 from "../assets/media-2.png";
import Media3 from "../assets/media-3.png";
import Media4 from "../assets/media-4.png";
import bg from "../assets/welcome_page_bg.png";
import block from "../assets/cover_page_block_design.png";

const Landing = () => {
  const navigate = useNavigate();

  return (
    <div
      className="relative h-screen w-full flex flex-col items-center justify-center text-center overflow-hidden"
      style={{ backgroundImage: `url(${bg})`, backgroundSize: "cover", backgroundPosition: "center" }}
    >
      {/* Greenish Overlay */}
      <div className="absolute inset-0 bg-[#bed2b4] opacity-45 z-0"></div>

      {/* Soft background gradient circles */}
      <div className="absolute -top-20 -left-20 w-96 h-96 bg-green-200 rounded-full opacity-30 blur-3xl"></div>
      <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-green-100 rounded-full opacity-40 blur-2xl"></div>

      {/* Main Content */}
      <div className="z-10 px-4">
        <h1 className="text-5xl md:text-6xl font-extrabold text-[#2f4f29] drop-shadow-md">
          Comics Studies Lab @ IITJ
        </h1>
        <p className="text-xl md:text-2xl italic text-[#3c602f] mt-4">
          Our Home in the World of Comics
        </p>

        {/* Character Images */}
        <div className="flex flex-wrap justify-center items-center gap-6 mt-10">
          <img src={Media1} alt="Character 1" className="w-24 md:w-32 hover:scale-105 transition-transform duration-300" />
          <img src={Media2} alt="Character 2" className="w-24 md:w-32 hover:scale-105 transition-transform duration-300" />
          <img src={Media3} alt="Character 3" className="w-24 md:w-32 hover:scale-105 transition-transform duration-300" />
          <img src={Media4} alt="Character 4" className="w-24 md:w-32 hover:scale-105 transition-transform duration-300" />
        </div>

        {/* Decorative block at the bottom */}
        <div
          className="h-16 w-screen bg-repeat-x mt-10"
          style={{
            backgroundImage: `url(${block})`,
            backgroundSize: "auto 100%",
          }}
        ></div>

        {/* Enter Button */}
        <button
          onClick={() => navigate("/Menu")}
          className="mt-8 px-6 py-2 text-lg font-semibold text-white bg-[#3c602f] hover:bg-[#2f4f29] rounded-full shadow-md transition duration-300"
        >
          ENTER
        </button>
      </div>
    </div>
  );
};

export default Landing;
