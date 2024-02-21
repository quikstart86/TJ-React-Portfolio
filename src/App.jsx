import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import Home from "./components/Home.jsx";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ProjectGallery from "./components/ProjectGallery.jsx";
import Contact from "./components/Contact.jsx";
import "./App.css"

const App = () => {
  return (
    
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/project-gallery" element={<ProjectGallery />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
        </Routes>
        <Footer />
      </Router>
  );
};

export default App;
