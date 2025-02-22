import React from "react";
import { ProjectModalProps } from "../types/appInterfaces";

const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
      <div className="bg-white text-black p-6 rounded-lg shadow-lg max-w-lg w-full relative">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-xl font-bold text-gray-600 hover:text-black"
        >
          &times;
        </button>
        <h2 className="text-3xl font-bold">{project.title}</h2>
        <p className="mt-2">{project.description}</p>
        <p className="mt-2">
          <strong>Tools:</strong> {project.tools.join(", ")}
        </p>
        <div className="mt-4 flex space-x-4">
          {project.liveLink && (
            <a
              href={project.liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              Live Site
            </a>
          )}
          {project.repoLink && (
            <a
              href={project.repoLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
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
