import React from "react";
import { useNavigate } from "react-router-dom";
import bgImage from "../../assets/bg1.png";

const Projects = () => {
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
          onClick={() => navigate(-1)}
          className="fixed top-4 left-4 z-20 bg-black bg-opacity-50 hover:bg-opacity-70 text-white px-4 py-2 rounded-md transition-all duration-200"
        >
          ← Back
        </button>

        {/* Content */}
        <div className="flex-1 flex flex-col items-center justify-center text-center py-12 md:py-16">
          <div className="text-center mb-10">
            <h1 className="text-6xl md:text-7xl font-bold text-white">Projects</h1>
            <h2 className="text-3xl md:text-4xl font-bold mt-2 text-white">
              Our Work
            </h2>
          </div>

          <div
   className="relative z-10 flex flex-col items-center gap-4 py-8 bg-black bg-opacity-70 w-full"
   style={{ minHeight: "50vh" }}
 >
            <VisibilityItem label="Design Credit Projects" onClick={() => navigate("/dc")} />
            {/* <VisibilityItem label="Media Coverage" onClick={() => navigate("/media")} /> */}
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

const VisibilityItem = ({ label, onClick }) => (
  <span
    onClick={onClick}
    className="cursor-pointer text-3xl font-semibold inline-block text-white"
  >
    {label}
  </span>
);

export default Projects;