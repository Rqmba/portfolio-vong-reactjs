import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import DataProjects from './Data/data'
import Navbar from "./Components/Navbar";
import Footer from './Components/Footer'
import Explore from './Pages/Explore';
import Contact from './Pages/Contact';
import Project from './Pages/Project';
import Skills from './Pages/Skills';
import About from './Pages/About';


function App() {
  const [data, myData] = useState(DataProjects)

  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Explore projects={data} />} />
          <Route path="/projects" element={<Project />} />
          <Route path="/skills" element={<Skills/>} />
          <Route path="/about" element={<About />} />
          <Route path="/Contact" element={<Contact />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
