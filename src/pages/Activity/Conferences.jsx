import React from "react";
import { useNavigate } from "react-router-dom";
import bgImage from "../../assets/bg1.png";
import conferences from "../conferences/index.jsx";

const Conferences = () => {
  const navigate = useNavigate();
  return (
    <div className="relative min-h-screen w-full">
      {conferences()}
      
    </div>
  );
};


export default Conferences;