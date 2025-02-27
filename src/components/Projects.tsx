import { useState } from "react";
import Footer from "../components/Footer";
import ProjectModal from "./ProjectModal";
import { Project } from "../types/appInterfaces";


const projects: Project[] = [
  {
    title: "🪴 Smart Gardening",
    description:
      "Smart Gardening is an intelligent web application designed to help users discover the best plants for their gardens based on climate, soil type, and personal preferences. By entering their location and selecting plant requirements, users receive tailored recommendations for plants that are best suited for their environment.",
    tools: [
      "React",
      "TypeScript",
      "Ruby on Rails",
      "OpenAI API",
      "Google Cloud",
      "CSS",
      "SQL/ActiveRecord"
    ],
    liveLink: "https://smart-gardening-fe.vercel.app/",
    repoLinks: [
      {
        label: "Frontend Repo",
        url: "https://github.com/wally-yawn/smart_gardening_fe",
      },
      {
        label: "Backend Repo",
        url: "https://github.com/sethverrill/smart-gardening-be",
      },
    ],
    gif: "https://imgur.com/a/kVP0o1j",
  },

  {
    title: "🎬 Rancid Tomatillos",
    description:
    "Rancid Tomatillos is a movie information app that allows users to explore current popular movies and view the details about those movies. It also allows users to upvote or downvote movies based on their opinion",
    tools: [
      "React",
      "React Router",
      "CSS"
    ],
    repoLinks: [
      {label: "Frontend Repo",
        url: "https://github.com/sethverrill/rancid-tomatillos",
      },
    ],
    gif: "/src/assets/ranciddemo.gif",
  }
];

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <div className="h-screen w-screen flex flex-col justify-between bg-gradient-to-b from-[#4A6D8C] via-[#A28F73] to-[#DCC6A0] text-beige relative">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat bg-blend-overlay opacity-5 bg-paint-effect"
        style={{
          backgroundImage: "url('/black_white_old_computer.png')",
          backgroundSize: "55%",
        }}
      ></div>
      <div className="relative z-10 flex flex-col items-center justify-center text-center flex-grow">
        <h1 className="absolute top-3 w-full text-center text-[4rem] md:text-[6rem] italic font-[Tangerine] tracking-wide text-[#DCC6A0]">
          Projects
        </h1>
        <div className="mt-8 w-full max-w-6xl flex flex-col items-center space-y-18 text-6xl">
          {projects.map((project, index) => (
            <button
              key={index}
              onClick={() => setSelectedProject(project)}
              className="text-beige hover:text-[#001d3d] transition-all duration-300 text-3xl md:text-4xl font-black transform hover:scale-105 hover:tracking-widest py-6"
            >
              {project.title}
            </button>
          ))}
        </div>
      </div>
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
      <Footer showHomeLink />
    </div>
  );
};

export default Projects;
