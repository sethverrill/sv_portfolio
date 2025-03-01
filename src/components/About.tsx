import Footer from "../components/Footer";

const About = () => {
  return (
    <div className="h-screen w-screen flex flex-col justify-between bg-gradient-to-b from-[#4A6D8C] via-[#A28F73] to-[#DCC6A0] text-beige relative overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat bg-blend-overlay opacity-5 bg-paint-effect"
        style={{
          backgroundImage: "url('/black_white_old_computer.png')",
          backgroundSize: "55%",
        }}
      ></div>
      <div className="relative z-10 flex flex-col items-center justify-center flex-grow text-center">
        <h1 className="absolute top-3 text-5xl md:text-8xl justify-center italics text-center text-[#dcc6a0] font-[Tangerine] tracking-custom mt-10">
          About Me
        </h1>
        <div className="max-w-7xl w-full px-8 p-2 mt-30 text-sm text-beige bg-transparent backdrop-blur-sm">
          <p className="text-md md:text-lg text-[#001d3d] leading-relaxed text-center md:text-left indent-4 mb-2">
            Hi, I’m Seth, a full-stack developer who loves crafting intuitive
            applications that feel as seamless as a well-edited film and as
            structured as the ecosystems found in nature. Whether designing a
            front-end experience or architecting a back-end system, I focus on
            creating harmony where every component serves a purpose and works
            together effortlessly.
          </p>
          <p className="text-md md:text-lg text-[#001d3d] leading-relaxed text-center md:text-left indent-4 mb-2">
            With a background in telecommunications, construction leadership,
            and HVAC, I’ve spent years troubleshooting complex systems and
            optimizing workflows. That same problem-solving mindset fuels my
            approach to development, where I enjoy breaking down intricate
            challenges and piecing together elegant solutions.
          </p>
          <p className="text-md md:text-lg text-[#001d3d] leading-relaxed text-center md:text-left indent-4 mb-2">
            My love for films has shaped the way I think about design—every
            pixel should have intention, every transition should feel natural,
            and every user should be immersed in the experience. Nature, on the
            other hand, inspires my backend philosophy: efficient, scalable, and
            resilient systems that work quietly in the background to support
            something greater.
          </p>
          <p className="text-md md:text-lg text-[#001d3d] leading-relaxed text-center md:text-left indent-4 mb-2">
            When I'm not coding, I love spending time with my family watching a
            great film, or getting out into nature to enjoy the scenery. My
            contact information is at the bottom of the page, reach out any
            time!
          </p>
          <div className="mt-8 text-center md:text-left">
            <h2 className="text-xl md:text-1xl font-semibold text-[#001d3d] mt-2">
              Current Technical Skills:
            </h2>
            <p className="text-md md:text-md text-[#001d3d] leading-relaxed">
              <strong>Frontend:</strong> JavaScript, TypeScript, React, Tailwind
              CSS
              <br />
              <strong>Backend:</strong> Ruby, Ruby on Rails, PostgreSQL, RESTful
              APIs
              <br />
              <strong>Testing:</strong> RSpec, Cypress, WebMock, VCR
              <br />
              <strong>DevOps:</strong> Git, GitHub, Heroku, Vercel, API
              Authentication
            </p>

            <h2 className="text-xl md:text-1xl font-semibold text-[#001d3d] mt-2">
              Currently Learning:
            </h2>
            <p className="text-md md:text-md text-[#001d3d] leading-relaxed">
              Python, Flask, React Native
            </p>
          </div>
        </div>
      </div>
      <Footer showHomeLink />
    </div>
  );
};

export default About;
