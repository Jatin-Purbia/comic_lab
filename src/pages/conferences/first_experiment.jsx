import React from 'react';
import { useNavigate } from "react-router-dom";
import bgImage from "../../assets/bg1.png";
import emoji_hourglass from "../../assets/emoji_hourglass.png";
import emoji_music from "../../assets/emoji_music.png";

const FirstExperiment = () => {
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
          onClick={() => navigate(-1)}
          className="fixed top-4 left-4 z-20 bg-black bg-opacity-50 hover:bg-opacity-70 text-white px-4 py-2 rounded-md transition-all duration-200"
        >
          ← Back
        </button>

        {/* Content */}
        <div className="flex-1 flex flex-col items-center justify-center text-center py-12 md:py-16">
          <div className="text-center">
            <h1 className="text-6xl md:text-7xl font-bold text-white">First Experiment</h1>
            <h2 className="text-3xl md:text-4xl font-bold mt-2 text-white">
              Our Research
            </h2>
          </div>

          <div className="flex flex-col items-center gap-2 md:gap-3 py-6 md:py-8 bg-black bg-opacity-70 w-full">
            <h1 className="text-3xl font-bold text-center">
              My Contribution: <br /> Comics Studies in Manipur
            </h1>

            {/* Alternative Concept of Time */}
            <div className="flex flex-col md:flex-row justify-between items-start gap-8 w-full max-w-9xl">
              <div className="flex-1">
                <h2 className="text-2xl font-bold underline">Alternative Concept of Time</h2>
                <p className="text-lg mt-2">
                "The old common saying regarding Meetei [Meitei] concept of time, '64 mikup (moments) make a pung (at present "hour" is called pung in Manipuri [Meiteilon]). 8 pung make a yuthak. 8 yuthak make a day.' So, there are 8 × 8 = 64 pung in a day" (p. 287)
                <br/>Hence, there are 64 hours in a day instead of 24.
                </p>

                {/* Emoji */}
                <div className="flex justify-center items-center mt-4">
                  <img
                    src={emoji_hourglass}
                    alt="Hourglass Emoji"
                    className="w-16 h-16 object-contain"
                  />
                </div>
              </div>

              {/* Alternative Aesthetic Theory */}
              <div className="flex-1">
                <h2 className="text-2xl font-bold underline">Alternative Aesthetic Theory</h2>
                <p className="text-lg mt-2">
                  "The classical Meiteized Raslila is not based on the 9 rasas of Hindu Natyashastra but on the 64 rasas of Meitei Nata-Sankirtana" (pp. 296-7; derived from Sougaijam Thanil: Rasa Humphumari Seksa or The Songs of Sixty-four Rasas).
                </p>
                {/* Emoji */}
                <div className="flex justify-center items-center mt-4">
                  <img
                    src={emoji_music}
                    alt="Music Emoji"
                    className="w-16 h-16 object-contain"
                  />
                </div>
              </div>
            </div>

            {/* Source */}
            <p className="text-sm mt-4 text-center">
              Source: Usham Rojiro (2018): "Subdued Eloquence: Poetics of Body Movement, Time and Space."
            </p>
          </div>

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

export default FirstExperiment;
