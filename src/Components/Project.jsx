import Projectcard from "./Projectcard";

function Project({ data }) {
  return (
    <Projectcard>
      <h2>{data.title}</h2>
      <img src={data.picture} alt={data.title} />
      <a href={data.link}>Voir le projet</a>
      <p>{data.description}</p>
    </Projectcard>
  );
}

export default Project;
