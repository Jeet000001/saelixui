"use client";

import { Send } from "lucide-react";
import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";

const ContactForm = () => {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const form = useRef<HTMLFormElement | null>(null);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!form.current) return;

    emailjs
      .sendForm(
        "service_hya09by",
        "template_bc4h0md",
        form.current,
        "HqPux1QUAuYq1cBT4"
      )
      .then(() => {
        toast.success("✅ Email sent successfully!");

        // Reset form fields
        form.current?.reset();
        setUserName("");
        setEmail("");
        setSubject("");
        setMessage("");
      })
      .catch(() => {
        toast.error("❌ Failed to send email");
      });
  };

  return (
    <div className="w-80 md:w-180 bg-white rounded-3xl shadow-2xl border border-slate-100 p-8 sm:p-10 backdrop-blur-sm">
      <form
        ref={form}
        onSubmit={handleSubmit}
        className="space-y-6 sm:space-y-8"
      >
        <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
          <div>
            <label className="block text-sm font-semibold text-slate-800 mb-3">
              Name
            </label>
            <input
              type="text"
              name="name"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
              required
              className="w-full px-4 py-3 bg-slate-100 rounded-xl"
              placeholder="Your name"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-slate-800 mb-3">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full px-4 py-3 bg-slate-100 rounded-xl"
              placeholder="your@email.com"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-semibold text-slate-800 mb-3">
            Subject
          </label>
          <input
            type="text"
            name="subject"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            required
            className="w-full px-4 py-3 bg-slate-100 rounded-xl"
            placeholder="What's this about?"
          />
        </div>

        <div>
          <label className="block text-sm font-semibold text-slate-800 mb-3">
            Message
          </label>
          <textarea
            name="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
            rows={5}
            className="w-full px-4 py-3 bg-slate-100 rounded-xl resize-none"
            placeholder="Tell me about your project..."
          />
        </div>

        <button
          type="submit"
          className="w-full bg-gray-800 hover:bg-gray-950 text-white py-4 rounded-xl font-semibold flex items-center justify-center gap-2"
        >
          Send Message
          <Send className="w-5 h-5" />
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
