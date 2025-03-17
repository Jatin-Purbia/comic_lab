import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import { Link } from "react-router-dom";

const Navbar = ({ setMenuOpen }) => {
  const [homeDropdown, setHomeDropdown] = useState(false);
  const [projectsDropdown, setProjectsDropdown] = useState(false);

  return (
    <nav className="w-full bg-white shadow-md border-b max-w-100vw">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <Link to="/" className="text-xl font-semibold text-gray-800">
            Your Logo/Title
          </Link>
        </div>
        <ul className="flex space-x-6 text-lg">
          <li className="px-3 py-2 hover:bg-gray-100 rounded-md transition-colors cursor-pointer">
            <Link to="/creations">Creations</Link>
          </li>
          <li
            className="px-3 py-2 hover:bg-gray-100 rounded-md transition-colors cursor-pointer relative flex items-center"
            onMouseEnter={() => setHomeDropdown(true)}
            onMouseLeave={() => setHomeDropdown(false)}
          >
            Home <FaChevronDown className="ml-1 text-sm" />
            {homeDropdown && (
              <ul
                className="absolute left-0 bottom-full mb-2 w-40 bg-white shadow-lg rounded-md overflow-hidden"
                style={{ whiteSpace: "nowrap" }} // Add this
              >
                <li className="px-4 py-2 hover:bg-gray-200 transition-colors cursor-pointer">
                  <Link to="/about">About</Link>
                </li>
                <li className="px-4 py-2 hover:bg-gray-200 transition-colors cursor-pointer">
                  <Link to="/members">Members</Link>
                </li>
                <li className="px-4 py-2 hover:bg-gray-200 transition-colors cursor-pointer">
                  <Link to="/contact">Contact</Link>
                </li>
              </ul>
            )}
          </li>
          <li className="px-3 py-2 hover:bg-gray-100 rounded-md transition-colors cursor-pointer">
            <Link to="/login">Login</Link>
          </li>
          <li className="px-3 py-2 hover:bg-gray-100 rounded-md transition-colors cursor-pointer">
            <Link to="/news">News</Link>
          </li>
          <li
            className="px-3 py-2 hover:bg-gray-100 rounded-md transition-colors cursor-pointer relative flex items-center"
            onMouseEnter={() => setProjectsDropdown(true)}
            onMouseLeave={() => setProjectsDropdown(false)}
          >
            Projects <FaChevronDown className="ml-1 text-sm" />
            {projectsDropdown && (
              <ul
                className="absolute left-0 bottom-full mb-2 w-48 bg-white shadow-lg rounded-md overflow-hidden"
                style={{ whiteSpace: "nowrap" }} // Add this
              >
                <li className="px-4 py-2 hover:bg-gray-200 transition-colors cursor-pointer">
                  <Link to="/dc">DC</Link>
                </li>
                <li className="px-4 py-2 hover:bg-gray-200 transition-colors cursor-pointer">
                  <Link to="/course">Course</Link>
                </li>
                <li className="px-4 py-2 hover:bg-gray-200 transition-colors cursor-pointer">
                  <Link to="/conference">Conference</Link>
                </li>
                <li className="px-4 py-2 hover:bg-gray-200 transition-colors cursor-pointer">
                  <Link to="/competitions">Competitions</Link>
                </li>
              </ul>
            )}
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;