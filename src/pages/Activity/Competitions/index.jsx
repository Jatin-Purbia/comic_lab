import React from "react";
import { useNavigate } from "react-router-dom";
import bgImage from "../../../assets/bg1.png";
import competitionImage1 from "../../../assets/comp_1.png";
import competitionImage2 from "../../../assets/comp_2.png";
import competitionImage3 from "../../../assets/comp_3.png";

const Competitions = () => {
  const navigate = useNavigate();
  return (
    <div className="relative min-h-screen w-full">
      {/* Fixed Background */}
      <div
        className="fixed inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
      </div>

      {/* Scrollable Content */}
      <div className="relative z-10 min-h-screen flex flex-col">
        {/* Back Button */}
        <button
          onClick={() => navigate("../Activity")}
          className="fixed top-4 left-4 z-20 bg-black bg-opacity-50 hover:bg-opacity-70 text-white px-4 py-2 rounded-md transition-all duration-200"
        >
          ← Back
        </button>

        {/* Content */}
        <div className="flex-1 flex flex-col items-center justify-center text-center py-12 md:py-16">
          <div className="text-center">
            <h1 className="text-6xl md:text-7xl font-bold text-white">Competitions</h1>
            <h2 className="text-3xl md:text-4xl font-bold mt-2 text-white">
              When we never give up.
            </h2>
          </div>

          <div className="flex flex-col mt-10 items-center gap-2 md:gap-3 py-6 md:py-8 bg-black bg-opacity-70 w-full">
            {/* Responsive Image Grid */}
            
            <button 
            onClick={() => navigate("/2d-3d")}
            className="text-white text-2xl font-bold">2D to 3D</button>
            <div className="flex flex-wrap justify-between gap-12 px-4">
              {[competitionImage1, competitionImage2, competitionImage3].map((img, idx) => (
                <img
                key={idx}
                src={img}
                alt={`Competition ${idx + 1}`}
                className="w-full sm:w-[48%] md:w-[30%] lg:w-[28%] aspect-[307/426] object-contain rounded-lg shadow-md transition-transform hover:scale-105"
              />
              
              
              ))}
            </div>
          </div>

          <div className="text-center py-6 md:pb-10">
            <h3 className="text-4xl md:text-5xl font-bold text-white">
              WE WILL MAKE A DIFFERENCE TOGETHER
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Competitions;
