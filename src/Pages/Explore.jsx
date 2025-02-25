import { useNavigate} from "react-router-dom";
import ContainerCard from "../Components/ContainerCard";
import FadeIn from "../Components/FramerMotion/FadeIn";
import { FaFolderOpen, FaBookOpen } from "react-icons/fa6";
import { FaEnvelope } from "react-icons/fa";

function Explore({ projects }) {

  const navigate = useNavigate();

  return (
  <FadeIn>
  <section className="container mx-auto px-6 mt-10">
    
  <h1 className="text-3xl text-center font-bold mb-6 text-gray-700">Bienvenue, je suis Vong Jordan !</h1>
    <p className="text-gray-700 text-center mb-10">
      Développeur passionné en reconversion, je crée principalement des projets avec React.JS et Node.js.
    </p>

    <h2 className="text-2xl text-center font-bold mb-6 text-gray-700">Mes compétences</h2>

    <div className="flex justify-center gap-4 mb-12 mt-6">
      <span className="px-3 py-1 bg-gray-200 text-gray-800 rounded-lg">React.js</span>
      <span className="px-3 py-1 bg-gray-200 text-gray-800 rounded-lg">Node.js</span>
      <span className="px-3 py-1 bg-gray-200 text-gray-800 rounded-lg">MongoDB</span>
      <span className="px-3 py-1 bg-gray-200 text-gray-800 rounded-lg">TailwindCSS</span>
    </div>

    <h2 className="text-2xl text-center mb-6 mt-6 font-bold text-gray-700">Voici mes derniers projets</h2>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {projects
      .slice(-3)
      .map((project, index) => (
        <ContainerCard key={index} title={project.title}>
          <img
            src={project.picture}
            alt={project.title}
            className="w-full h-auto rounded-lg mb-4"
          />
          <p className="text-gray-700 mb-4">
            {project.description}
          </p>

          <div className="flex flex-wrap gap-2 mt-4 mb-4">
                {project.skill.split(", ").map((skill, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 text-xs font-semibold bg-purple-600 text-white rounded-full"
                    >
                      {skill}
                    </span>
                ))}
          </div>

          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline"
          >
            Voir le projet
          </a>
        </ContainerCard>
      ))}
    </div>

    <div className="flex flex-col items-center gap-4 mt-10">
      <button
        onClick={() => navigate('/projects')}
        className="flex items-center justify-center px-4 py-2 bg-purple-600 text-white font-semibold rounded-lg hover:bg-purple-700 transition hover:scale-105"
      >
        <FaFolderOpen className="mr-2" /> Voir tous mes projets
      </button>

      <h1 className="text-3xl text-center font-bold mb-6 mt-6 text-gray-700">A propos de moi</h1>
      <p className="text-gray-700 mb-4">
        Développeur passionné en reconversion, je suis en train de construire mon parcours dans le développement web.
      </p>
      <p className="text-gray-700 mb-4">
        Je me spécialise actuellement dans <strong>React.js</strong>, un framework que j'apprécie particulièrement pour sa flexibilité et sa popularité.
      </p>
      <p className="text-gray-700 mb-4">
        Mon objectif est de maîtriser d'autres outils modernes tels que <strong>Laravel</strong> et <strong>Next.js</strong> pour élargir mes compétences et créer des solutions adaptées aux besoins des entreprises.
      </p>
      <p className="text-gray-700 mb-6">
        <em>
          N'hésitez pas à parcourir mon portfolio pour découvrir mes projets ou à me contacter directement pour discuter d'opportunités professionnelles.
        </em>
      </p>
      <button
        onClick={() => navigate('/about')}
        className="flex items-center justify-center px-4 py-2 bg-purple-600 text-white font-semibold rounded-lg hover:bg-purple-700 transition hover:scale-105"
      >
        <FaBookOpen className="mr-2" /> En savoir plus sur moi
      </button>
      <button
        onClick={() => navigate('/contact')}
        className="flex items-center justify-center px-4 py-2 bg-purple-600 text-white font-semibold rounded-lg hover:bg-purple-700 transition hover:scale-105"
      >
        <FaEnvelope className="mr-2" /> Vous avez une opportunité ? Contactez-moi directement !
      </button>
    </div>

  </section>
</FadeIn>
  );
}

export default Explore;




