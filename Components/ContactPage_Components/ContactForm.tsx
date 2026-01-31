"use client";

import { Send, Loader2 } from "lucide-react";
import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";

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
        "HqPux1QUAuYq1cBT4"
      )
      .then(() => {
        toast.success("Message sent successfully 🚀");
        form.current?.reset();
      })
      .catch(() => {
        toast.error("Failed to send message");
      })
      .finally(() => setLoading(false));
  };

  return (
    <div className="w-80 md:w-180 rounded-3xl border border-neutral-200 dark:border-neutral-800 
      bg-white dark:bg-[#111827] p-8 sm:p-10 shadow-xl dark:shadow-neutral-950/40">

      <form ref={form} onSubmit={handleSubmit} className="space-y-6">
        
        {/* Name + Email */}
        <div className="grid sm:grid-cols-2 gap-5">
          <Input label="Name" name="name" placeholder="Your name" />
          <Input label="Email" name="email" type="email" placeholder="you@email.com" />
        </div>

        <Input label="Subject" name="subject" placeholder="What's this about?" />

        {/* Message */}
        <div>
          <label className="block mb-2 text-sm font-medium text-neutral-700 dark:text-neutral-300">
            Message
          </label>
          <textarea
            name="message"
            required
            rows={5}
            placeholder="Tell me about your Thougts..."
            className="w-full rounded-xl px-4 py-3 resize-none
              bg-neutral-100 dark:bg-[#141d2f]
              text-neutral-900 dark:text-neutral-100
              border border-transparent
              focus:border-neutral-400 dark:focus:border-[#1b2842]
              focus:outline-none focus:ring-2 focus:ring-neutral-300 dark:focus:ring-[#1b2842]"
          />
        </div>

        {/* Button */}
        <button
          type="submit"
          disabled={loading}
          className="w-full rounded-xl py-4 font-semibold flex items-center justify-center gap-2
            bg-neutral-900 text-white hover:bg-neutral-800
            dark:bg-[#172239] dark:text-white dark:hover:bg-[#172543]
            transition-all active:scale-[0.98] disabled:opacity-70"
        >
          {loading ? (
            <>
              Sending <Loader2 className="w-5 h-5 animate-spin" />
            </>
          ) : (
            <>
              Send Message <Send className="w-5 h-5" />
            </>
          )}
        </button>
      </form>
    </div>
  );
};

/* Reusable Input */
const Input = ({
  label,
  name,
  type = "text",
  placeholder,
}: any) => (
  <div>
    <label className="block mb-2 text-sm font-medium text-neutral-700 dark:text-neutral-300">
      {label}
    </label>
    <input
      type={type}
      name={name}
      required
      placeholder={placeholder}
      className="w-full rounded-xl px-4 py-3
        bg-neutral-100 dark:bg-[#141d2f]
        text-neutral-900 dark:text-neutral-100
        border border-transparent
        focus:border-neutral-400 dark:focus:border-[#1b2842]
        focus:outline-none focus:ring-2 focus:ring-neutral-300 dark:focus:ring-[#1b2842]"
    />
  </div>
);

export default ContactForm;
