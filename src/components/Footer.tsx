import { Link } from "react-router-dom";
import { FooterProps } from "../types/appInterfaces";

const Footer: React.FC<FooterProps> = ({ showHomeLink }) => {
  return (
    <footer className="bg-black text-white py-4 text-center relative">
      <h2 className="text-5xl md:text-7xl font-black tracking-custom uppercase">
        Seth Verrill
      </h2>
      <div className="w-full flex justify-center gap-x-30 mt-2 text-lg">
        <a href="mailto:verrill.seth@gmail.com" className="hover:underline">
          Email
        </a>
        <a
          href="https://docs.google.com/document/d/1L5Tc145ASth093Zy8ZwHtEVDbOBp2A5e4K1LDews6F0/edit?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:underline font-semibold"
        >
          Resume
        </a>

        <a
          href="https://github.com/sethverrill"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:underline"
        >
          GitHub
        </a>
        <a
          href="https://linkedin.com/in/sethverrill"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:underline"
        >
          LinkedIn
        </a>
      </div>

      {showHomeLink && (
        <Link
          to="/"
          className="absolute bottom-2 right-10 px-6 py-2 text-lg text-beige font-bold rounded-lg hover:underline"
        >
          Home
        </Link>
      )}
    </footer>
  );
};

export default Footer;
