import { useState } from "react";
import { FaBars, FaChevronDown } from "react-icons/fa";

const Navbar = ({ setMenuOpen }) => {
  const [homeDropdown, setHomeDropdown] = useState(false);
  const [projectsDropdown, setProjectsDropdown] = useState(false);

  return (
    <nav className="w-full bg-gray-100 py-4 px-8 flex justify-center gap-10 items-center shadow-md relative">
      {/* Navigation Links */}
      <ul className="flex space-x-6 text-lg">
        <li className="hover:text-blue-500 cursor-pointer">Creations</li>

        {/* Home Dropdown */}
        <li
          className="hover:text-blue-500 cursor-pointer relative flex items-center"
          onMouseEnter={() => setHomeDropdown(true)}
          onMouseLeave={() => setHomeDropdown(false)}
        >
          Home <FaChevronDown className="ml-1 text-sm" />
          {homeDropdown && (
            <ul className="absolute left-0 bottom-full mb-2 w-40 bg-white shadow-lg rounded-md overflow-hidden">
              <li className="hover:bg-gray-200 px-4 py-2 cursor-pointer">About</li>
              <li className="hover:bg-gray-200 px-4 py-2 cursor-pointer">Members</li>
              <li className="hover:bg-gray-200 px-4 py-2 cursor-pointer">Contact</li>
            </ul>
          )}
        </li>

        <li className="hover:text-blue-500 cursor-pointer">Login</li>
        <li className="hover:text-blue-500 cursor-pointer">News</li>

        {/* Projects Dropdown */}
        <li
          className="hover:text-blue-500 cursor-pointer relative flex items-center"
          onMouseEnter={() => setProjectsDropdown(true)}
          onMouseLeave={() => setProjectsDropdown(false)}
        >
          Projects <FaChevronDown className="ml-1 text-sm" />
          {projectsDropdown && (
            <ul className="absolute left-0 bottom-full mb-2 w-48 bg-white shadow-lg rounded-md overflow-hidden">
              <li className="hover:bg-gray-200 px-4 py-2 cursor-pointer">DC</li>
              <li className="hover:bg-gray-200 px-4 py-2 cursor-pointer">Course</li>
              <li className="hover:bg-gray-200 px-4 py-2 cursor-pointer">Conference</li>
              <li className="hover:bg-gray-200 px-4 py-2 cursor-pointer">Competitions</li>
            </ul>
          )}
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
