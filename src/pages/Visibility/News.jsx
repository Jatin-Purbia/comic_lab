import React from "react";
import { useNavigate } from "react-router-dom";
import bgImage from "../../assets/bg1.png";

const News = () => {
  return (
    <div
      className="relative h-screen w-full bg-cover bg-center flex flex-col justify-between text-white"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black opacity-40"></div>

      {/* Top Section */}
      <div className="relative z-10 text-center pt-16">
        <h1 className="text-7xl font-bold">NEWS</h1>
        <h2 className="text-4xl font-bold mt-2">This is where we are visible</h2>
      </div>

      {/* Visibility Items */}
      <div className="relative z-10 flex flex-col items-center gap-4 py-8 bg-black bg-opacity-70 w-full" style={{ minHeight: '50vh' }}>
        <p className="cursor-pointer text-3xl font-semibold inline-block">Coming Soon!!!</p>
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

export default News;
