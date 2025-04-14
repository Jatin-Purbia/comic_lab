import React from "react";
import bgImage from "../../assets/bg1.png";

const Questions = () => {
  return (
    <div
      className="relative h-screen w-full bg-cover bg-center flex flex-col justify-between text-white"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      {/* Top Section */}
      <div className="relative z-10 text-center pt-16">
        <h1 className="text-7xl font-bold">Questions</h1>
        <h2 className="text-4xl mt-4">Please ask.</h2>
      </div>

      {/* Middle Section */}
      <div
        className="relative z-10 flex flex-col items-center justify-center bg-black bg-opacity-60 w-full py-12"
        style={{ minHeight: "40vh" }}
      >
        <button className="text-3xl font-semibold underline cursor-pointer">
          Questions
        </button>
      </div>

      {/* Footer Section */}
      <div className="relative z-10 text-center pb-10">
        <h3 className="text-5xl font-bold">
          WE WILL MAKE A DIFFERENCE TOGETHER
        </h3>
      </div>
    </div>
  );
};

export default Questions;