// import { useNavigate, useLocation } from "react-router-dom";
// import { FaHome, FaProjectDiagram, FaUser, FaAddressBook, FaToolbox, FaPen } from "react-icons/fa";

// function Navbar() {
//   const navigate = useNavigate();
//   const location = useLocation();

//   // Fonction pour vérifier si une route est active
//   const isActive = (path) => location.pathname === path;

//   return (
//     <header className="backdrop-blur-lg border-b">
//       <nav className="container mx-auto flex flex-col md:flex-row items-center justify-between px-6 py-4">
//         {/* Logo Section */}
//         <div className="flex items-center space-x-4">
//           <h1 className="text-xl font-bold"> J.VONG Portfolio &copy; 2024</h1>
//         </div>

//         {/* Navigation Links */}
//         <div className="flex flex-col md:flex-row justify-center space-x-8 mt-4 md:mt-0">
//           <div
//             onClick={() => navigate('/')}
//             className={`flex flex-col items-center cursor-pointer hover:text-green-400 ${
//               isActive('/') ? 'text-green-500 cursor-pointer' : 'text-gray-400'
//             }`}
//           >
//             <FaHome className="text-2xl mb-1" />
//             <p className="text-sm">Accueil</p>
//           </div>
//           <div
//             onClick={() => navigate('/projects')}
//             className={`flex flex-col items-center cursor-pointer hover:text-green-400 ${
//               isActive('/projects') ? 'text-green-500 cursor-pointer' : 'text-gray-400'
//             }`}
//           >
//             <FaProjectDiagram className="text-2xl mb-1" />
//             <p className="text-sm">Projects</p>
//           </div>
//           <div
//             onClick={() => navigate('/skills')}
//             className={`flex flex-col items-center cursor-pointer hover:text-green-400 ${
//               isActive('/skills') ? 'text-green-500 cursor-pointer' : 'text-gray-400'
//             }`}
//           >
//             <FaToolbox className="text-2xl mb-1" />
//             <p className="text-sm">Compétences</p>
//           </div>


//           <div
//             onClick={() => navigate('/blog')}
//             className={`flex flex-col items-center cursor-pointer hover:text-green-400 ${
//               isActive('/blog') ? 'text-green-500 cursor-pointer' : 'text-gray-400'
//             }`}
//           >
//             <FaPen className="text-2xl mb-1" />
//             <p className="text-sm">Blog</p>
//           </div>

//           <div
//             onClick={() => navigate('/about')}
//             className={`flex flex-col items-center cursor-pointer hover:text-green-400 ${
//               isActive('/about') ? 'text-green-500 cursor-pointer' : 'text-gray-400'
//             }`}
//           >
//             <FaUser className="text-2xl mb-1" />
//             <p className="text-sm">A propos</p>
//           </div>
//           <div
//             onClick={() => navigate('/contact')}
//             className={`flex flex-col items-center cursor-pointer hover:text-green-400 ${
//               isActive('/contact') ? 'text-green-500 cursor-pointer' : 'text-gray-400'
//             }`}
//           >
//             <FaAddressBook className="text-2xl mb-1" />
//             <p className="text-sm">Contact</p>
//           </div>
//         </div>
//       </nav>
//     </header>
//   );
// }

// export default Navbar;



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
    <>
      <nav className="relative container mx-auto p-6">
        {/* Flex container */}
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div
            className="flex items-center space-x-2 cursor-pointer hover:text-green-500 transition duration-300"
            onClick={() => navigate('/')}
          >
            <CiWallet className="text-2xl" />
            <p className="font-bold text-lg">J.VONG Portfolio</p>
          </div>


          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6">
            <div
              className={`hover:text-green-500 cursor-pointer flex items-center space-x-2  ${
               isActive('/') ? 'text-green-500 cursor-pointer' : 'text-gray-400'
             }`}
              onClick={() => navigate('/')}
            >
              <FaHome className="text-2xl" />
              <p className="text-sm">Accueil</p>
            </div>
            <div
              className={`hover:text-green-500 cursor-pointer flex items-center space-x-2  ${
                isActive('/projects') ? 'text-green-500 cursor-pointer' : 'text-gray-400'
              }`}
              onClick={() => navigate('/projects')}
            >
              <FaProjectDiagram className="text-2xl" />
              <p className="text-sm">Mes projets</p>
            </div>
            <div
              className={`hover:text-green-500 cursor-pointer flex items-center space-x-2  ${
                isActive('/skills') ? 'text-green-500 cursor-pointer' : 'text-gray-400'
              }`}
              onClick={() => navigate('/skills')}
            >
              <FaToolbox className="text-2xl" />
              <p className="text-sm">Mes compétences</p>
            </div>
            <div
              className={`hover:text-green-500 cursor-pointer flex items-center space-x-2  ${
                isActive('/blog') ? 'text-green-500 cursor-pointer' : 'text-gray-400'
              }`}
              onClick={() => navigate('/blog')}
            >
              <FaPen className="text-2xl" />
              <p className="text-sm">Blog</p>
            </div>
            <div
              className={`hover:text-green-500 cursor-pointer flex items-center space-x-2  ${
                isActive('/about') ? 'text-green-500 cursor-pointer' : 'text-gray-400'
              }`}
              onClick={() => navigate('/about')}
            >
              <FaUser className="text-2xl" />
              <p className="text-sm">À propos</p>
            </div>
            <div
              className={`hover:text-green-500 cursor-pointer flex items-center space-x-2  ${
                isActive('/contact') ? 'text-green-500 cursor-pointer' : 'text-gray-400'
              }`}
              onClick={() => navigate('/contact')}
            >
              <FaAddressBook className="text-2xl" />
              <p className="text-sm">Contact</p>
            </div>
        </div>


          {/* Hamburger Icon */}
          <button 
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
          className={`absolute left-0 right-0 top-full bg-gray-800 text-white py-6 px-4 flex flex-col items-center space-y-4 md:hidden transition-all duration-300 ${
            isOpen ? "block z-50" : "hidden"
          }`}
        >
          <div
            className="hover:text-green-500 cursor-pointer"
            onClick={() => {
              navigate('/');
              setIsOpen(false);
            }}
          >
            Accueil
          </div>
          <div
            className="hover:text-green-500 cursor-pointer"
            onClick={() => {
              navigate('/projects');
              setIsOpen(false);
            }}
          >
            Mes projets
          </div>
          <div
            className="hover:text-green-500 cursor-pointer"
            onClick={() => {
              navigate('/skills');
              setIsOpen(false);
            }}
          >
            Mes compétences
          </div>
          <div
            className="hover:text-green-500 cursor-pointer"
            onClick={() => {
              navigate('/blog');
              setIsOpen(false);
            }}
          >
            Blog
          </div>
          <div
            className="hover:text-green-500 cursor-pointer"
            onClick={() => {
              navigate('/about');
              setIsOpen(false);
            }}
          >
            A propos
          </div>
          <div
            className="hover:text-green-500 cursor-pointer"
            onClick={() => {
              navigate('/contact');
              setIsOpen(false);
            }}
          >
            Contact
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;


