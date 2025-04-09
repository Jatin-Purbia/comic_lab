import React from "react";
import { Link } from "react-router-dom";
import bgImage from "../../assets/test-1.jpg";

const ActivitySection = () => {
  const activities = [
    { label: "Competitions", path: "/competitions" },
    { label: "Conferences", path: "/conferences" },
    { label: "Courses", path: "/courses" },
    { label: "Events", path: "/events" },
    { label: "Projects", path: "/projects" },
    { label: "Publications", path: "/publications" },
  ];

  return (
    <div
      className="relative h-screen w-full flex flex-col items-center justify-center text-center bg-cover bg-center"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      {/* Content */}
      <div className="relative z-10 text-white px-6">
        <h1 className="text-4xl font-bold">ACTIVITY</h1>
        <h2 className="text-lg font-semibold mt-1">WHAT DO WE DO?</h2>

        {/* Activities List as Buttons */}
        <div className="bg-black bg-opacity-70 px-10 py-6 rounded-lg mt-4">
          <ul className="space-y-4 text-lg font-medium">
            {activities.map((activity, index) => (
              <li key={index}>
                <Link
                  to={activity.path}
                  className="block bg-white text-black hover:bg-[#3c602f] hover:text-white px-4 py-2 rounded transition duration-300"
                >
                  {activity.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Footer Text */}
        <h3 className="text-xl font-bold mt-6">
          WE WILL MAKE A DIFFERENCE TOGETHER
        </h3>
      </div>
    </div>
  );
};

export default ActivitySection;
