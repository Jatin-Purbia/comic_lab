import { FaTimes } from "react-icons/fa";

const Sidebar = ({ menuOpen, setMenuOpen }) => {
  const comicCategories = [
    "Superhero", "Manga", "Sci-Fi", "Fantasy",
    "Horror", "Comedy", "Adventure", "Mystery"
  ];

  return (
    <div className={`fixed top-0 left-0 h-full w-72 bg-gray-200 p-6 transition-transform z-50 shadow-lg ${menuOpen ? "translate-x-0" : "-translate-x-72"}`}>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-bold text-blue-500">Comic Categories</h2>
        <FaTimes className="text-black text-2xl cursor-pointer" onClick={() => setMenuOpen(false)} />
      </div>
      <ul className="space-y-4">
        {comicCategories.map((category, index) => (
          <li key={index} className="p-3 bg-gray-300 rounded-lg hover:bg-blue-500 hover:text-white cursor-pointer transition text-lg">
            {category}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
