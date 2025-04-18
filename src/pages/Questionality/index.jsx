import React from "react";
import { useNavigate } from "react-router-dom";
import bgImage from "../../assets/bg1.png";
const QuestionalitySection = () => {
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
        <h1 className="text-7xl font-bold">QUESTIONALITY</h1>
        <h2 className="text-4xl font-bold mt-2">
          If you want to know more, ask questions
        </h2>
      </div>


      <div
        className="relative z-10 flex flex-col items-center gap-4 py-8 bg-black bg-opacity-70 w-full"
        style={{ minHeight: "50vh" }}
      >
        <QuestionalityItem label="FAQs" onClick={() => navigate("/faqs")} />
        <QuestionalityItem label="Questions" onClick={() => navigate("/questions")} />
      </div>

      <div className="relative z-10 text-center pb-10">
        <h3 className="text-5xl font-bold">
          WE WILL MAKE A DIFFERENCE TOGETHER
        </h3>
      </div>
    </div>
  );
};

const QuestionalityItem = ({ label, onClick }) => (
  <span
    onClick={onClick}
    className="cursor-pointer text-3xl font-semibold inline-block"
  >
    {label}
  </span>
);

export default QuestionalitySection;