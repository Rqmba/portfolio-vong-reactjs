import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import DataProjects from './Data/data';
import Navbar from "./Components/Navbar";
import Footer from './Components/Footer';
import Explore from './Pages/Explore';
import Contact from './Pages/Contact';
import Project from './Pages/Project';
import Skills from './Pages/Skills';
import About from './Pages/About';
import Blog from "./Pages/Blog";

function App() {
  const [data, myData] = useState(DataProjects);

  return (
    <div className="app-background flex flex-col min-h-screen text-gray-800 dark:text-gray-200">
      <Router>
        {/* Navbar */}
        <Navbar />
        
        {/* Main content area */}
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Explore projects={data} />} />
            <Route path="/projects" element={<Project projects={data} />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        
        {/* Footer */}
        <Footer />
      </Router>
    </div>
  );
}

export default App;
