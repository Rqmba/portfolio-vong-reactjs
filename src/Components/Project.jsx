import Projectcard from "./ContainerCard";

function Project({ data }) {
  return (
    <Projectcard>
      <h2>{data.title}</h2>
      <img src={data.picture} alt={data.title} />
      <a href={data.link}>Voir le projet</a>
      <a href={data.github}>Voir le GitHub</a>
      <p>{data.description}</p>
      <p>{data.skill}</p>
    </Projectcard>
  );
}

export default Project;
