import React, { useState } from "react";
import articleBlog from "../Data/dataArticle"; // Import du fichier article enrichi
import ContainerCard from "../Components/ContainerCard";
import methode_travail from "../Assets/ForBlog/methode_travail.jpg";
import motivation from "../Assets/ForBlog/motivation.jpg";
import reactjs from "../Assets/ForBlog/reactjs.jpg";
import FadeIn from "../Components/FramerMotion/FadeIn";

const Blog = () => {
  const [selectedArticle, setSelectedArticle] = useState(null); // Stocke l'article sélectionné

  const handleBack = () => {
    setSelectedArticle(null);
  };

  // Fonction pour afficher le contenu d'un article
  const renderArticleContent = (content) => {
    return content.map((block, index) => {
      switch (block.type) {
        case "heading":
          return (
            <h2 key={index} className="text-2xl font-bold mb-4">
              {block.text}
            </h2>
          );
        case "paragraph":
          return (
            <p key={index} className="mb-4 text-base leading-relaxed">
              {block.text}
            </p>
          );
        case "date":
          return (
            <p key={index} className="text-sm text-gray-500 mb-6">
              {block.text}
            </p>
          );
        default:
          return null;
      }
    });
  };

  return (
    <FadeIn>
      <div className="container mx-auto p-6">
        {/* Si un article est sélectionné */}
        {selectedArticle ? (
          <div className="max-w-4xl mx-auto">
            <button
              onClick={handleBack}
              className="mb-9 text-purple-600 hover:underline"
            >
              ← Retour aux articles
            </button>
            <ContainerCard>
              {renderArticleContent(articleBlog[selectedArticle].content)}
            </ContainerCard>
          </div>
        ) : (
          // Liste principale avec les articles
          <div className="flex flex-wrap gap-6 justify-center">
            {/* Bloc Motivation */}
            <ContainerCard>
              <div 
              className="flex flex-col md:flex-row items-center gap-6"
              onClick={() => setSelectedArticle("motivation")}
              >
                <img
                  src={motivation}
                  alt="Motivation"
                  className="w-full md:w-1/3 h-48 object-cover rounded-lg"
                />
                <div className="flex-1">
                  <h2 className="text-2xl font-bold text-purple-600 cursor-pointer hover:underline">
                    Motivation et détermination
                  </h2>
                  <p className="text-gray-700 mt-2">
                    Découvrez comment ma passion pour le code m'a guidé dans ma
                    reconversion professionnelle.
                  </p>
                </div>
              </div>
            </ContainerCard>

            {/* Bloc Méthode de travail */}
            <ContainerCard>
              <div 
              className="flex flex-col md:flex-row items-center gap-6"
              onClick={() => setSelectedArticle("methodology")}
              >
                <img
                  src={methode_travail}
                  alt="Méthode de Travail"
                  className="w-full md:w-1/3 h-48 object-cover rounded-lg"
                />
                <div className="flex-1">
                  <h2 className="text-2xl font-bold text-purple-600 cursor-pointer hover:underline">
                    Ma méthode de travail
                  </h2>
                  <p className="text-gray-700 mt-2">
                    Découvrez comment une organisation rigoureuse m'a permis de
                    réussir ma formation tout en travaillant.
                  </p>
                </div>
              </div>
            </ContainerCard>

            {/* Bloc React.js */}
            <ContainerCard>
              <div 
              className="flex flex-col md:flex-row items-center gap-6" 
              onClick={() => setSelectedArticle("reactjs")}
              >
                <img
                  src={reactjs}
                  alt="React.js"
                  className="w-full md:w-1/3 h-48 object-cover rounded-lg"
                />
                <div className="flex-1">
                  <h2 className="text-2xl font-bold text-purple-600 cursor-pointer hover:underline">
                    Pourquoi j'ai choisi React.js
                  </h2>
                  <p className="text-gray-700 mt-2">
                    Découvrez pourquoi React.js est devenu mon choix de cœur
                    pour me spécialiser dans le développement front-end.
                  </p>
                </div>
              </div>
            </ContainerCard>
          </div>
        )}
      </div>
    </FadeIn>
  );
};

export default Blog;
