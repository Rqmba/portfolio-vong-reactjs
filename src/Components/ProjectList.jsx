import Project from "./Project";

function ProjectList({ projects }) {
  return (
    <div>
      {projects.map((project) => (
        <Project key={project.id} data={project} />
      ))}
    </div>
  );
}

export default ProjectList;
