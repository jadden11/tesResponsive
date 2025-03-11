import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div>
            <h1 className="font-afacad text-3xl bg-gradient-to-r from-[#BC3CD8] to-[#C54B8C] text-transparent bg-clip-text font-semibold">
              Mzar
            </h1>
          </div>
          {/* NAV MENU */}
          <div className="hidden md:flex space-x-6">
            <Link
              to="/"
              className="relative bg-gradient-to-r from-[#BC3CD8] to-[#C54B8C] text-transparent bg-clip-text font-inter font-semibold hover:text-blue-600 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-blue-600 after:transition-all after:duration-300 hover:after:w-full"
            >
              HOME
            </Link>
            <Link
              to="/"
              className="relative bg-gradient-to-r from-[#BC3CD8] to-[#C54B8C] text-transparent bg-clip-text font-inter font-semibold hover:text-blue-600 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-blue-600 after:transition-all after:duration-300 hover:after:w-full"
            >
              ABOUT
            </Link>
            <Link
              to="/"
              className="relative bg-gradient-to-r from-[#BC3CD8] to-[#C54B8C] text-transparent bg-clip-text font-inter font-semibold hover:text-blue-600 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-blue-600 after:transition-all after:duration-300 hover:after:w-full"
            >
              CONTACT
            </Link>
          </div>
          {/* MOBILE MENU */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* MOBILE MENU */}
      {isOpen && (
        <div className="md:hidden w-full">
          <div className="flex flex-col space-y-4 p-4">
            <Link
              to="/"
              className="relative text-white font-inter font-semibold hover:text-blue-600 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-blue-600 after:transition-all after:duration-300 hover:after:w-full"
            >
              HOME
            </Link>
            <Link
              to="/"
              className="relative text-white font-inter font-semibold hover:text-blue-600 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-blue-600 after:transition-all after:duration-300 hover:after:w-full"
            >
              ABOUT
            </Link>
            <Link
              to="/"
              className="relative text-white font-inter font-semibold hover:text-blue-600 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-blue-600 after:transition-all after:duration-300 hover:after:w-full"
            >
              CONTACT
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
