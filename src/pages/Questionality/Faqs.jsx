import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import bgImage from "../../assets/bg1.png";

const Faqs = () => {
  const navigate = useNavigate();
  return (
    <div
      className="relative h-screen w-full bg-cover bg-center flex flex-col justify-between text-white"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>
      
      {/* Back Button */}
      <button
        onClick={() => navigate(-1)}
        className="absolute top-4 left-4 z-20 bg-black bg-opacity-50 hover:bg-opacity-70 text-white px-4 py-2 rounded-md transition-all duration-200"
      >
        ← Back
      </button>
      
      <div className="relative z-10 text-center pt-16">
        <h1 className="text-7xl font-bold">FAQ's</h1>
        <h2 className="text-4xl font-bold mt-2">Readymade answers.</h2>
      </div>
      
      <div  className="relative z-10 flex flex-col items-center gap-4 py-8 bg-black bg-opacity-70 w-full"
        style={{ minHeight: "50vh" }}>
            <h2 className="text-3xl font-bold text-white">COMING SOON!!</h2>
          </div>
      <div className="relative z-10 text-center pb-10">
        
        <h3 className="text-5xl font-bold">WE WILL MAKE A DIFFERENCE TOGETHER</h3>
      </div>
    </div>
  );
};

const FaqItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className={`w-3/4 p-4 text-left transition-all duration-300 ${
        isOpen ? "bg-transparent" : "bg-transparent"
      }`}
      onClick={() => setIsOpen(!isOpen)}
    >
      <div className="cursor-pointer">
        <h4 className="text-center text-2xl font-semibold">{question}</h4>
      </div>
      <div
        className={`overflow-hidden transition-all duration-300 ${
          isOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <p className="text-center text-lg mt-2 text-gray-300">{answer}</p>
      </div>
    </div>
  );
};

export default Faqs;