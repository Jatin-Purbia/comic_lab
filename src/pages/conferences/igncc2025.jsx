import React from "react";
import { useNavigate } from "react-router-dom";
import bgImage from "../../assets/bg1.png";

const IGNCC2025 = () => {
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
            <h1 className="text-5xl md:text-8xl font-bold text-white">IGNCC 2025</h1>
            <h2 className="text-3xl md:text-4xl font-bold mt-2 text-white pb-7">
              International Conference
            </h2>
          </div>

          <div
            className="flex flex-col items-center gap-3 py-6 md:py-8 bg-black bg-opacity-70 w-full md:w-full rounded-none overflow-y-auto "
            style={{ maxHeight: "720px" }} // Adjust as needed for scrollable area
          >
            <div className="text-white text-2xl md:text-lg space-y-4 px-4 md:px-24">
              <div>
                <span className="font-semibold text-3xl">
                  Bhasswati Bhattacharjee, Rahul Ahuja, and Mayank Dahiya:
                </span>
                <br />
                “Representation of Greed and Excess in Digital Comics”
              </div>
              <div>
                <span className="font-semibold text-2xl">Natasa Thoudam:</span>
                <br />
                “Reborn to Be Eaten: The Cannibalistic Resurrection of Sanarembi”
              </div>
              <div>
                <span className="font-semibold text-2xl">Priyanka Das and Anuj Trivedi:</span>
                <br />
                “Tasting of Visual Textures: Experiencing War Comics Through Children’s Drawings in Virtual Reality”
              </div>
              <div>
                <span className="font-semibold text-2xl">
                  Samyuktha A., Shardul Vikram, V. Sonic, K. Vatsal, and S. Yash Kumar:
                </span>
                <br />
                “Famine and Famish: Memory of Food and Starvation in Postwar Japanese Manga”
              </div>
              <div>
                <span className="font-semibold text-2xl">
                  Swarmina Banerjee, Sarthak Bhivaji Kolekar, Dhamgunde Nishikant Prashant, and Tejas Joshi:
                </span>
                <br />
                “Spaces as Distasteful in Bengali Detective/Superhero Comics”
              </div>
              <div>
                <span className="font-semibold text-2xl">Uddipana Kalita:</span>
                <br />
                “THE INTERSECTION OF POWER AND TASTE OF FASHION: SUPERHERO SUITES IN WINGSTAR: THE RELUCTANT SUPERHERO”
              </div>
            </div>
          </div>


          <div className="text-center py-6 md:pb-10">
            <h3 className="text-3xl md:text-4xl font-bold text-white">
              WE WILL MAKE A DIFFERENCE TOGETHER
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IGNCC2025;
