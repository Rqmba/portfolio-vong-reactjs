import React, { useState } from "react";
import articleBlog from '../Data/dataArticle'; // Import du fichier article enrichi
import { MdKeyboardDoubleArrowDown } from "react-icons/md";
import { MdKeyboardDoubleArrowUp } from "react-icons/md";
import FadeIn from "../Components/FramerMotion/FadeIn";

const Blog = () => {
  const [articleKey, setArticleKey] = useState(null); // Clé de l'article sélectionné
  const [showFullText, setShowFullText] = useState(false);

  const toggleShowFulltext = () => {
    setShowFullText(!showFullText);
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
      <div className="flex flex-col sm:flex-row min-h-screen gap-4 dark:bg-gray-800 dark:text-gray-700">
        {/* Menu latéral */}
        <aside className="w-full sm:w-1/3 lg:w-1/4 min-w-[200px] p-4 shadow-md bg-gray-900 text-white">
          <button
            onClick={() => {
              setArticleKey("motivation");
              setShowFullText(false);
            }}
            className="block w-full text-left p-2 mb-2 rounded hover:bg-slate-600 font-sans text-base leading-normal tracking-wider"
          >
            Ma motivation
          </button>

          <button
            onClick={() => {
              setArticleKey("methodology");
              setShowFullText(false);
            }}
            className="block w-full text-left p-2 mb-2 rounded hover:bg-slate-600 font-sans text-base leading-normal tracking-wider"
          >
            Mon organisation personnelle
          </button>

          <button
            onClick={() => {
              setArticleKey("reactjs");
              setShowFullText(false);
            }}
            className="block w-full text-left p-2 mb-2 rounded hover:bg-slate-600 font-sans text-base leading-normal tracking-wider"
          >
            React Js
          </button>
        </aside>

        {/* Contenu principal */}
        <main className="flex-1 p-6 sm:p-8 lg:p-12 transition-opacity duration-500">
          {articleKey ? (
            <>
              {renderArticleContent(
                showFullText
                  ? articleBlog[articleKey].content
                  : articleBlog[articleKey].content.slice(0, 2) // Afficher seulement une partie si pas en full
              )}
              {!showFullText && (
                <button
                  onClick={toggleShowFulltext}
                  className="mt-4 text-blue-500 hover:underline flex items-center"
                >
                  Lire l'article complet... <MdKeyboardDoubleArrowDown />
                </button>
              )}
              {showFullText && (
                <button
                  onClick={toggleShowFulltext}
                  className="mt-4 text-blue-500 hover:underline flex items-center"
                >
                  Réduire <MdKeyboardDoubleArrowUp />
                </button>
              )}
            </>
          ) : (
            <p className="font-sans text-base leading-normal tracking-wider">
              Bienvenue sur mon blog ! J’y partage mon expérience de développeur :
              mes motivations, mes méthodes de travail et les enseignements tirés de mon parcours.
            </p>
          )}
        </main>
      </div>
    </FadeIn>
  );
};

export default Blog;
