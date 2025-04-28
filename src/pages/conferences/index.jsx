import React from "react";
import { useNavigate } from "react-router-dom";
import bgImage from "../../assets/bg1.png";
import igncc_stats from "../../assets/igncc_stats.png";

const Conferences = () => {
  const navigate = useNavigate();
  return (
    <div className="relative min-h-screen w-full">
      {/* Fixed Background for the page */}
      <div
        className="fixed inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${bgImage})` }}
      ></div>

      {/* Scrollable Content */}
      <div className="relative z-10 min-h-screen flex flex-col">
        {/* Back Button */}
        <button
          onClick={() => navigate(-1)}
          className="fixed top-4 left-4 z-20 bg-black bg-opacity-50 hover:bg-opacity-70 text-white px-6 py-3 rounded-md transition-all duration-200"
        >
          ← Back
        </button>

        {/* Content Section */}
        <div className="flex-1 flex flex-col items-center justify-center text-center py-8 md:py-16 bg-black bg-opacity-60 text-white px-4 md:px-8">
          {/* Title */}
          <div className="text-center mb-8">
            <h1 className="text-6xl md:text-7xl font-extrabold">Conferences</h1>
            <h2 className="text-3xl md:text-4xl font-semibold mt-2">
              Our Events
            </h2>
          </div>

          {/* Events Section */}
          <div className="flex flex-col items-center py-8 md:py-12 bg-black bg-opacity-60 rounded-lg shadow-xl w-full max-w-4xl mx-auto">
            <VisibilityItem
              label="IGNCC 2024"
              onClick={() => navigate("/igncc2024")}
            />
            <VisibilityItem
              label="IGNCC 2025"
              onClick={() => navigate("/igncc2025")}
            />
        

            {/* Image Section */}
            <div className="mt-5 md:mt-12 w-full max-w-4xl mx-auto">
              <img
                src={igncc_stats}
                alt="IGNCC statistics"
                className="w-full md:w-3/4 lg:w-1/2 h-auto object-contain mx-auto shadow-xl rounded-lg"
              />
            </div>
          </div>

          {/* Footer */}
          <div className="text-center py-6 md:pb-10">
            <h3 className="text-4xl md:text-5xl font-bold">
              WE WILL MAKE A DIFFERENCE TOGETHER
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

// Reusable item component
const VisibilityItem = ({ label, onClick }) => (
  <div
    onClick={onClick}
    className="cursor-pointer text-xl font-semibold inline-block w-full py-4 px-6 rounded-lg hover:bg-opacity-80 transition-all duration-200"
  >
    <div className="flex flex-col items-center">
      {/* Label */}
      <span className="text-4xl text-center font-bold">{label}</span>
    </div>
  </div>
);

export default Conferences;
