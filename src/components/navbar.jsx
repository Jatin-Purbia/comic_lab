import { useState } from "react";
import {
  FaChevronDown,
  FaHome,
  FaNewspaper,
  FaProjectDiagram,
  FaSignInAlt,
  FaMagic,
  FaInfoCircle,
  FaUsers,
  FaEnvelope,
  FaDiceD20,
  FaBook,
  FaCalendarAlt,
  FaTrophy,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const Navbar = ({ setMenuOpen }) => {
  const [homeDropdown, setHomeDropdown] = useState(false);
  const [projectsDropdown, setProjectsDropdown] = useState(false);

  return (
    <nav className="w-full bg-white shadow-md border-b max-w-100vw">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <Link to="/" className="text-xl font-semibold text-gray-800 flex items-center">
            <FaHome className="mr-2" /> Your Logo/Title
          </Link>
        </div>
        <ul className="flex space-x-6 text-lg">
          <li className="px-4 py-3 hover:bg-gray-100 rounded-md transition-colors cursor-pointer flex items-center">
            <Link to="/creations" className="flex items-center">
              <FaMagic className="mr-2" /> Creations
            </Link>
          </li>
          <li
            className="px-4 py-3 hover:bg-gray-100 rounded-md transition-colors cursor-pointer relative flex items-center"
            onMouseEnter={() => setHomeDropdown(true)}
            onMouseLeave={() => setHomeDropdown(false)}
          >
            <FaHome className="mr-2" /> Home <FaChevronDown className="ml-1 text-sm" />
            {homeDropdown && (
              <ul
                className="absolute left-0 bottom-full mb-2 w-40 bg-white shadow-lg rounded-md overflow-hidden"
                style={{ whiteSpace: "nowrap" }}
              >
                <li className="px-4 py-2 hover:bg-gray-200 transition-colors cursor-pointer flex items-center">
                  <Link to="/about" className="flex items-center">
                    <FaInfoCircle className="mr-2" /> About
                  </Link>
                </li>
                <li className="px-4 py-2 hover:bg-gray-200 transition-colors cursor-pointer flex items-center">
                  <Link to="/members" className="flex items-center">
                    <FaUsers className="mr-2" /> Members
                  </Link>
                </li>
                <li className="px-4 py-2 hover:bg-gray-200 transition-colors cursor-pointer flex items-center">
                  <Link to="/contact" className="flex items-center">
                    <FaEnvelope className="mr-2" /> Contact
                  </Link>
                </li>
              </ul>
            )}
          </li>
          <li className="px-4 py-3 hover:bg-gray-100 rounded-md transition-colors cursor-pointer flex items-center">
            <Link to="/login" className="flex items-center">
              <FaSignInAlt className="mr-2" /> Login
            </Link>
          </li>
          <li className="px-4 py-3 hover:bg-gray-100 rounded-md transition-colors cursor-pointer flex items-center">
            <Link to="/news" className="flex items-center">
              <FaNewspaper className="mr-2" /> News
            </Link>
          </li>
          <li
            className="px-4 py-3 hover:bg-gray-100 rounded-md transition-colors cursor-pointer relative flex items-center"
            onMouseEnter={() => setProjectsDropdown(true)}
            onMouseLeave={() => setProjectsDropdown(false)}
          >
            <FaProjectDiagram className="mr-2" /> Projects <FaChevronDown className="ml-1 text-sm" />
            {projectsDropdown && (
              <ul
                className="absolute left-0 bottom-full mb-2 w-48 bg-white shadow-lg rounded-md overflow-hidden"
                style={{ whiteSpace: "nowrap" }}
              >
                <li className="px-4 py-2 hover:bg-gray-200 transition-colors cursor-pointer flex items-center">
                  <Link to="/dc" className="flex items-center">
                    <FaDiceD20 className="mr-2" /> DC
                  </Link>
                </li>
                <li className="px-4 py-2 hover:bg-gray-200 transition-colors cursor-pointer flex items-center">
                  <Link to="/course" className="flex items-center">
                    <FaBook className="mr-2" /> Course
                  </Link>
                </li>
                <li className="px-4 py-2 hover:bg-gray-200 transition-colors cursor-pointer flex items-center">
                  <Link to="/conference" className="flex items-center">
                    <FaCalendarAlt className="mr-2" /> Conference
                  </Link>
                </li>
                <li className="px-4 py-2 hover:bg-gray-200 transition-colors cursor-pointer flex items-center">
                  <Link to="/competitions" className="flex items-center">
                    <FaTrophy className="mr-2" /> Competitions
                  </Link>
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