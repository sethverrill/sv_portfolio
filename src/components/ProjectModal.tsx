import React from "react";
import { ProjectModalProps } from "../types/appInterfaces";

const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  return (
    <div
      className="fixed inset-0 flex items-center justify-center z-50 bg-opacity-0"
      onClick={onClose}
    >
      <div className="absolute inset-0 bg-opacity-0 pointer-events-none"></div>
      <div
        className="relative bg-[#DCC6A0] text-[#001d3d] p-10 rounded-lg shadow-lg w-[40rem] max-h-[90vh] overflow-y-auto border border-[#4A6D8C]"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-3 right-4 text-2xl font-bold text-[#4A6D8C] hover:text-black"
        >
          &times;
        </button>
        <h2 className="text-4xl font-bold text-[#001d3d] mb-4 text-center">
          {project.title}
        </h2>
        <p className="text-lg font-semiboldleading-relaxed">{project.description}</p>
        <div className="mt-4">
          <strong className="text-xl">Tools:</strong>
          <ul className="list pl-0 mt-2 text-md italic text-[#001d3d]">
            {project.tools.map((tool, index) => (
              <li key={index} className="mt-1">
                {tool}
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-6 flex justify-center gap-6 text-lg">
          {project.liveLink && (
            <a
              href={project.liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#001d3d] transition-transform transform hover:scale-110"
            >
              Live Site
            </a>
          )}

          {Array.isArray(project.repoLinks)
            ? project.repoLinks.map((repo, index) => (
                <a
                  key={index}
                  href={repo.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#001d3d] transition-transform transform hover:scale-110"
                >
                  {repo.label}
                </a>
              ))
            : project.repoLinks && (
                <a
                  href={project.repoLinks}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#001d3d] transition-transform transform hover:scale-110"
                >
                  Repository
                </a>
              )}
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;
