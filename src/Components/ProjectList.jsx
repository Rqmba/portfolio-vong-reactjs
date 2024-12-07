import Project from "./Project";

function ProjectList({ projects }) {
  if (!projects || projects.length === 0) {
    return <p>Aucun projets disponible.</p>;
  }
  return (
    <section className="container mx-auto px-6 mt-10">
      <h1 className="text-3xl font-bold mb-6">Mes Projets</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {projects.map((project) => (
        <Project key={project.id} data={project} />
      ))}
    </div>
    </section>
  );
}

export default ProjectList;
