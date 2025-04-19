import React from "react";
import { useNavigate } from "react-router-dom";
import bgImage from "../../assets/bg1.png";

const ActivitySection = () => {
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
          onClick={() => navigate("../../Menu")}
          className="fixed top-4 left-4 z-20 bg-black bg-opacity-50 hover:bg-opacity-70 text-white px-4 py-2 rounded-md transition-all duration-200"
        >
          ← Back
        </button>

        {/* Content */}
        <div className="flex-1 flex flex-col gap-6 md:gap-8 items-center justify-center text-center py-12 md:py-16">
          <div className="text-center">
            <h1 className="text-6xl md:text-7xl font-bold text-white">ACTIVITY</h1>
            <h2 className="text-3xl md:text-4xl font-bold mt-2 text-white">
              WHAT DO WE DO?
            </h2>
          </div>

          {/* Activities List as Buttons */}
          <div className="flex flex-col items-center gap-2 md:gap-3 py-6 md:py-8 bg-black bg-opacity-70 w-full">
            <ActivityItem label="Competitions" onClick={() => navigate("/competitions")} />
            <ActivityItem label="Conferences" onClick={() => navigate("/conferences")} />
            <ActivityItem label="Courses" onClick={() => navigate("/courses")} />
            <ActivityItem label="Events" onClick={() => navigate("/events")} />
            <ActivityItem label="Projects" onClick={() => navigate("/projects")} />
            <ActivityItem label="Publications" onClick={() => navigate("/publications")} />
          </div>

          {/* Footer Text */}
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

const ActivityItem = ({ label, onClick }) => (
  <span
    onClick={onClick}
    className="cursor-pointer text-2xl md:text-3xl font-semibold inline-block text-white py-1"
  >
    {label}
  </span>
);

export default ActivitySection;