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

      <nav className="absolute left-[20%] top-[25%] flex items-center group">
        <ProfilePic to="/about" size="w-48 h-48 md:w-56 md:h-56" />
      </nav>
      <nav className="absolute right-[20%] top-[60%] flex items-center group">
        <ProjectPic to="/projects" size="w-48 h-48 md:w-56 md:h-56" />
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
