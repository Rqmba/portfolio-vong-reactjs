import LogoCard from "../Components/LogoCard"
import logos from "../Data/logo"
import FadeIn from "../Components/FramerMotion/FadeIn"


function Skills() {

  return (
  <FadeIn> 
    <section className="container mx-auto px-6 mt-10">
      <h1 className="text-3xl font-bold mb-8 text-center text-gray-700">Mes compétences</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {logos.map((logo) => (
          <LogoCard key={logo.id} src={logo.src} alt={logo.alt} />
        ))}
      </div>
    </section>
  </FadeIn> 
  )
}

export default Skills