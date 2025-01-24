import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { FaHome, FaProjectDiagram, FaUser, FaAddressBook, FaToolbox, FaPen } from "react-icons/fa";
import { CiWallet } from "react-icons/ci";


function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="bg-nav text-white shadow-l z-50">
      <nav className="relative container mx-auto p-6">
        {/* Flex container */}
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div
            className="flex items-center space-x-2 cursor-pointer hover:text-purple-600 transition duration-300"
            onClick={() => navigate('/')}
          >
            <CiWallet className="text-2xl" />
            <p className="font-bold text-lg text-gray-700">J.VONG Portfolio</p>
          </div>


          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6">
            <div
              className={`hover:text-purple-600 cursor-pointer flex items-center space-x-2  ${
               isActive('/') ? 'text-purple-600 cursor-pointer' : 'text-gray-700'
             }`}
              onClick={() => navigate('/')}
            >
              <FaHome className="text-2xl hover:scale-110 transition-transform duration-300" />
              <p className="text-sm">Accueil</p>
            </div>
            <div
              className={`hover:text-purple-600cursor-pointer flex items-center space-x-2  ${
                isActive('/projects') ? 'text-purple-600 cursor-pointer' : 'text-gray-700'
              }`}
              onClick={() => navigate('/projects')}
            >
              <FaProjectDiagram className="text-2xl hover:scale-110 transition-transform duration-300" />
              <p className="text-sm">Mes projets</p>
            </div>
            <div
              className={`hover:text-purple-600 cursor-pointer flex items-center space-x-2  ${
                isActive('/skills') ? 'text-purple-600 cursor-pointer' : 'text-gray-700'
              }`}
              onClick={() => navigate('/skills')}
            >
              <FaToolbox className="text-2xl hover:scale-110 transition-transform duration-300" />
              <p className="text-sm">Mes compétences</p>
            </div>
            <div
              className={`hover:text-purple-600 cursor-pointer flex items-center space-x-2  ${
                isActive('/blog') ? 'text-purple-600 cursor-pointer' : 'text-gray-700'
              }`}
              onClick={() => navigate('/blog')}
            >
              <FaPen className="text-2xl hover:scale-110 transition-transform duration-300" />
              <p className="text-sm">Blog</p>
            </div>
            <div
              className={`hover:text-purple-600 cursor-pointer flex items-center space-x-2  ${
                isActive('/about') ? 'text-purple-600 cursor-pointer' : 'text-gray-700'
              }`}
              onClick={() => navigate('/about')}
            >
              <FaUser className="text-2xl hover:scale-110 transition-transform duration-300" />
              <p className="text-sm">À mon sujet</p>
            </div>
            <div
              className={`hover:text-purple-600 cursor-pointer flex items-center space-x-2  ${
                isActive('/contact') ? 'text-purple-600 cursor-pointer' : 'text-gray-700'
              }`}
              onClick={() => navigate('/contact')}
            >
              <FaAddressBook className="text-2xl hover:scale-110 transition-transform duration-300" />
              <p className="text-sm">Contact</p>
            </div>
        </div>


          {/* Hamburger Icon */}
          <button
            aria-label="Toggle menu"
            aria-expanded={isOpen} 
            className={`hamburger md:hidden ${isOpen ? "open" : ""}`}
            onClick={toggleMenu}
          >
            <span className="hamburger-top"></span>
            <span className="hamburger-middle"></span>
            <span className="hamburger-bottom"></span>
          </button>
        </div>

        {/* Mobile Menu */}
          <div
            className={`absolute left-0 right-0 top-full bg-nav text-gray-700 py-6 px-4 flex flex-col items-center space-y-4 md:hidden transition-all duration-300 ${
              isOpen ? "opacity-100" : "opacity-0"
            }`}
          >

          <div
            className="hover:text-purple-600 cursor-pointer"
            onClick={() => {
              navigate('/');
              setIsOpen(false);
            }}
          >
            Accueil
          </div>
          <div
            className="hover:text-purple-600 cursor-pointer"
            onClick={() => {
              navigate('/projects');
              setIsOpen(false);
            }}
          >
            Mes projets
          </div>
          <div
            className="hover:text-purple-600 cursor-pointer"
            onClick={() => {
              navigate('/skills');
              setIsOpen(false);
            }}
          >
            Mes compétences
          </div>
          <div
            className="hover:text-purple-600 cursor-pointer"
            onClick={() => {
              navigate('/blog');
              setIsOpen(false);
            }}
          >
            Blog
          </div>
          <div
            className="hover:text-purple-600 cursor-pointer"
            onClick={() => {
              navigate('/about');
              setIsOpen(false);
            }}
          >
            À mon sujet
          </div>
          <div
            className="hover:text-purple-600 cursor-pointer"
            onClick={() => {
              navigate('/contact');
              setIsOpen(false);
            }}
          >
            Contact
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;


