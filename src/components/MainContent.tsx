import { Routes, Route, useLocation } from "react-router-dom";
import About from "./About";
import Projects from "./Projects";
import ProfilePic from "./ProfilePic";
import ProjectPic from "./ProjectPic";
import Header from "./Header";

const MainContent = () => {
  const location = useLocation();

  return (
    <div className="flex-1 flex flex-col items-center justify-center text-center px-6 relative">
      {location.pathname === "/" && (
        <div className="absolute top-1 w-full text-center">
          <Header />
        </div>
      )}

      <nav className="absolute bottom-15 left-15 md:bottom-10 md:left-12">
        <ProfilePic to="/about" size="w-36 h-36 md:w-48 md:h-48" />
      </nav>
      <nav className="absolute bottom-20 right-10 md:bottom-10 md:right-12">
        <ProjectPic to="/projects" size="w-36 h-36 md:w-48 md:h-48" />
      </nav>
      <Routes>
        <Route path="/" element={<div></div>} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </div>
  );
};

export default MainContent;
