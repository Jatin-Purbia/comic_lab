import React from 'react';
import { useNavigate } from 'react-router-dom';
import bgImage from '../../assets/bg1.png';

function Creator() {
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
        <h1 className="text-7xl font-bold">Comics Creators</h1>
        <h2 className="text-4xl font-bold mt-2">The ones who drew.</h2>
      </div>

      {/* Middle Section */}
      <div
        className="relative z-10 flex flex-col items-center gap-4 py-8 bg-black bg-opacity-70 w-full"
        style={{ minHeight: "50vh" }}
      >
        <ul className="text-lg md:text-xl leading-relaxed space-y-1 mx-auto list-disc">
          <div className="flex flex-col items-center">
            <li className="text-center">David Huxley, Routledge Journal of Graphic Novels and Comics</li>
            <li className="text-center">Felipe Muhr, Ghent University</li>
            <li className="text-center">Makayla M. Lewis, Kingston University London</li>
            <li className="text-center">Nigar Nazar, Gogi Studios</li>
          </div>
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

export default Creator;