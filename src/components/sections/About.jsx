import { RevealOnScroll } from "../RevealOnScroll";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaGithub } from "react-icons/fa";
import { SiTailwindcss, SiTypescript, SiVite, SiAppwrite } from "react-icons/si";

export const About = () => {
  const skills = [
    { name: "HTML", icon: <FaHtml5 className="text-orange-600" /> },
    { name: "CSS", icon: <FaCss3Alt className="text-blue-500" /> },
    { name: "JavaScript", icon: <FaJs className="text-yellow-400" /> },
    { name: "React", icon: <FaReact className="text-cyan-400" /> },
    { name: "TypeScript", icon: <SiTypescript className="text-blue-600" /> },
    { name: "Tailwind", icon: <SiTailwindcss className="text-teal-400" /> },
    { name: "GitHub", icon: <FaGithub className="text-gray-800" /> },
    { name: "Vite", icon: <SiVite className="text-purple-500" /> },
    { name: "Appwrite", icon: <SiAppwrite className="text-pink-500" /> },
  ];
  return (
    <section id="about" className="min-h-screen flex flex-col items-center justify-center py-20">
      <RevealOnScroll>
        <div className="max-w-5xl mx-auto px-4 w-full space-y-16">
          
          {/* About Me Title */}
          <h2 className="text-4xl font-bold bg-gradient-to-r from-[#e196a1] to-[#8f2d49] bg-clip-text text-transparent text-center">
            About Me
          </h2>

          {/* Education Section */}
          <div>
            <h3 className="text-2xl font-semibold text-center text-[#4e342e] mb-6">Education</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

              {/* Secondary */}
              <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 hover:shadow-md transition bg-[#FFDEDE]">
                <h4 className="text-xl font-bold mb-2 text-[#4e342e]">Secondary</h4>
                <ul className="list-disc list-inside text-[#4e342e] ml-2 space-y-2">
                  <li>Shree Rastriya Rotary Secondary School (2015)</li>
                </ul>
                {/* <div className="mt-4">
                  <a
                    href="/images/academic-certificate.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#4e342e] hover:text-[#964c57] transition-all text-sm font-semibold border-b-2 border-transparent hover:border-[#d7a1a9]"
                  >
                    View Academic Certificate
                  </a>
                </div> */}
              </div>

              {/* Higher Secondary */}
              <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 hover:shadow-md transition bg-[#FFDEDE]">
                <h4 className="text-xl font-bold mb-2 text-[#4e342e]">Higher Secondary (NEB)</h4>
                <ul className="list-disc list-inside text-[#4e342e] ml-2 space-y-2">
                  <li>Hetauda School Of Management (2015-2017)</li>
                </ul>
                {/* <div className="mt-4">
                  <a
                    href="/certificates/char.jpg"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#4e342e] hover:text-[#964c57] transition-all text-sm font-semibold border-b-2 border-transparent hover:border-[#d7a1a9]"
                  >
                    View Academic Certificate
                  </a>
                </div> */}
              </div>

              {/* Bachelor */}
              <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 hover:shadow-md transition bg-[#FFDEDE]">
                <h4 className="text-xl font-bold mb-2 text-[#4e342e]">Bachelor in Computer Application (TU)</h4>
                <ul className="list-disc list-inside text-[#4e342e] ml-2 space-y-2">
                  <li>Birendra Multiple Campus (2018–2022)</li>
                </ul>
                {/* <div className="mt-4">
                  <a
                    href="/certificates/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#4e342e] hover:text-[#4f4143] transition-all text-sm font-semibold border-b-2 border-transparent hover:border-[#d7a1a9]"
                  >
                    View Academic Certificate
                  </a>
                </div> */}
              </div>

            </div>
          </div>

          {/* Internship Experience Section */}
          <div>
            <h3 className="text-2xl font-semibold text-center text-[#4e342e] mb-6">Internship Experience</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              
              {/* Internship 1 */}
              <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 hover:shadow-md transition bg-[#FFDEDE]">
                <h4 className="text-xl font-bold mb-2 text-[#4e342e]">PHP Developer - InnovateX (2021)</h4>
                <ul className="list-disc list-inside text-[#4e342e] ml-2 space-y-2">
                  <li>Developed and maintained backend features using core PHP and MySQL.</li>
                  <li>Worked on open source software projects, contributing to code improvement, customization, and feature enhancement.</li>
                </ul>
                {/* <div className="mt-4">
                  <a
                    href="/certificates/intern.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#4e342e] hover:text-[#964c57] transition-all text-sm font-semibold border-b-2 border-transparent hover:border-[#d7a1a9]"
                  >
                    View Internship Certificate
                  </a>
                </div> */}
              </div>

              {/* Internship 2 */}
              <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 hover:shadow-md transition bg-[#FFDEDE]">
                <h4 className="text-xl font-bold mb-2 text-[#4e342e]">React Developer – Icon Soft (2024–Present)</h4>
                <ul className="list-disc list-inside text-[#4e342e] ml-2 space-y-2">
                  <li>Developing and maintaining scalable, responsive web applications using React.js and JavaScript (ES6+).</li>
                  <li>Building reusable components and frontend libraries for future use.</li>
                  <li>Implementing state management using Redux, ReduxTookit or Context API as per project requirements.</li>
                  <li>Writing clean, maintainable, and well-documented code following best practices.</li>
                </ul>
                {/* <div className="mt-4">
                  <a
                    href="#"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#4e342e] hover:text-[#964c57] transition-all text-sm font-semibold border-b-2 border-transparent hover:border-[#d7a1a9]"
                  >
                    View Internship Certificate
                  </a>
                </div> */}
              </div>
            </div>
          </div>

          {/* Tech Skills Section */}
          <div>
            <h3 className="text-2xl font-semibold text-center text-[#4e342e] mb-6">Technical Skills</h3>
            <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 hover:shadow-md transition bg-[#FFDEDE]">
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
               {skills.map((skill, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-center transition-transform duration-200 transform hover:scale-110"
            whileHover={{ scale: 1.1 }}
          >
            <div className="text-5xl mb-2">{skill.icon}</div>
            <p className="text-gray-700 font-medium">{skill.name}</p>
          </div>
        ))}
      </div>
      </div>
    </div>
  </div>
  </RevealOnScroll>
    </section>
  );
};
