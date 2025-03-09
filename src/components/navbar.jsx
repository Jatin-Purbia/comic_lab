import { FaBars } from "react-icons/fa";

const Navbar = ({ setMenuOpen }) => {
  return (
    <nav className="w-full bg-gray-100 py-4 px-8 flex justify-between items-center shadow-md sticky top-0 z-40">
      <div className="flex items-center space-x-6">
        <FaBars className="text-black text-2xl cursor-pointer" onClick={() => setMenuOpen(true)} />
        <h1 className="text-3xl font-bold text-blue-500">Comic Lab</h1>
      </div>
      <ul className="hidden md:flex space-x-8 text-lg">
        <li className="hover:text-blue-500 cursor-pointer">Home</li>
        <li className="hover:text-blue-500 cursor-pointer">About</li>
        <li className="hover:text-blue-500 cursor-pointer">Gallery</li>
        <li className="hover:text-blue-500 cursor-pointer">Contact</li>
      </ul>
    </nav>
  );
};

export default Navbar;
