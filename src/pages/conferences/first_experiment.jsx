import React from 'react';
import { useNavigate } from "react-router-dom";
import bgImage from "../../assets/bg1.png";
import emoji_hourglass from "../../assets/emoji_hourglass.png";
import emoji_music from "../../assets/emoji_music.png";

function FirstExperiment() {
  const navigate = useNavigate();

  return (
    <div
      className="relative min-h-screen bg-cover bg-center text-white overflow-auto"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black opacity-40"></div>

      {/* Back Button */}
      <button
                    onClick={() => navigate(-1)}
                    className="fixed top-4 left-4 z-20 bg-black bg-opacity-50 hover:bg-opacity-70 text-white px-4 py-2 rounded-md transition-all duration-200"
                >
                    ← Back
                </button>

      {/* Top Section */}
      <div className="relative z-10 text-center pt-24 pb-12">
        <h1 className="text-6xl font-extrabold">1st Experiment</h1>
        <h2 className="text-3xl mt-4">It was a virtual presentation.</h2>
        <h2 className="text-3xl mt-2">Natasha Thaudam</h2>
      </div>

      {/* Main Body Text */}
      <div className="relative z-10 flex flex-col items-center gap-6 py-6 bg-black bg-opacity-70 w-full px-6 sm:px-12 md:px-24" style={{ minHeight: '70vh' }}>
        <h1 className="text-3xl sm:text-4xl font-bold text-center mb-6">
          My Contribution: <br /> Comics Studies in Manipur
        </h1>

        {/* Alternative Concept of Time */}
        <div className="flex flex-col md:flex-row justify-between items-start gap-8 w-full max-w-screen-xl">
          <div className="flex-1">
            <h2 className="text-3xl sm:text-4xl font-bold underline mb-4">Alternative Concept of Time</h2>
            <p className="text-xl sm:text-2xl leading-relaxed">
              “The old common saying regarding Meetei [Meitei] concept of time, ‘64 mikup (moments) make a pung (at present “hour” is called pung in Manipuri [Meiteilon]). 8 pung make a yuthak. 8 yuthak make a day.’ So, there are 8 × 8 = 64 pung in a day” (p. 287)
              <br />
              Hence, there are 64 hours in a day instead of 24.
            </p>

            {/* Emoji */}
            <div className="flex justify-center items-center mt-6">
              <img
                src={emoji_hourglass}
                alt="Hourglass Emoji"
                className="w-20 h-20 object-contain"
              />
            </div>
          </div>

          {/* Alternative Aesthetic Theory */}
          <div className="flex-1">
            <h2 className="text-3xl sm:text-4xl font-bold underline mb-4">Alternative Aesthetic Theory</h2>
            <p className="text-xl sm:text-2xl leading-relaxed">
              "The classical Meiteized Raslila is not based on the 9 rasas of Hindu Natyashastra but on the 64 rasas of Meitei Nata-Sankirtana" (pp. 296-7; derived from Sougaijam Thanil: Rasa Humphumari Seksa or The Songs of Sixty-four Rasas).
            </p>

            {/* Emoji */}
            <div className="flex justify-center items-center mt-6">
              <img
                src={emoji_music}
                alt="Music Emoji"
                className="w-20 h-20 object-contain"
              />
            </div>
          </div>
        </div>

        {/* Source */}
        <p className="text-lg sm:text-xl mt-8 text-center">
          Source: Usham Rojiro (2018): “Subdued Eloquence: Poetics of Body Movement, Time and Space.”
        </p>
      </div>

      {/* Bottom Footer Text */}
      <div className="relative z-10 text-center pb-16">
        <h3 className="text-4xl sm:text-5xl font-semibold">
          WE WILL MAKE A DIFFERENCE TOGETHER
        </h3>
      </div>
    </div>
  );
}

export default FirstExperiment;
