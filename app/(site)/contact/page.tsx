"use client";

import ContactForm from "@/Components/ContactPage_Components/ContactForm";
import { Mail, Github, Clock } from "lucide-react";

const info = [
  {
    icon: Mail,
    label: "Email",
    value: "jeet.dev018@gmail.com",
    sub: "Reply within 24 hours",
  },
  {
    icon: Github,
    label: "GitHub",
    value: "Open an Issue",
    sub: "Bug reports & feature requests",
  },
  {
    icon: Clock,
    label: "Availability",
    value: "Mon – Sun",
    sub: "We're online most days",
  },
];

const ContactPage = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-[#0B0F19] py-16 sm:py-20 px-4 sm:px-6">
      <div className="max-w-5xl mx-auto flex flex-col items-center gap-12 sm:gap-14">
        <div className="max-w-xl text-center space-y-4">
          <div
            className="
            inline-flex items-center gap-2
            px-3.5 py-1.5 rounded-full
            text-xs font-semibold uppercase tracking-widest
            border
            bg-neutral-50 border-neutral-200 text-blue-600
            dark:bg-[#111827] dark:border-[#1F2937] dark:text-[#3B82F6]
          "
          >
            <span className="w-1.5 h-1.5 rounded-full bg-blue-500 dark:bg-[#3B82F6] animate-pulse" />
            Contact
          </div>
          <h1
            className="
            text-3xl sm:text-4xl lg:text-5xl
            font-bold tracking-tight leading-[1.15]
            text-neutral-900 dark:text-[#E5E7EB]
          "
          >
            Ideas, feedback,{" "}
            <span
              className="
              text-transparent bg-clip-text
              bg-linear-to-b from-neutral-900 to-neutral-400
              dark:from-[#3B82F6] dark:to-[#9CA3AF]
            "
            >
              or just hi?
            </span>
          </h1>
          <p
            className="
            max-w-sm mx-auto
            text-sm sm:text-base leading-relaxed
            text-neutral-500 dark:text-[#9CA3AF]
          "
          >
            Whether it's a bug, a feature idea, or you just want to say hello —
            I read every message and reply personally.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full">
          {info.map(({ icon: Icon, label, value, sub }) => (
            <div
              key={label}
              className="
              flex items-start gap-3.5 p-4 rounded-2xl border
              bg-neutral-50 border-neutral-200
              dark:bg-[#111827] dark:border-[#1F2937]
              hover:border-neutral-300 dark:hover:border-[#294268]
              transition-all duration-200
            "
            >
              <div
                className="
                flex items-center justify-center w-9 h-9 rounded-xl border shrink-0
                bg-white border-neutral-200
                dark:bg-[#0d1117] dark:border-[#1F2937]
              "
              >
                <Icon className="w-4 h-4 text-blue-500 dark:text-[#3B82F6]" />
              </div>
              <div className="min-w-0">
                <p className="text-xs text-neutral-400 dark:text-[#4B5563] mb-0.5">
                  {label}
                </p>
                <p className="text-sm font-semibold text-neutral-800 dark:text-[#E5E7EB] truncate">
                  {value}
                </p>
                <p className="text-xs text-neutral-400 dark:text-[#6B7280] mt-0.5">
                  {sub}
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="w-full max-w-2xl">
          <div
            className="
            rounded-2xl border overflow-hidden
            bg-white border-neutral-200
            dark:bg-[#0d1117] dark:border-[#1F2937]
            shadow-sm dark:shadow-[0_4px_30px_rgba(0,0,0,0.5)]
          "
          >
            <div
              className="
              px-5 sm:px-6 py-4 border-b
              bg-neutral-50 border-neutral-200
              dark:bg-[#111827] dark:border-[#1F2937]
              flex items-center justify-between
            "
            >
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-blue-500 dark:text-[#3B82F6]" />
                <span className="text-sm font-semibold text-neutral-700 dark:text-[#E5E7EB]">
                  Send a message
                </span>
              </div>
              <span className="text-xs text-neutral-400 dark:text-[#4B5563]">
                All fields required
              </span>
            </div>

            <div className="p-5 sm:p-6">
              <ContactForm />
            </div>
          </div>
          <p className="mt-4 text-center text-xs text-neutral-400 dark:text-[#4B5563]">
            I don't share your information with anyone. Ever.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
