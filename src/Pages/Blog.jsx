import React, { useState } from "react";
import articles from '../Data/dataArticle'

// const Blog = () => {
//   // État pour suivre l'article actif
//   const [activeSection, setActiveSection] = useState(null);

//   // Contenu des sections
//   const sections = {
//     welcome: "Bienvenue sur le blog ! Ici, je vais vous énoncer mes motivations, ma pédagogie, mes choix et ma méthode de travail pour être productif.",
//     motivations:
//       "Mes motivations : J'ai choisi de continuer en autodidacte au lieu de suivre un Bac +3 parce que je préfère apprendre à mon rythme et travailler sur des projets concrets.",
//     methodology:
//       "Ma méthode de travail : Je me fixe des objectifs hebdomadaires et j'organise mon emploi du temps pour équilibrer apprentissage, travail, et repos.",
//     reactChoice:
//       "Pourquoi React.js : J'ai choisi React.js parce qu'il est populaire, flexible, et très demandé sur le marché du travail.",
//     conclusion:
//       "Conclusion : À travers ce blog, j'espère montrer ma motivation, ma persévérance, et mes compétences en développement web.",
//   };

//   return (
//     <div className="flex min-h-screen  dark:bg-gray-800  dark:text-gray-100">
//       {/* Menu à gauche */}
//       <aside className="w-1/4  dark:bg-gray-900 p-4 shadow-md">
//         <ul className="space-y-2">
//           <li>
//             <button
//               onClick={() => setActiveSection("motivations")}
//               className={`block w-full text-left p-2 rounded hover:bg-slate-800  hover:text-white ${
//                 activeSection === "motivations" ? "bg-slate-800 text-white" : ""
//               }`}
//             >
//               Motivations
//             </button>
//           </li>
//           <li>
//             <button
//               onClick={() => setActiveSection("methodology")}
//               className={`block w-full text-left p-2 rounded hover:bg-slate-800 hover:text-white ${
//                 activeSection === "methodology" ? "bg-slate-800 text-white" : ""
//               }`}
//             >
//               Méthodologie
//             </button>
//           </li>
//           <li>
//             <button
//               onClick={() => setActiveSection("reactChoice")}
//               className={`block w-full text-left p-2 rounded hover:bg-slate-800 hover:text-white ${
//                 activeSection === "reactChoice" ? "bg-slate-800 text-white" : ""
//               }`}
//             >
//               Pourquoi React.js
//             </button>
//           </li>
//           <li>
//             <button
//               onClick={() => setActiveSection("conclusion")}
//               className={`block w-full text-left p-2 rounded hover:bg-slate-800 hover:text-white ${
//                 activeSection === "conclusion" ? "bg-slate-800 text-white" : ""
//               }`}
//             >
//               Conclusion
//             </button>
//           </li>
//         </ul>
//       </aside>

//       {/* Contenu principal */}
//       <main className="flex-1 p-6">
//         <h1 className="text-4xl font-bold mb-6">
//           {activeSection
//             ? activeSection === "welcome"
//               ? "Bienvenue sur le blog"
//               : activeSection
//                   .charAt(0)
//                   .toUpperCase() + activeSection.slice(1)
//             : "Bienvenue sur le blog"}
//         </h1>
//         <p className="text-lg">
//           {sections[activeSection || "welcome"]}
//         </p>
//       </main>
//     </div>
//   );
// };

const Blog = () => {
    const [article, setArticle] = useState(null);
  
    return (
      <div className="flex min-h-screen dark:bg-gray-800 dark:text-gray-700">
        {/* Menu latéral */}
        <aside className="w-1/4 p-4 shadow-md">
          <button
            onClick={() => setArticle("motivation")}
            className="block w-full text-left p-2 mb-2 rounded hover:bg-slate-600"
          >
            Ma motivation
          </button>
  
          <button
            onClick={() => setArticle("methodology")}
            className="block w-full text-left p-2 mb-2 rounded hover:bg-slate-600"
          >
            Ma méthode pédagogique
          </button>
  
          <button
            onClick={() => setArticle("methodology")}
            className="block w-full text-left p-2 mb-2 rounded hover:bg-slate-600"
          >
            React Js
          </button>
        </aside>
  
        {/* Contenu principal */}
        <main className={`flex-1 p-6 transition-opacity duration-500 ${article ? "opacity-100" : "opacity-50"}`}>
          <p className="whitespace-pre-line text-xl">
            {article ? articles[article] : "Bienvenue sur mon blog ! J'ai rédigé ici, ma motivation, mon rythme de travail et ainsi mon point de vue sur les langages appris !"}
          </p>
        </main>
      </div>
    );
  };

export default Blog;
