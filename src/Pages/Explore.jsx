import { useNavigate } from "react-router-dom";
import FadeIn from "../Components/FramerMotion/FadeIn";

function Explore({ projects }) {
  const featuredProjects = projects.slice(0, 3);
  const navigate = useNavigate();

  return (
  <FadeIn>  
    <section className="container mx-auto px-6 mt-10">
      <h1 className="text-3xl font-bold mb-6">Bienvenue sur mon Portfolio !</h1>
      <p className="text-gray-400 mb-10">
        Découvrez mes projets et mes compétences en développement web.
      </p>

      {/* Projets phares */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {featuredProjects.map((project, index) => (
          <div
            key={index}
            className="p-6 bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
          >
            <h2 className="text-lg font-bold mb-2">{project.title}</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              {project.description}
            </p>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline"
            >
              Voir le projet
            </a>
          </div>
        ))}
      </div>

      <div className="mt-6 text-center">
        <button
          onClick={() => navigate('/projects')}
          className="px-4 py-2 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600"
        >
          Voir tous les projets
        </button>
      </div>
    </section>
  </FadeIn>    
  );
}

export default Explore;




