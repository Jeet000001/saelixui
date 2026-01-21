"use client";

import { Github, Linkedin, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="w-full border-t border-gray-200 bg-white bottom-0">
      <div className="max-w-7xl mx-auto px-4 py-6  md:px-10 sm:py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        {/* Left text */}
        <p className="text-sm text-gray-500 text-center sm:text-left">
          © 2026 Stark UI. Crafted with care for modern web experiences.
        </p>

        {/* Social icons */}
        <div className="flex items-center gap-4">
          <a
            href="https://github.com/Jeet000001?tab=overview&from=2026-01-01&to=2026-01-21/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full border border-gray-200 text-gray-600 hover:bg-gray-100 hover:text-black transition"
          >
            <Github className="w-5 h-5" />
          </a>

          <a
            href="https://www.linkedin.com/in/jeet-paul-8b4a74310/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full border border-gray-200 text-gray-600 hover:bg-gray-100 hover:text-blue-600 transition"
          >
            <Linkedin className="w-5 h-5" />
          </a>

          <a
            href="https://x.com/iamjeet0001"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full border border-gray-200 text-gray-600 hover:bg-gray-100 hover:text-sky-500 transition"
          >
            <Twitter className="w-5 h-5" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
