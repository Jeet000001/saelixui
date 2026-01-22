import ContactForm from "@/Components/ContactForm";

const ContactPage = () => {
  return (
    <div className="min-h-screen bg-linear-to-br from-slate-50 via-blue-100/10 to-slate-100 py-16 md:py-24 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto flex flex-col items-center gap-12">
        <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
          <div className="w-full max-w-3xl mx-auto text-center space-y-4 sm:space-y-6">
            {/* Badge */}
            <p className="inline-block px-4 py-1 text-sm font-medium  border border-gray-200 text-gray-600 bg-gray-100 rounded-full border-b-2 shadow-md">
              Get In Touch
            </p>

            {/* Heading */}
            <h4 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 leading-tight">
              Let's Start a{" "}
              <span className="text-transparent bg-clip-text bg-linear-to-b from-black to-gray-500">
                Conversation
              </span>
            </h4>

            {/* Description */}
            <p className="max-w-xl mx-auto text-sm sm:text-base text-gray-500 leading-relaxed">
              Have a question or want to work together? Drop us a message and
              we'll get back to you within 24 hours.
            </p>
          </div>
        </div>
        <div className=" flex justify-center">
          <ContactForm />
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
