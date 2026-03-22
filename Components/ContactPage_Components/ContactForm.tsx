"use client";

import {
  Send,
  Loader2,
  User,
  Mail,
  FileText,
  MessageSquare,
} from "lucide-react";
import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";

const Input = ({
  label,
  name,
  type = "text",
  placeholder,
  icon: Icon,
}: {
  label: string;
  name: string;
  type?: string;
  placeholder: string;
  icon: React.ElementType;
}) => (
  <div className="space-y-1.5">
    <label className="block text-xs font-semibold uppercase tracking-wide text-neutral-500 dark:text-[#6B7280]">
      {label}
    </label>
    <div className="relative">
      <Icon className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-400 dark:text-[#4B5563] pointer-events-none" />
      <input
        type={type}
        name={name}
        required
        placeholder={placeholder}
        className="
          w-full rounded-xl pl-10 pr-4 py-2.5
          text-sm text-neutral-800 dark:text-[#E5E7EB]
          bg-neutral-50 dark:bg-[#111827]
          border border-neutral-200 dark:border-[#1F2937]
          placeholder-neutral-400 dark:placeholder-[#4B5563]
          focus:outline-none focus:ring-2 focus:ring-blue-500/20 dark:focus:ring-[#3B82F6]/20
          focus:border-blue-400 dark:focus:border-[#3B82F6]
          hover:border-neutral-300 dark:hover:border-[#294268]
          transition-all duration-200
        "
      />
    </div>
  </div>
);

const ContactForm = () => {
  const [loading, setLoading] = useState(false);
  const form = useRef<HTMLFormElement | null>(null);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!form.current) return;
    setLoading(true);
    emailjs
      .sendForm(
        "service_hya09by",
        "template_bc4h0md",
        form.current,
        "HqPux1QUAuYq1cBT4",
      )
      .then(() => {
        toast.success("Message sent successfully!");
        form.current?.reset();
      })
      .catch(() => toast.error("Failed to send message. Try again."))
      .finally(() => setLoading(false));
  };

  return (
    <form ref={form} onSubmit={handleSubmit} className="space-y-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <Input label="Name" name="name" placeholder="John Doe" icon={User} />
        <Input
          label="Email"
          name="email"
          type="email"
          placeholder="john@example.com"
          icon={Mail}
        />
      </div>

      <Input
        label="Subject"
        name="subject"
        placeholder="Bug report, feature request, collaboration..."
        icon={FileText}
      />
      <div className="space-y-1.5">
        <label className="block text-xs font-semibold uppercase tracking-wide text-neutral-500 dark:text-[#6B7280]">
          Message
        </label>
        <div className="relative">
          <MessageSquare className="absolute left-3.5 top-3.5 w-4 h-4 text-neutral-400 dark:text-[#4B5563] pointer-events-none" />
          <textarea
            name="message"
            required
            rows={5}
            placeholder="Share your thoughts, ideas, or questions — we read every message."
            className="
              w-full rounded-xl pl-10 pr-4 py-2.5
              text-sm text-neutral-800 dark:text-[#E5E7EB]
              bg-neutral-50 dark:bg-[#111827]
              border border-neutral-200 dark:border-[#1F2937]
              placeholder-neutral-400 dark:placeholder-[#4B5563]
              focus:outline-none focus:ring-2 focus:ring-blue-500/20 dark:focus:ring-[#3B82F6]/20
              focus:border-blue-400 dark:focus:border-[#3B82F6]
              hover:border-neutral-300 dark:hover:border-[#294268]
              transition-all duration-200 resize-none
            "
          />
        </div>
      </div>
      <button
        type="submit"
        disabled={loading}
        className="
          w-full flex items-center justify-center gap-2
          px-6 py-3 rounded-xl
          text-sm font-semibold
          bg-neutral-900 text-white hover:bg-neutral-700
          dark:bg-[#266ad8] dark:hover:bg-[#0051ff]
          dark:shadow-[0_4px_20px_rgba(59,130,246,0.3)]
          transition-all duration-200 active:scale-[0.98]
          disabled:opacity-60 disabled:cursor-not-allowed
        "
      >
        {loading ? (
          <>
            <Loader2 className="w-4 h-4 animate-spin" />
            Sending…
          </>
        ) : (
          <>
            Send Message
            <Send className="w-4 h-4" />
          </>
        )}
      </button>
    </form>
  );
};

export default ContactForm;
