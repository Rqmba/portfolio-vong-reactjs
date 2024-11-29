import ProjectList from "../Components/ProjectList"

function Explore({ projects }) {
  return (
    <>
    <section>
        <div className="container flex flex-col md:flex-row items-center px-6 mx-auto mt-10 space-y-0 md:space-y-0">
            <div className="flex flex-col mb-32 space-y-12 md:w-1/2">
                <h1 className="max-w-lg text-2xl font-bold text-center md:text-3xl md:text-left">
                    Vong Jordan
                </h1>
                <p className="max-w-sm text-center text-gray-400 md:text-left">
                    Je code principalement sous Node.js, React.js et PHP/Symfony.
                </p>
            </div>
        </div>
      </section>
      <h3>Projets</h3>
      <ProjectList projects={projects} />
    </>
  )
}

export default Explore