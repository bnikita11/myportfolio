import { RevealOnScroll } from "../RevealOnScroll";

export const Home = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative"
    >
      <RevealOnScroll>
        <div className="text-center z-10 px-4 max-w-3xl">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-[#e196a1] to-[#8f2d49] bg-clip-text text-transparent leading-tight drop-shadow-[0_2px_10px_rgba(255,204,128,0.3)]">
            Hi, I'm Nikita
          </h1>

          <p className="text-[#4e342e] text-lg mb-8 max-w-lg mx-auto">
            A passionate frontend developer based in Nepal 🇳🇵. I love turning
            ideas into clean, responsive UI using React, Tailwind, and
            JavaScript. Right now, I'm building real-world projects and
            sharpening my dev sword every day 🗡️🔥
          </p>

          <div className="flex justify-center space-x-4">
            <a
              href="#projects"
              className="bg-gradient-to-r from-[#e196a1] to-[#8f2d49] text-white py-3 px-6 rounded 
              font-medium transition relative overflow-hidden 
              hover:-translate-y-0.5
              hover:shadow-[0_0_15px_rgba(255,204,128,0.4)]"
            >
              View Projects
            </a>

            <a
              href="#contact"
              className="bg-gradient-to-r from-[#e196a1] to-[#8f2d49] text-white py-3 px-6 rounded 
              font-medium transition relative overflow-hidden 
              hover:-translate-y-0.5
              hover:shadow-[0_0_15px_rgba(255,204,128,0.4)]
              hover:bg-blue-500/10"
            >
              Contact Me
            </a>

            {/* Download CV Button */}
            <a
              href="/cv/NikitaResume.pdf" // Assuming the CV is located in the public/cv folder
              download
              className="bg-gradient-to-r from-[#e196a1] to-[#8f2d49] text-white py-3 px-6 rounded 
              font-medium transition relative overflow-hidden 
              hover:-translate-y-0.5
              hover:shadow-[0_0_15px_rgba(255,204,128,0.4)]"
            >
              Download CV
            </a>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
