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
    <div className="flex flex-col items-center">
      {location.pathname === to ? (
        imgElement
      ) : (
        <Link to={to}>{imgElement}</Link>
      )}
      <span className="mt-2 text-lg md:text-xl text-[#001d3d] font-semibold">
        Projects
      </span>
    </div>
  );
};

export default ProjectPic;
