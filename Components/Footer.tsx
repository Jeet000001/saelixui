"use client";

import { Github, Linkedin, Twitter, Sparkles, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  const navLinks = [
    { label: "Components", href: "/components" },
    { label: "Documentation", href: "/documentation" },
    { label: "Contact", href: "/contact" },
  ];

  const socials = [
    {
      icon: Github,
      href: "https://github.com/Jeet000001?tab=overview&from=2026-01-01&to=2026-01-21/",
      label: "GitHub",
    },
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/in/jeet-paul-8b4a74310/",
      label: "LinkedIn",
    },
    {
      icon: Twitter,
      href: "https://x.com/iamjeet0001",
      label: "Twitter / X",
    },
  ];

  return (
    <footer
      className="
        relative w-full overflow-hidden
        border-t border-neutral-200/80
        bg-white
        dark:bg-[#0B0F19]
        dark:border-[#1F2937]
      "
    >
      <div className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-150 h-px bg-linear-to-r from-transparent via-blue-500/40 to-transparent dark:via-[#3B82F6]/30" />

      <div className="max-w-7xl mx-auto px-5 sm:px-8 md:px-14 lg:px-24 py-10 sm:py-12">

        <div className="flex flex-col md:flex-row items-start justify-between gap-10 md:gap-6">

          <div className="flex flex-col gap-4 max-w-xs">
            <Link href="/" className="flex items-center gap-2.5 group w-fit">
              <div className="flex size-8 items-center justify-center rounded-lg bg-neutral-900 dark:bg-[#111827] dark:border dark:border-[#1F2937]">
                <Image src="/letter-s (2).png" alt="Logo" width={26} height={26} />
              </div>
              <span className="text-lg font-bold tracking-tight text-neutral-900 dark:text-[#E5E7EB]">
                Saelix <span className="text-blue-600 dark:text-[#3B82F6]">UI</span>
              </span>
            </Link>

            <p className="text-sm leading-relaxed text-neutral-500 dark:text-[#6B7280]">
              A modern component library built for developers who care about craft — fast, flexible, and production-ready.
            </p>

            <div className="flex items-center gap-2 mt-1">
              {socials.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="
                    flex items-center justify-center
                    w-8 h-8 rounded-lg border
                    text-neutral-500 border-neutral-200
                    hover:text-neutral-900 hover:border-neutral-400 hover:bg-neutral-50
                    transition-all duration-200

                    dark:text-[#6B7280] dark:border-[#1F2937]
                    dark:hover:text-[#3B82F6] dark:hover:border-[#294268]
                    dark:hover:bg-[#111827]
                  "
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-10 sm:gap-16 md:gap-20">

            <div className="flex flex-col gap-3">
              <p className="text-xs font-semibold uppercase tracking-widest text-neutral-400 dark:text-[#4B5563]">
                Navigate
              </p>
              <ul className="flex flex-col gap-2">
                {navLinks.map(({ label, href }) => (
                  <li key={label}>
                    <Link
                      href={href}
                      className="
                        text-sm text-neutral-500 hover:text-neutral-900
                        transition-colors duration-200
                        dark:text-[#9CA3AF] dark:hover:text-[#E5E7EB]
                      "
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col gap-3 max-w-55">
              <p className="text-xs font-semibold uppercase tracking-widest text-neutral-400 dark:text-[#4B5563]">
                Stay Updated
              </p>
              <p className="text-sm text-neutral-500 dark:text-[#6B7280] leading-relaxed">
                New components dropping regularly. Follow along.
              </p>
              <a
                href="https://github.com/Jeet000001"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  inline-flex items-center gap-1.5 w-fit
                  text-sm font-medium text-blue-600 dark:text-[#3B82F6]
                  hover:underline underline-offset-4
                  transition-all duration-200
                "
              >
                Star on GitHub
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-10 mb-6 h-px bg-neutral-100 dark:bg-[#1F2937]" />

        <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-neutral-400 dark:text-[#4B5563] text-center sm:text-left">
            © 2026 Saelix UI — Built with{" "}
            <span className="text-blue-500 dark:text-[#3B82F6]">♥</span>{" "}
            for the open web.
          </p>
          <div className="flex items-center gap-1.5 text-xs text-neutral-400 dark:text-[#4B5563]">
            <Sparkles className="w-3 h-3 text-blue-400 dark:text-[#3B82F6]" />
            <span>50+ components & counting</span>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;