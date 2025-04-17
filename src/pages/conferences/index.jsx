import React from "react";
import { useNavigate } from "react-router-dom";
import bgImage from "../../assets/bg1.png";
import igncc_stats from "../../assets/igncc_stats.png";

const conferences = () => {
  const navigate = useNavigate();
  return (
    <div
      className="relative h-screen w-full bg-cover bg-center flex flex-col justify-between text-white"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black opacity-40"></div>
      {/* Back Button */}
      <button
        onClick={() => navigate(-1)}
        className="absolute top-4 left-4 z-20 bg-black bg-opacity-50 hover:bg-opacity-70 text-white px-4 py-2 rounded-md transition-all duration-200"
      >
        ← Back
      </button>

      {/* Top Section */}
      <div className="relative z-10 text-center pt-16">
        <h1 className="text-7xl font-bold">Conferences</h1>
        <h2 className="text-4xl font-bold mt-2">Our researches have been shared</h2>
      </div>

      {/* Visibility Items */}
      <div className="relative z-10 flex flex-col items-center gap-4 py-8 bg-black bg-opacity-70 w-full" style={{ minHeight: '50vh' }}>
        <VisibilityItem label="IGNCC 2024" onClick={() => navigate("/igncc2024")} />
        <VisibilityItem label="IGNCC 2025" onClick={() => navigate("/igncc2025")} />

        {/* Bottom Image */}
        <div className="relative z-10 flex justify-center items-center py-8 w-full h-64">
          <img
            src={igncc_stats}
            alt="IGNCC statistics"
            className="w-full h-full object-contain"
          />
        </div>
      </div>
      
      {/* Bottom Footer Text */}
      <div className="relative z-10 text-center pb-10">
        <h3 className="text-5xl font-bold">
          WE WILL MAKE A DIFFERENCE TOGETHER
        </h3>
      </div>
    </div>
  );
};

// Reusable item component
const VisibilityItem = ({ label, onClick }) => (
  <span
    onClick={onClick}
    className="cursor-pointer text-3xl font-semibold inline-block"
  >
    {label}
  </span>
);

export default conferences;