import ProjectList from "../Components/ProjectList"
import Projectcard from "../Components/Projectcard"

function Project({ projects }) {
  return (
    <section className="container mx-auto px-6 mt-10">
      <h1 className="text-3xl font-bold mb-8 text-center">Mes Projets</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <Projectcard key={index}>
            <h2 className="text-lg font-bold mb-2">{project.title}</h2>
            <img
              src={project.picture}
              alt={project.title}
              className="w-full h-auto rounded-lg mb-4"
            />
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
          </Projectcard>
        ))}
      </div>
    </section>
  );
}

export default Project;
