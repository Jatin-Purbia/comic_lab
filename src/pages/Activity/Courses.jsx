import React from "react";

const Courses = () => {
  return (
    <div className="h-screen flex items-center justify-center text-3xl font-bold">
      {/* Back Button */}
      <button
        onClick={() => navigate(-1)}
        className="absolute top-4 left-4 z-20 bg-black bg-opacity-50 hover:bg-opacity-70 text-white px-4 py-2 rounded-md transition-all duration-200"
      >
        ← Back
      </button>
      Courses   
    </div>
  );
};

export default Courses;