import React from 'react';
import { useNavigate } from 'react-router-dom';
import bgImage from '../../assets/bg1.png';

function Scholar() {
  const navigate = useNavigate();

  return (
    <div
      className="relative h-screen w-full bg-cover bg-center flex flex-col justify-between text-white"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      {/* Back Button */}
      <button
        onClick={() => navigate(-1)}
        className="absolute top-4 left-4 z-20 bg-black bg-opacity-50 hover:bg-opacity-70 text-white px-4 py-2 rounded-md transition-all duration-200"
      >
        ← Back
      </button>

      {/* Top Section */}
      <div className="relative z-10 text-center pt-16">
        <h1 className="text-7xl font-bold">For Scholars</h1>
        <h2 className="text-4xl font-bold mt-2">Advance Comics Studies Research</h2>
      </div>

      {/* Middle Section */}
      <div
        className="relative z-10 flex flex-col items-center gap-4 py-8 bg-black bg-opacity-70 w-full"
        style={{ minHeight: "50vh" }}
      >
        <ul className="list-disc list-inside text-lg md:text-xl leading-relaxed space-y-2">
          <li>Ann Miller, University of Leicester</li>
          <li>Professor Anthony Fung, Chinese University of Hong Kong</li>
          <li>Boris Pun, Chinese University of Hong Kong</li>
          <li>Joan Ormrod, Routledge Journal of Graphic Novels and Comics</li>
          <li>Kinko Ito, University of Arkansas at Little Rock</li>
          <li>Maaheen Ahmed, Ghent University</li>
          <li>Simon Grennan, University of Chester</li>
          <li>Stephan Packard, University of Cologne</li>
          <li>Tahneer Oksman, Marymount Manhattan College</li>
        </ul>
      </div>

      {/* Footer Section */}
      <div className="relative z-10 text-center pb-10">
        <h3 className="text-5xl font-bold">
          WE WILL MAKE A DIFFERENCE TOGETHER
        </h3>
      </div>
    </div>
  );
}

export default Scholar;
