"use client";

import { Github, Linkedin, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer
      className="
        w-full border-t border-gray-200 bg-white bottom-0
        dark:bg-[#0B0F19]
        dark:border-[#1F2937]
      "
    >
      <div className="max-w-7xl mx-auto px-4 py-6 md:px-10 sm:py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        
        {/* Left text */}
        <p className="text-sm text-gray-500 text-center sm:text-left
          dark:text-[#9CA3AF]">
          © 2026 Stark UI. Crafted with care for modern web experiences.
        </p>

        {/* Social icons */}
        <div className="flex items-center gap-4">
          
          <a
            href="https://github.com/Jeet000001?tab=overview&from=2026-01-01&to=2026-01-21/"
            target="_blank"
            rel="noopener noreferrer"
            className="
              p-2 rounded-full border border-gray-200 text-gray-600 transition
              hover:bg-gray-100 hover:text-black
              
              dark:border-[#1F2937]
              dark:text-[#9CA3AF]
              dark:hover:bg-[#111827]
              dark:hover:text-[#E5E7EB]
              dark:shadow-[0_10px_30px_rgba(0,0,0,0.6)]
            "
          >
            <Github className="w-5 h-5" />
          </a>

          <a
            href="https://www.linkedin.com/in/jeet-paul-8b4a74310/"
            target="_blank"
            rel="noopener noreferrer"
            className="
              p-2 rounded-full border border-gray-200 text-gray-600 transition
              hover:bg-gray-100 hover:text-blue-600
              
              dark:border-[#1F2937]
              dark:text-[#9CA3AF]
              dark:hover:bg-[#111827]
              dark:hover:text-[#3B82F6]
              dark:shadow-[0_10px_30px_rgba(0,0,0,0.6)]
            "
          >
            <Linkedin className="w-5 h-5" />
          </a>

          <a
            href="https://x.com/iamjeet0001"
            target="_blank"
            rel="noopener noreferrer"
            className="
              p-2 rounded-full border border-gray-200 text-gray-600 transition
              hover:bg-gray-100 hover:text-sky-500
              
              dark:border-[#1F2937]
              dark:text-[#9CA3AF]
              dark:hover:bg-[#111827]
              dark:hover:text-[#3B82F6]
              dark:shadow-[0_10px_30px_rgba(0,0,0,0.6)]
            "
          >
            <Twitter className="w-5 h-5" />
          </a>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
