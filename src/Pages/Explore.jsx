import ProjectList from "../Components/ProjectList"
import Projectcard from "../Components/Projectcard"
import { Navigate, useNavigate } from "react-router-dom"

function Explore({ projects }) {

  const featuredProjects = projects.slice(0, 3)

  const navigate = useNavigate()

  return (
    <>
      <section className="container mx-auto px-6 mt-10">
        <h1 className="text-3xl font-bold mb-6">
          Bienvenue sur mon Portfolio !
        </h1>
        <p className="text-gray-400 mb-10">
          Découvrez mes projets et mes compétences en développement web
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredProjects.map((project, index) => (
            <Projectcard 
            key={index}
            title={project.title}
            description={project.description}
            link={project.link}
            />
          ))}
        </div>

        <div className="mt-6 text-center">
          navigate(to('/projects'))
        </div>

      </section>


    </>
  )
}

export default Explore