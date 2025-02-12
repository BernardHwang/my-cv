import React from "react";
import { FaGithub, FaLinkedin, FaInstagram, FaMailBulk } from "react-icons/fa";

export const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-6">
      <div className="container mx-auto flex flex-col items-center text-center">
        <h2 className="text-lg font-semibold mb-4">Connect with me</h2>

        {/* Centered Social Icons */}
        <div className="flex space-x-6">
          {/* GitHub */}
          <a
            href="https://github.com/bernardhwang"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition duration-300"
          >
            <FaGithub size={30} />
          </a>

          {/* LinkedIn */}
          <a
            href="https://linkedin.com/in/jen-fung-hwang-7b02a4278"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition duration-300"
          >
            <FaLinkedin size={30} />
          </a>

          {/* Instagram */}
          <a
            href="https://instagram.com/bernardhwang_9"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition duration-300"
          >
            <FaInstagram size={30} />
          </a>
        </div>

        <p className="text-sm text-gray-500 mt-4 flex flex-row items-center">
          <FaMailBulk />{": "}laohwang0523@gmail.com
        </p>

        <p className="text-sm text-gray-500 mt-4">
          © {new Date().getFullYear()} Bernard Hwang. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
