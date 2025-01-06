import ContainerCard from "../Components/ContainerCard";
import FadeIn from "../Components/FramerMotion/FadeIn";

function Project({ projects }) {
  return (
    <FadeIn>
      <section className="container mx-auto px-6 mt-10">
        <h1 className="text-3xl font-bold mb-8 text-center">Mes Projets</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <ContainerCard key={index} title={project.title}>
              <img
                src={project.picture}
                alt={project.title}
                className="w-full h-auto rounded-lg mb-4"
              />
              <p className="text-gray-700 dark:text-gray-300 mb-4">
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
      </section>
    </FadeIn>
  );
}

export default Project;
