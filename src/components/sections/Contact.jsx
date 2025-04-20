import React, { useState, useRef } from "react";
import { RevealOnScroll } from "../RevealOnScroll";
import emailjs from "emailjs-com";
import { FaLinkedin, FaGithub, FaInstagram, FaEnvelope } from "react-icons/fa";
import conf from "../../conf/conf";

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const formRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs.sendForm(
      (conf.emailjsServiceId),
      (conf.emailjsTemplateId),
      formRef.current,
      (conf.emailjsPublicKey)
    )
      .then(() => {
        alert("Message Sent!");
        setFormData({ name: "", email: "", message: "" });
      })
      .catch(() => alert("Oops! Something went wrong. Please try again."));
  };

  return (
    <section
      id="contact"
      className="min-h-screen flex flex-col justify-center py-20 px-4"
    >
      <RevealOnScroll>
        {/* Heading */}
        <div className="w-full  text-center mb-12">
          <h2
            className="text-3xl font-bold bg-gradient-to-r 
                       from-[#e196a1] to-[#8f2d49] bg-clip-text 
                       text-transparent"
          >
            Get In Touch
          </h2>
          <p className="mt-4 text-lg text-gray-700 max-w-2xl mx-auto">
            I love to hear from you. Whether you have a question or just want
            to chat about projects — shoot me a message.
          </p>
        </div>

        {/* Form */}
        <form
          ref={formRef}
          className="space-y-6 max-w-lg w-full mx-auto mb-20"
          onSubmit={handleSubmit}
        >
          <input
            type="text"
            name="from_name"
            value={formData.name}
            placeholder="Name..."
            required
            className="w-full bg-gradient-to-r from-[#d7a1a9] to-[#ff80e383] text-white placeholder-white/70 
                       py-3 px-6 rounded-lg font-medium transition duration-300 
                       outline-none focus:ring-2 focus:ring-[#d7a1a9] shadow-sm"
            onChange={(e) =>
              setFormData({ ...formData, name: e.target.value })
            }
          />

          <input
            type="email"
            name="email"
            value={formData.email}
            placeholder="example@gmail.com"
            required
            className="w-full bg-gradient-to-r from-[#d7a1a9] to-[#ff80e383] text-white placeholder-white/70 
                       py-3 px-6 rounded-lg font-medium transition duration-300 
                       outline-none focus:ring-2 focus:ring-[#d7a1a9] shadow-sm"
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
          />

          <textarea
            name="message"
            rows={5}
            value={formData.message}
            placeholder="Your Message..."
            required
            className="w-full bg-gradient-to-r from-[#d7a1a9] to-[#ff80e383] text-white placeholder-white/70 
                       py-3 px-6 rounded-lg font-medium transition duration-300 
                       outline-none focus:ring-2 focus:ring-[#d7a1a9] shadow-sm"
            onChange={(e) =>
              setFormData({ ...formData, message: e.target.value })
            }
          />

          <button
            type="submit"
            className="w-full bg-[#ab5f6a] text-white py-3 px-6 rounded 
                       font-medium transition relative overflow-hidden 
                       hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,128,0.4)]"
          >
            Send Message
          </button>
        </form>

        {/* Contact Info */}
        <div className="flex flex-col md:flex-row justify-between items-start max-w-6xl mx-auto gap-10">
          {/* Left - Reach Me */}
          <div className="md:w-1/2">
            <h3 className="text-sm uppercase font-semibold text-[#df4f64] mb-3">
              Reach me at
            </h3>
            <p className="space-y-1 text-gray-700">
              <a
                href="mailto:nikitabaniya57@gmail.com"
                className="flex items-center gap-2  hover:text-[#f886da]"
              >
               <FaEnvelope /> nikitabaniya57@gmail.com
              </a>
             
            </p>
          </div>

          {/* Right - Social */}
          <div className="md:w-1/2 flex md:justify-end">
            <div>
              <h3 className="text-sm uppercase font-semibold text-[#df4f64] mb-3">
                Social
              </h3>
              <div className="flex gap-6 text-2xl text-gray-800">
                <a
                  href="https://www.linkedin.com/in/nikita-baniya-16a70921a/"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-[#f886da]"
                >
                  <FaLinkedin />
                </a>
                <a
                  href="https://github.com/bnikita11"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-[#f886da]"
                >
                  <FaGithub />
                </a>
                <a
                  href="https://www.instagram.com/baniya_nikita_/"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-[#f886da]"
                >
                  <FaInstagram />
                </a>
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
