import React from "react";
import { GoMail } from "react-icons/go";
import { FiFileText } from "react-icons/fi";
import resume from "../assets/resume.pdf";

const Contact = () => {
  return (
    <section id="contact" className="py-28 bg-gray-100">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-8">Get in Touch</h2>
        <p className="text-gray-600 mb-8">
          I'm always open to discussing new projects, creative ideas or
          opportunities to be part of your visions.
        </p>
        <div className="flex justify-center gap-6">
          <a
            href="mailto:rajashekharsurakanti@gmail.com"
            title="Send Email"
            className="flex items-center gap-2 bg-black text-white px-6 py-3 rounded-md hover:bg-gray-800 transition"
          >
            <GoMail className="h-5 w-5" />
            Email Me
          </a>
          <a
            href={resume}
            target="_blank"
            title="Download Resume"
            className="flex items-center gap-2 bg-white text-black px-6 py-3 rounded-md border border-black hover:bg-gray-100 transition"
          >
            <FiFileText className="h-5 w-5" />
            Download Resume
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
