import FadeIn from "../Components/FramerMotion/FadeIn";


function About() {
  return (
    <FadeIn>
      <div className="container mx-auto px-6 py-12 rounded-lg shadow-lg">
        {/* Section principale */}
        <div className="flex flex-col md:flex-row items-center gap-10">
          {/* Colonne de gauche */}
          <div className="flex flex-col md:w-1/2 space-y-6 text-center md:text-left">
            <h1 className="text-4xl font-extrabold text-gray-700">
              Vong Jordan
            </h1>
            <h2 className="text-2xl font-semibold text-gray-700">
              Développeur Fullstack
            </h2>
            <p className="text-lg leading-relaxed text-gray-700">
              Je code principalement sous{" "}
              <span className="text-cyan-400">Node.js</span>,{" "}
              <span className="text-blue-400">Angular</span>,{" "}
              <span className="text-blue-500">React.js</span>, et{" "}
              <span className="text-purple-400">PHP/Symfony</span>.
            </p>
          </div>

          {/* Colonne de droite avec une image */}
          <div className="flex flex-col items-center md:w-1/2 space-y-6">
            <img
              src="/Docs/PhotoProfil.jpg"
              alt="Photo de Vong Jordan"
              className="w-1/2 h-auto rounded-full shadow-md"
            />
          </div>
        </div>

        {/* Ligne séparatrice */}
        <hr className="my-10" />

        {/* Section secondaire */}
        <div className="grid md:grid-cols-2 gap-8">
          <p className="text-justify leading-relaxed text-lg text-gray-700">
            Diplômé depuis juillet 2024, d'un titre de développeur, je recherche
            un poste de développeur, plus précisément dans le front-end. J'ai
            obtenu ce diplôme dans le cadre d'une reconversion, car mon secteur
            actuel de travail me déplait et offre peu de perspectives
            d'évolution. Pendant ma formation, j'ai appris les langages de base,
            c'est-à-dire HTML, CSS, JavaScript, PHP. J'apprends actuellement en
            autodidacte Angular, React.js et Node.js. En attendant d'obtenir une
            opportunité pour un poste, je réalise différents projets, sous
            différents langages, pour améliorer mes compétences et par passion
            pour l'informatique.
          </p>
          <p className="text-justify leading-relaxed text-lg text-gray-700">
            Ce portfolio vise à me mettre en valeur sur le marché du travail.
            Diplômé en juillet 2024, je n'ai malheureusement pas d'expérience en
            entreprise, ayant réalisé ma formation tout en travaillant. À
            travers ce portfolio, je présente mes projets personnels, réalisés
            de manière autonome en suivant des tutoriels en ligne, pour
            démontrer mes compétences en tant que développeur.
          </p>
        </div>
        <button
          className="px-4 py-2 mt-6  bg-purple-600 text-white font-semibold rounded-lg hover:bg-purple-700 transition"
          onClick={() => window.open('/Docs/CvDevVong2025.pdf', '_blank')}
          >
          Télécharger mon CV
        </button>
      </div>
    </FadeIn> 
  );
}

export default About;
