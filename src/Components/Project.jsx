function Project({ data }) {
  return (
    <div className="project-card">
      <h2>{data.title}</h2>
      <img src={data.picture} alt={data.title} />
      <a href={data.link}>Voir le projet</a>
      <p>{data.description}</p>
    </div>
  );
}

export default Project;
