import React from "react";
import bgImage from "../../assets/bg1.png";
import img1 from "../../assets/2D Image-B 1.png";
import img2 from "../../assets/2D Image-F 2.png";
import img3 from "../../assets/2D Image-S 2.png";

const CompetitionsPage = () => {
  return (
    <div
          className="relative h-screen w-full flex flex-col gap-6 md:gap-8 items-center justify-center text-center bg-cover bg-center overflow-hidden"
          style={{ backgroundImage: `url(${bgImage})` }}
        >
          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black opacity-50"></div>
    
          {/* Content */}
    
          <div className="relative z-10 text-center pt-12 md:pt-16">
            <h1 className="text-6xl md:text-7xl font-bold text-white">COMPETITIONS</h1>
            <h2 className="text-3xl md:text-4xl font-bold mt-2 text-white">
              When we never give up.
            </h2>
          </div>

      <div className="relative z-10 flex flex-row gap-4 py-4">
        
        <img src={img1} alt="2D Sample 1" className="h-40 md:h-52" />
        <img src={img2} alt="2D Sample 2" className="h-40 md:h-52" />
        <img src={img3} alt="2D Sample 3" className="h-40 md:h-52" />
      </div>

      <div className="relative z-10 text-center py-6 md:pb-10">
        <h3 className="text-4xl md:text-5xl font-bold text-white">
          WE WILL MAKE A DIFFERENCE TOGETHER
        </h3>
      </div>
    </div>
  );
};

export default CompetitionsPage;