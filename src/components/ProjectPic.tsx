import { Link, useLocation } from "react-router-dom";
import { ProjectPictureProps } from "../types/appInterfaces";
import dandelionImg from "/src/assets/dandelion1.jpg";

const ProjectPic: React.FC<ProjectPictureProps> = ({
  to = "/projects",
  size = "w-36 h-36 md:w-40 md:h-40",
  altText = "Projects",
}) => {
  const location = useLocation();

  const imgElement = (
    <img
      src={dandelionImg}
      alt={altText}
      className={`${size} rounded-full border-4 border-[#001d3d] shadow-lg hover:scale-110 transition-transform duration-300 object-cover object-[20%_50%]`}
    />
  );

  return (
    <div className="relative flex items-center group">
      {location.pathname === to ? (
        imgElement
      ) : (
        <Link to={to} className="flex items-center">
          {imgElement}
          <span className="hover-expand-text-projects">Projects</span>
        </Link>
      )}
    </div>
  );
};

export default ProjectPic;
