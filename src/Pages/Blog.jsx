import React, { useState } from "react";
import articles from '../Data/dataArticle';
import { MdKeyboardDoubleArrowDown } from "react-icons/md";
import { MdKeyboardDoubleArrowUp } from "react-icons/md";
import FadeIn from "../Components/FramerMotion/FadeIn";

const Blog = () => {
  const [article, setArticle] = useState(null);
  const [showFullText, setShowFullText] = useState(false)

  const toggleShowFulltext = () => {
    setShowFullText(!showFullText);
  }

  return (
  <FadeIn>
    <div className="flex flex-col sm:flex-row min-h-screen gap-4 dark:bg-gray-800 dark:text-gray-700">
      {/* Menu latéral */}
      <aside className="w-full sm:w-1/3 lg:w-1/4 min-w-[200px] p-4 shadow-md bg-gray-900 text-white">
        <button
          onClick={() => {
            setArticle("motivation");
            setShowFullText(false);
          }}
          className="block w-full text-left p-2 mb-2 rounded hover:bg-slate-600 font-sans text-base leading-normal tracking-wider"
        >
          Ma motivation
        </button>

        <button
          onClick={() => {
            setArticle("methodology");
            setShowFullText(false);
          }}
          className="block w-full text-left p-2 mb-2 rounded hover:bg-slate-600 font-sans text-base leading-normal tracking-wider"
        >
          Mon organisation personnelle
        </button>

        <button
          onClick={() => {
            setArticle("reactjs");
            setShowFullText(false);
          }}
          className="block w-full text-left p-2 mb-2 rounded hover:bg-slate-600 font-sans text-base leading-normal tracking-wider"
        >
          React Js
        </button>
      </aside>

      {/* Contenu principal */}
      <main className="flex-1 p-6 sm:p-8 lg:p-12 transition-opacity duration-500">
        { article ? (
          <>
            <p className="whitespace-pre-line font-sans text-base leading-normal tracking-wider">
              {showFullText ? articles[article].full : articles[article].notFull}
            </p>
            {!showFullText && (
              <button
              onClick={toggleShowFulltext}
              className="mt-4 text-blue-500 hover:underline flex items-center"
              >
                Découvrir l'article ...<MdKeyboardDoubleArrowDown/>
              </button>
            )}
            {showFullText && (
              <button
              onClick={toggleShowFulltext}
              className="mt-4 text-blue-500 hover:underline flex items-center"
              >
                Reduire<MdKeyboardDoubleArrowUp />
              </button>
            )}
          </>
        ) : (
          <p className="font-sans text-base leading-normal tracking-wider">
            Bienvenue sur mon blog ! J’y partage mon expérience de développeur : mes motivations, mes méthodes de travail et les enseignements tirés de mon parcours.
          </p>
        )}
      </main>
    </div>
  </FadeIn>    
  );
};


export default Blog;
 