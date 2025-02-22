import Footer from "../components/Footer";

const About = () => {
  return (
    <div className="h-screen w-screen flex flex-col justify-between bg-gradient-to-b from-[#4A6D8C] via-[#A28F73] to-[#DCC6A0] text-beige relative overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat bg-blend-soft-light opacity-10"
        style={{
          backgroundImage: "url('/src/assets/black_white_old_computer.png')",
          backgroundSize: "75%",
        }}
      ></div>
      <div className="relative z-10 flex flex-col items-center justify-center flex-grow text-center">
        <h1 className="text-7xl md:text-8xl italic text-beige font-[Tangerine] tracking-widest mt-12">
          About Me
        </h1>
        <div className="max-w-3xl bg-opacity-60 p-8 rounded-lg shadow-lg mt-6 border-beige">
          <p className="text-lg md:text-xl text-beige leading-relaxed">
            Hi, I'm Seth, a Full-Stack Software Engineer passionate about
            building intuitive and engaging web applications.
          </p>
        </div>
      </div>
      <Footer showHomeLink />
    </div>
  );
};

export default About;
