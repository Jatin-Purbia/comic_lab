import React from "react";
import { useNavigate } from "react-router-dom";
import bgImage from "../../../assets/bg1.png";
import competitionImage1 from "../../../assets/media-5.png";
import competitionImage2 from "../../../assets/media-4.png";
import competitionImage3 from "../../../assets/media-6.png";
import competitionImage4 from "../../../assets/media-9.png";

const Winner = () => {
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
          onClick={() => navigate("../2d-3d")}
          className="fixed top-4 left-4 z-20 bg-black bg-opacity-50 hover:bg-opacity-70 text-white px-4 py-2 rounded-md transition-all duration-200"
        >
          ← Back
        </button>

        {/* Content */}
        <div className="flex-1 flex flex-col items-center justify-center text-center py-12 md:py-16">
          <div className="text-center">
            <h1 className="text-6xl md:text-7xl font-bold text-white">WINNER</h1>
            <h2 className="text-3xl md:text-4xl font-bold mt-2 text-white">
            Meet our first performer.
            </h2>
          </div>

          <div className="flex flex-col mt-10 items-center gap-2 md:gap-3 py-6 md:py-8 bg-black bg-opacity-70 w-full">
            {/* Responsive Image Grid */}
            
            <h1 className="text-white text-2xl font-bold">Vatsal Kumar</h1>
            <h3 className="text-white text-2xl font-bold pb-6">BTech Student <br/>
            (Department of Bioscience & Bioengineering)</h3>
            <div className="flex flex-wrap justify-between gap-1 px-8">
              {[competitionImage1, competitionImage2, competitionImage3,competitionImage4].map((img, idx) => (
                <img
                  key={idx}
                  src={img}
                  alt={`Competition ${idx + 1}`}
                  className="w-full sm:w-[36%] md:w-[25%] lg:w-[20%] aspect-[251/323] h-auto rounded-lg shadow-md transition-transform hover:scale-105"
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

export default Winner;
