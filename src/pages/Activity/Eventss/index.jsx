import React from "react";
import { useNavigate } from "react-router-dom";
import bgImage from "../../../assets/bg1.png";

const Events = () => {
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
      <div className="relative z-10 min-h-screen flex flex-col overflow-y-auto">
        {/* Back Button */}
        <button
          onClick={() => navigate(-1)}
          className="fixed top-4 left-4 z-20 bg-black bg-opacity-50 hover:bg-opacity-70 text-white px-4 py-2 rounded-md transition-all duration-200"
        >
          ← Back
        </button>

        {/* Content */}
        <div className="flex-1 flex flex-col items-center justify-center text-center py-12 md:py-16">
          <div className="text-center">
            <h1 className="text-6xl md:text-7xl font-bold text-white">Events</h1>
            <h2 className="text-3xl md:text-4xl font-bold mt-2 text-white py-1">
              We also organise these
            </h2>
          </div>

          {/* Black Transparent Div */}
          <div
            className="relative z-10 flex flex-col items-center gap-8 py-8 bg-black bg-opacity-70 w-full text-white"
            style={{ minHeight: "50vh" }}
          >
            <h2 className="text-4xl font-bold mb-6">Graphic Artist Series</h2>
            <div className="flex flex-col items-center gap-6 text-2xl">

              {/* Using EventItem */}
              <EventItem
                name="1. Felipe Muhr"
                date="10 March 2025"
                onClick={() => navigate("/felipe-muhr")}
              />
              <EventItem
                name="2. David Huxley"
                date="7 April 2025"
                onClick={() => navigate("/david-huxley")}
              />

            </div>
          </div>

          {/* Bottom Text */}
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

const EventItem = ({ name, date, onClick }) => {
  return (
    <div className="text-center cursor-pointer" onClick={onClick}>
      <span className="font-bold underline">{name}</span>
      <div>({date})</div>
    </div>
  );
};

export default Events;