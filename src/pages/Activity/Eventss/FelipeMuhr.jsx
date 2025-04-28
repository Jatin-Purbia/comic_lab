import React from "react";
import { useNavigate } from "react-router-dom";
import bgImage from "../../../assets/bg1.png";
import felipeImage from "../../../assets/felipemuhr.png";

const FelipeMuhr = () => {
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
                    <div className="text-center pb-2">
                        <h1 className="text-6xl md:text-7xl font-bold text-white">Felipe Muhr</h1>
                        <h2 className="text-3xl md:text-4xl font-bold mt-2 text-white py-1">
                            10 March 2025
                        </h2>
                    </div>

                    {/* Black Transparent Div */}
                    <div
                        className="relative z-10 flex flex-col justify-center items-center gap-8 py-2 bg-black bg-opacity-70 w-full text-white"
                        style={{ minHeight: "50vh" }}
                    >
                        <div>
                            <img
                                src={felipeImage}
                                className="w-1/2 mx-auto h-auto object-contain mt-4 rounded-md" // Centered image
                            />
                        </div>
                        <div className="flex flex-col items-center gap-6 text-2xl">
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

export default FelipeMuhr;