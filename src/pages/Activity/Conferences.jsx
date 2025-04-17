import React from "react";
import conferences from "../conferences/index.jsx";

const Conferences = () => {
  return (
    <div>
      {/* Back Button */}
      <button
        onClick={() => navigate(-1)}
        className="absolute top-4 left-4 z-20 bg-black bg-opacity-50 hover:bg-opacity-70 text-white px-4 py-2 rounded-md transition-all duration-200"
      >
        ← Back
      </button>
    </div>
  );
};

export default Conferences;