import Footer from "../components/Footer";

const Projects = () => {
  return (
    <div className="h-screen w-screen flex flex-col justify-between bg-gradient-to-b from-[#4A6D8C] via-[#A28F73] to-[#DCC6A0] text-beige relative">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat bg-blend-soft-light opacity-10"
        style={{
          backgroundImage: "url('/src/assets/black_white_old_computer.png')",
          backgroundSize: "75%",
        }}
      ></div>
      <div className="relative z-10 flex flex-col items-center justify-center text-center flex-grow">
        <h1 className="text-7xl md:text-8xl italic text-beige font-[Tangerine] tracking-widest">
          Projects
        </h1>
        <div className="max-w-3xl bg-black bg-opacity-50 p-8 rounded-lg shadow-lg mt-4">
          <p className="text-lg md:text-xl">
            A collection of my work, featuring applications built with modern technologies.
          </p>
        </div>
      </div>
      <Footer showHomeLink />
    </div>
  );
};

export default Projects;
