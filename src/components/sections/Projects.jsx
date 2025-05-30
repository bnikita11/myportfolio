import { ArrowRight } from "lucide-react";
import { ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { RevealOnScroll } from "../RevealOnScroll";

export const Projects = () => {
  return (
    <section
      id="projects"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r 
            from-[#e196a1] to-[#8f2d49] bg-clip-text text-transparent text-center">
            Featured Projects
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Project 1 */}
            <div className="p-6 bg-[#FFDEDE] rounded-xl border-white/10 border hover:-translate-y-1 hover:shadow-md transition">
              <h3 className="text-xl font-bold mb-2">Appwrite Blog App</h3>
              <p className="text-[#4e342e] mb-6 text-lg">
                A modern blog application built with React and Appwrite backend services. This project showcases full CRUD functionality where users can create, read, update, and delete blog posts with real-time database integration.
              </p>

              <div className="flex flex-wrap gap-2 mt-4">
                {["React", "Vite", "Tailwind", "Appwrite", "TinyMCE", "Redux", "Redux Toolkit", "JavaScript",].map((tech, key) => (
                  <span
                    key={key}
                    className="bg-[#f7b1bb] text-[#4e342e] py-1 px-3 rounded-full text-sm hover:bg-[#d2b9a3]/20 hover:shadow transition-all"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex items-center gap-4  mt-6">
                <span className="text-sm flex items-center gap-1 text-[#4e342e] cursor-default">
                 View Project
                <ArrowRight className="w-4 h-4" />
                </span>

                <a
                href="https://appwriteblog-navy.vercel.app/"
                title="Live Demo"
                className="text-[#4e342e] bg-[#f7b1bb] p-2 rounded-full hover:scale-110 hover:shadow-[0_0_10px_#d7a1a9] transition-all duration-300"
                target="_blank"
                rel="noopener noreferrer"
                >
                  <ExternalLink className="w-5 h-5"/>

                </a>

                <a
                  href="https://github.com/bnikita11/appwriteblog"
                  title="View Code on GitHub"
                  className="text-[#4e342e] bg-[#f7b1bb] p-2 rounded-full hover:scale-110 hover:shadow-[0_0_10px_#d7a1a9] transition-all duration-300"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGithub className="w-5 h-5" />
                </a>

                
              </div>
            </div>

            {/* Project 2 */}
            <div className="p-6 rounded-xl bg-[#FFDEDE] border-white/10 border hover:-translate-y-1 hover:shadow-md transition">
              <h3 className="text-xl font-bold mb-2">Context API Local Todo App</h3>
              <p className="text-[#4e342e] mb-6 text-lg">
                A simple and responsive Todo application built using React and Context API. It allows users to add, edit, delete, and mark tasks as completed. All data is saved locally in the browser using Local Storage.   
              </p>

              <div className="flex flex-wrap gap-2 mt-4">
                {["React", "Vite", "Context API", "Local Storage", "JavaScript",].map((tech, key) => (
                  <span
                    key={key}
                    className="bg-[#f7b1bb] text-[#4e342e] py-1 px-3 rounded-full text-sm hover:bg-[#d2b9a3]/20 hover:shadow transition-all"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex items-center gap-4  mt-6">

                <span className="text-sm flex items-center gap-1 text-[#4e342e] cursor-default">
                 View Project
                <ArrowRight className="w-4 h-4" />
                </span>

                <a 
                href="https://context-api-local-todo.vercel.app/"
                title="Live Demo"
                className="text-[#4e342e] bg-[#f7b1bb] p-2 rounded-full hover:scale-110 hover:shadow-[0_0_10px_#d7a1a9] transition-all duration-300"
                target="_blank"
                rel="noopener noreferrer">
                  <ExternalLink className="w-5 h-5"/>
                </a>

                <a
                  href="https://github.com/bnikita11/ContextApiLocalTodo"
                  title="View Code on GitHub"
                  className="text-[#4e342e] bg-[#f7b1bb] p-2 rounded-full hover:scale-110 hover:shadow-[0_0_10px_#d7a1a9] transition-all duration-300"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGithub className="w-5 h-5" />
                </a>

              </div>
            </div>


            {/* Project 3 */}
            <div className="p-6 rounded-xl bg-[#FFDEDE] border-white/10 border hover:-translate-y-1 hover:shadow-md transition">
              <h3 className="text-xl font-bold mb-2">Rock Paper Scissors Game</h3>
              <p className="text-[#4e342e] mb-6 text-lg">
                A classic Rock-Paper-Scissors game built with HTML, CSS, and JavaScript. The player competes against the computer in a fun and interactive UI with score tracking and result animations.
              </p>

              <div className="flex flex-wrap gap-2 mt-4">
                {["HTML", "CSS", "javaScript"].map((tech, key) => (
                  <span
                    key={key}
                    className="bg-[#f7b1bb] text-[#4e342e] py-1 px-3 rounded-full text-sm hover:bg-[#d2b9a3]/20 hover:shadow transition-all"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex items-center gap-4  mt-6">

                <span className="text-sm flex items-center gap-1 text-[#4e342e] cursor-default">
                 View Project
                <ArrowRight className="w-4 h-4" />
                </span>

                <a
                href="https://bnikita11.github.io/scissor_paper_rock_game/"
                title="Live Demo"
                className="text-[#4e342e] bg-[#f7b1bb] p-2 rounded-full hover:scale-110 hover:shadow-[0_0_10px_#d7a1a9] transition-all duration-300"
                target="_blank"
                rel="noopener noreferrer">
                  <ExternalLink className="w-5 h-5"/>

                </a>

                <a
                  href="https://github.com/bnikita11/scissor_paper_rock_game"
                  title="View Code on GitHub"
                  className="text-[#4e342e] bg-[#f7b1bb] p-2 rounded-full hover:scale-110 hover:shadow-[0_0_10px_#d7a1a9] transition-all duration-300"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGithub className="w-5 h-5" />
                </a>
              </div>
            </div>

          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
