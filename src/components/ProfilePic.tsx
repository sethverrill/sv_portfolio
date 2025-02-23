import { Link, useLocation } from "react-router-dom";
import { ProfilePicProps } from "../types/appInterfaces";
import profilePic from "/src/assets/profile_pic.jpeg";

const ProfilePic: React.FC<ProfilePicProps> = ({
  to = "/about",
  size = "w-36 h-36 md:w-40 md:h-40",
  altText = "Seth Verrill profile photo",
}) => {
  const location = useLocation();

  const imgElement = (
    <img
      src={profilePic}
      alt={altText}
      className={`${size} rounded-full border-4 border-[#001d3d] shadow-lg hover:scale-110 transition-transform duration-300 object-cover object-[0%_30%]`}
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
        About Me
      </span>
    </div>
  );
};

export default ProfilePic;
