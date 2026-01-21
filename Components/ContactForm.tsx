"use client";

import { Send } from "lucide-react";
import { useState } from "react";

const ContactForm = () => {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setUserName("");
    setEmail("");
    setSubject("");
    setMessage("");
  };
  return (
    <div className="w-80 md:w-180 bg-white rounded-3xl shadow-2xl border border-slate-100 p-8 sm:p-10 backdrop-blur-sm">
      <form onSubmit={handleSubmit} className="space-y-6 sm:space-y-8">
        <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-semibold text-slate-800 mb-3 tracking-wide"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
              required
              className="w-full px-4 sm:px-5 py-3 sm:py-3.5 bg-linear-to-b from-slate-50 to-slate-100 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 text-sm sm:text-base placeholder-slate-400 hover:border-slate-300"
              placeholder="Your name"
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-semibold text-slate-800 mb-3 tracking-wide"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full px-4 sm:px-5 py-3 sm:py-3.5 bg-linear-to-b from-slate-50 to-slate-100 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 text-sm sm:text-base placeholder-slate-400 hover:border-slate-300"
              placeholder="your@email.com"
            />
          </div>
        </div>

        <div>
          <label
            htmlFor="subject"
            className="block text-sm font-semibold text-slate-800 mb-3 tracking-wide"
          >
            Subject
          </label>
          <input
            type="text"
            id="subject"
            name="subject"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            required
            className="w-full px-4 sm:px-5 py-3 sm:py-3.5 bg-linear-to-b from-slate-50 to-slate-100 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 text-sm sm:text-base placeholder-slate-400 hover:border-slate-300"
            placeholder="What's this about?"
          />
        </div>

        <div>
          <label
            htmlFor="message"
            className="block text-sm font-semibold text-slate-800 mb-3 tracking-wide"
          >
            Message
          </label>
          <textarea
            id="message"
            name="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
            rows={5}
            className="w-full px-4 sm:px-5 py-3 sm:py-3.5 bg-linear-to-b from-slate-50 to-slate-100 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 resize-none text-sm sm:text-base placeholder-slate-400 hover:border-slate-300"
            placeholder="Tell me about your project..."
          />
        </div>

        <button
          type="submit"
          className="w-full bg-linear-to-b from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-4 sm:px-6 py-3.5 sm:py-4 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center gap-2 shadow-lg hover:shadow-2xl text-sm sm:text-base tracking-wide"
        >
          Send Message
          <Send className="w-4 h-4 sm:w-5 sm:h-5" />
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
