import {
  Mail,
  MessageCircle,
  Github,
  Linkedin,
  Send,
  MapPin,
  Clock,
} from "lucide-react";

const ContactCards = () => {
  const contactInfo = [
    {
      icon: <Mail className="w-5 h-5 sm:w-6 sm:h-6" />,
      title: "Email",
      description: "Get in touch via email",
      value: "hello@starkui.dev",
      action: "mailto:hello@starkui.dev",
    },
    {
      icon: <MapPin className="w-5 h-5 sm:w-6 sm:h-6" />,
      title: "Location",
      description: "Based in",
      value: "India",
      action: null,
    },
  ];
  const socialLinks = [
    {
      icon: <Github className="w-4 h-4 sm:w-5 sm:h-5" />,
      name: "GitHub",
      url: "https://github.com",
      color: "hover:text-gray-900"
    },
    {
      icon: <Linkedin className="w-4 h-4 sm:w-5 sm:h-5" />,
      name: "LinkedIn",
      url: "https://linkedin.com",
      color: "hover:text-blue-600"
    }
  ];
  return (
    <div>
      <div
        className="space-y-6 sm:space-y-8"

      >
        {/* Contact Methods */}
        <div className="space-y-4 sm:space-y-6">
          {contactInfo.map((info, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-4 sm:p-6 shadow-lg border border-slate-200 hover:shadow-xl transition-all duration-300"
            >
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="text-blue-600 bg-blue-50 p-2.5 sm:p-3 rounded-lg">
                  {info.icon}
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-slate-900 mb-1 text-sm sm:text-base">
                    {info.title}
                  </h3>
                  <p className="text-slate-600 text-xs sm:text-sm mb-2">
                    {info.description}
                  </p>
                  {info.action ? (
                    <a
                      href={info.action}
                      className="text-blue-600 hover:text-blue-700 font-medium transition-colors text-sm sm:text-base"
                    >
                      {info.value}
                    </a>
                  ) : (
                    <span className="text-slate-700 font-medium text-sm sm:text-base">
                      {info.value}
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Response Time */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-xl p-4 sm:p-6 text-white">
          <div className="flex items-center gap-2 sm:gap-3 mb-2 sm:mb-3">
            <Clock className="w-5 h-5 sm:w-6 sm:h-6" />
            <h3 className="font-semibold text-base sm:text-lg">
              Quick Response
            </h3>
          </div>
          <p className="text-blue-100 text-sm sm:text-base">
            I typically respond within 24 hours. For urgent matters, feel free
            to reach out directly.
          </p>
        </div>

        {/* Social Links */}
        <div className="bg-white rounded-xl p-4 sm:p-6 shadow-lg border border-slate-200">
          <h3 className="font-semibold text-slate-900 mb-3 sm:mb-4 text-sm sm:text-base">
            Connect with me
          </h3>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center gap-2 px-3 sm:px-4 py-2 bg-slate-50 hover:bg-slate-100 rounded-lg transition-all duration-300 text-slate-600 ${social.color} text-sm sm:text-base`}
              >
                {social.icon}
                <span className="font-medium">{social.name}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactCards;
