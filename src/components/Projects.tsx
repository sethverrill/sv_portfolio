import { Project } from "../types/project";

const projects: Project[] = [
  {
    title: "placeholder",
    description: "placeholder",
    tools: "placeholder",
    liveLink: "placeholder",
    repoLink: "placeholder",
  },
];

const Projects: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white p-6">
      <h2 className="text-4xl font-bold text-center mb-6">My Projects</h2>
      {projects.map((project, index) => (
        <div key={index} className="bg-gray-800 p-4 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold">{project.title}</h2>
          <p className="mt-2">{project.description}</p>
          <p className="mt-1 text-sm text-gray-400">
            <strong>Tools:</strong>
            {project.tools}
          </p>
          <div className="mt-4 flex space-x-4">
            <a
              href={project.liveLink}
              className="text-blue-400 hover:underline"
            >
              Site
            </a>
            <a
              href={project.repoLink}
              className="text-blue-400 hover:underline"
            >
              Repository
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};
export default Projects;
