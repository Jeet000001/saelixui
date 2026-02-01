import ContactForm from "@/Components/ContactPage_Components/ContactForm";

const ContactPage = () => {
  return (
    <div
      className="
      min-h-screen
     dark:bg-[#0B0F19]
      py-20 px-4 sm:px-6
    "
    >
      <div className="max-w-7xl mx-auto flex flex-col items-center gap-14">
        {/* Heading Section */}
        <div className="max-w-3xl text-center space-y-5">
          {/* Badge */}
          <p
            className="
            inline-flex items-center gap-2
            px-4 py-1.5 text-sm font-medium
            rounded-full
            bg-white/80 dark:bg-[#0B0F19]
            text-neutral-700 dark:text-neutral-300
            border-2 border-neutral-200 dark:border-[#182034]
            shadow-sm backdrop-blur
          "
          >
            Get in Touch
          </p>

          {/* Heading */}
          <h1
            className="
            text-4xl sm:text-5xl lg:text-6xl
            font-extrabold tracking-tight
            text-neutral-900 dark:text-white
          "
          >
            Let’s Start a{" "}
            <span
              className="
              text-transparent bg-clip-text
              bg-linear-to-b from-neutral-900 to-neutral-500
              dark:from-[#3B82F6]
            dark:to-[#9CA3AF]
            "
            >
              Conversation
            </span>
          </h1>

          {/* Description */}
          <p
            className="
            max-w-xl mx-auto
            text-sm sm:text-base
            text-neutral-600 dark:text-neutral-400
            leading-relaxed
          "
          >
            Have a question or want to work together? Drop us a message and
            we’ll get back to you within 24 hours.
          </p>
        </div>

        {/* Form */}
        <div className="flex justify-center w-full">
          <ContactForm />
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
