import { useNavigate, useLocation } from "react-router-dom";
import { FaHome, FaProjectDiagram, FaUser, FaAddressBook, FaToolbox, FaPen } from "react-icons/fa";

function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();

  // Fonction pour vérifier si une route est active
  const isActive = (path) => location.pathname === path;

  return (
    <header className="backdrop-blur-lg border-b">
      <nav className="container mx-auto flex flex-col md:flex-row items-center justify-between px-6 py-4">
        {/* Logo Section */}
        <div className="flex items-center space-x-4">
          <h1 className="text-xl font-bold"> J.VONG Portfolio &copy; 2024</h1>
        </div>

        {/* Navigation Links */}
        <div className="flex flex-col md:flex-row justify-center space-x-8 mt-4 md:mt-0">
          <div
            onClick={() => navigate('/')}
            className={`flex flex-col items-center cursor-pointer hover:text-green-400 ${
              isActive('/') ? 'text-green-500' : 'text-gray-400'
            }`}
          >
            <FaHome className="text-2xl mb-1" />
            <p className="text-sm">Accueil</p>
          </div>
          <div
            onClick={() => navigate('/projects')}
            className={`flex flex-col items-center cursor-pointer hover:text-green-400 ${
              isActive('/projects') ? 'text-green-500' : 'text-gray-400'
            }`}
          >
            <FaProjectDiagram className="text-2xl mb-1" />
            <p className="text-sm">Projects</p>
          </div>
          <div
            onClick={() => navigate('/skills')}
            className={`flex flex-col items-center cursor-pointer hover:text-green-400 ${
              isActive('/skills') ? 'text-green-500' : 'text-gray-400'
            }`}
          >
            <FaToolbox className="text-2xl mb-1" />
            <p className="text-sm">Compétences</p>
          </div>


          <div
            onClick={() => navigate('/blog')}
            className={`flex flex-col items-center cursor-pointer hover:text-green-400 ${
              isActive('/blog') ? 'text-green-500' : 'text-gray-400'
            }`}
          >
            <FaPen className="text-2xl mb-1" />
            <p className="text-sm">Blog</p>
          </div>

          <div
            onClick={() => navigate('/about')}
            className={`flex flex-col items-center cursor-pointer hover:text-green-400 ${
              isActive('/about') ? 'text-green-500' : 'text-gray-400'
            }`}
          >
            <FaUser className="text-2xl mb-1" />
            <p className="text-sm">A propos</p>
          </div>
          <div
            onClick={() => navigate('/contact')}
            className={`flex flex-col items-center cursor-pointer hover:text-green-400 ${
              isActive('/contact') ? 'text-green-500' : 'text-gray-400'
            }`}
          >
            <FaAddressBook className="text-2xl mb-1" />
            <p className="text-sm">Contact</p>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
