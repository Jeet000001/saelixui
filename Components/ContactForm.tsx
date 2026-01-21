"use client";

import {
  Send,
} from "lucide-react";
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
    <div className="w-80 bg-white rounded-2xl shadow-xl border border-slate-200 p-6 sm:p-8">
    <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
      <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-semibold text-slate-700 mb-2"
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
            className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-sm sm:text-base"
            placeholder="Your name"
          />
        </div>
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-semibold text-slate-700 mb-2"
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
            className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-sm sm:text-base"
            placeholder="your@email.com"
          />
        </div>
      </div>

      <div>
        <label
          htmlFor="subject"
          className="block text-sm font-semibold text-slate-700 mb-2"
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
          className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-sm sm:text-base"
          placeholder="What's this about?"
        />
      </div>

      <div>
        <label
          htmlFor="message"
          className="block text-sm font-semibold text-slate-700 mb-2"
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
          className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none text-sm sm:text-base"
          placeholder="Tell me about your project..."
        />
      </div>

      <button
        type="submit"
        className="w-full bg-slate-900 hover:bg-slate-800 text-white px-4 sm:px-6 py-3 sm:py-4 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl text-sm sm:text-base"
      >
        Send Message
        <Send className="w-4 h-4 sm:w-5 sm:h-5" />
      </button>
    </form>
    </div>
  );
};

export default ContactForm;
