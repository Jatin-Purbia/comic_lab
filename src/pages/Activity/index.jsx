import React from "react";
import { useNavigate } from "react-router-dom";
import bgImage from "../../assets/bg1.png";

const ActivitySection = () => {
  const navigate = useNavigate();

  return (
    <div
      className="relative h-screen w-full flex flex-col gap-6 md:gap-8 items-center justify-center text-center bg-cover bg-center overflow-hidden"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      {/* Content */}

      <div className="relative z-10 text-center pt-12 md:pt-16">
        <h1 className="text-6xl md:text-7xl font-bold text-white">ACTIVITY</h1>
        <h2 className="text-3xl md:text-4xl font-bold mt-2 text-white">
          WHAT DO WE DO?
        </h2>
      </div>

      {/* Activities List as Buttons */}
      <div
        className="relative z-10 flex flex-col items-center gap-2 md:gap-3 py-6 md:py-8 bg-black bg-opacity-70 w-full"
        style={{ minHeight: "auto" }}
      >
        <ActivityItem label="Competitions" onClick={() => navigate("/competitions")} />
        <ActivityItem label="Conferences" onClick={() => navigate("/conferences")} />
        <ActivityItem label="Courses" onClick={() => navigate("/courses")} />
        <ActivityItem label="Events" onClick={() => navigate("/events")} />
        <ActivityItem label="Projects" onClick={() => navigate("/projects")} />
        <ActivityItem label="Publications" onClick={() => navigate("/publications")} />
      </div>

      {/* Footer Text */}

      <div className="relative z-10 text-center py-6 md:pb-10">
        <h3 className="text-4xl md:text-5xl font-bold text-white">
          WE WILL MAKE A DIFFERENCE TOGETHER
        </h3>
      </div>
    </div>
  );
};

const ActivityItem = ({ label, onClick }) => (
  <span
    onClick={onClick}
    className="cursor-pointer text-2xl md:text-3xl font-semibold inline-block text-white py-1"
  >
    {label}
  </span>
);

export default ActivitySection;