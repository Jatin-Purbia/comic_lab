import React from "react";
import { useNavigate } from "react-router-dom";
import bgImage from "../../assets/test-1.jpg"; // Import the background image

const QuestionalitySection = () => {
  const navigate = useNavigate(); // Hook to handle navigation

  return (
    <div
      className="relative h-screen w-full flex flex-col items-center justify-center text-center bg-cover bg-center"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      {/* Content */}
      <div className="relative z-10 text-white px-6">
        <h1 className="text-4xl font-bold">QUESTIONALITY</h1>
        <h2 className="text-lg font-semibold mt-1">
          If you want to know more, ask questions
        </h2>

        {/* Buttons as Navigation Links */}
        <div className="bg-black bg-opacity-70 px-10 py-6 rounded-lg mt-4 space-y-4">
          <button
            onClick={() => navigate("/faqs")}
            className="block w-full bg-green-600 hover:bg-green-700 py-2 rounded-md text-lg font-medium"
          >
            FAQs
          </button>
          <button
            onClick={() => navigate("/questions")}
            className="block w-full bg-blue-600 hover:bg-blue-700 py-2 rounded-md text-lg font-medium"
          >
            Questions
          </button>
        </div>

        {/* Footer Text */}
        <h3 className="text-xl font-bold mt-6">
          WE WILL MAKE A DIFFERENCE TOGETHER
        </h3>
      </div>
    </div>
  );
};

export default QuestionalitySection;
