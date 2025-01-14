import { useNavigate } from "react-router-dom";
import { IoShareSocial } from "react-icons/io5";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

function Footer() {
  const navigate = useNavigate();

  return (
    <footer className="bg-gray-900 text-gray-300 py-6 shadow-lg mt-8">
      {/* Container principal */}
      <div className="container flex flex-col md:flex-row justify-between items-center mx-auto px-6 space-y-6 md:space-y-0">
        {/* Section gauche : Infos sur le développeur */}
        <div className="flex flex-col text-center md:text-left space-y-3">
          <h3 className="text-lg font-bold text-white">Vong Jordan</h3>
          <p>Passionné par le développement web et la création de solutions modernes.</p>
          <p>En reconversion pour devenir un développeur web compétent et polyvalent.</p>
          <h3 className="mt-4 font-semibold text-purple-400">
            Intéressé par mes projets ?
          </h3>
          <button
            onClick={() => navigate('/contact')}
            className="mt-2 px-4 py-2 bg-purple-500 text-white rounded-lg hover:bg-purple-600 hover:scale-110 transition-transform duration-300"
          >
            Contactez-moi
          </button>
        </div>

        {/* Section centrale : Liens sociaux */}
        <div className="flex flex-col items-center space-y-3">
          {/* Icône principale */}
          <IoShareSocial className="text-purple-500 h-10 w-10" />
          <p className="text-lg font-semibold">Réseaux sociaux</p>
          {/* Icônes des réseaux sociaux */}
          <div className="flex space-x-4">
            <a
              href="https://github.com/Rqmba"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="hover:text-white hover:scale-110 transition-transform duration-300"
            >
              <FaGithub className="h-8 w-8" />
            </a>
            <a
              href="https://www.linkedin.com/in/jordan-vong-05aa4a266/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="hover:text-white hover:scale-110 transition-transform duration-300"
            >
              <FaLinkedin className="h-8 w-8" />
            </a>
          </div>
        </div>

        {/* Section droite : Droits d'auteur */}
        <div className="text-center md:text-right">
          <p>&copy; 2024, Made by Vong Jordan</p>
          <p className="text-sm text-gray-400">
            Tous droits réservés | Portfolio personnel
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
