"use client";

const Installation = () => {
  return (
    <div className="md:px-50 md:pt-10">
      {/* introduction */}
      <div>
        <h1 className="text-2xl mb-5 font-bold text-transparent bg-clip-text bg-linear-to-b from-black to-gray-500">Introduction</h1>
        <p className="text-gray-600">
          Saelix UI is a modern UI component library designed to help developers
          build clean, consistent, and professional user interfaces with minimal
          effort. It provides pre-built, customizable components that integrate
          seamlessly with Tailwind CSS, making it an ideal choice for developers
          working with React or Next.js who want reusable, maintainable
          components and faster development with a consistent design system.
        </p>
      </div>
      {/* installetion */}
      <div>
        <h2>Installation</h2>
        <p>How to install dependencies and structure your app.</p>
      </div>
      {/* Quick Start */}
      <div>
        <h2>Quick Start</h2>
        <p>Run the following command to set up Saelix UI in your project:</p>
        <div>
          <div>
            <h2>npm</h2>
            <button>copy</button>
          </div>
          <p>npx saelix-ui@latest init</p>
        </div>
        <p>
          This command will guide you through the setup process, allowing you to
          configure Saelix UI with your preferred framework (React or Next.js),
          Tailwind CSS configuration, and default theme. Once completed, you can
          start using Saelix UI components immediately in your project.
        </p>
      </div>
      {/* chose Framework */}
      <div>
        <h2>Pick Your Framework</h2>
        <p>
          Start by selecting your preferred framework and follow the
          instructions to install the required dependencies and set up your
          project structure. Saelix UI is designed to work seamlessly with
          modern React frameworks, including React and Next.js, providing full
          compatibility and a consistent development experience across
          environments.
        </p>
        <div>
          <div>
            <img
              width="48"
              height="48"
              src="https://img.icons8.com/color/48/nextjs.png"
              alt="nextjs"
            />
          </div>
          <div>
            <img
              width="48"
              height="48"
              src="https://img.icons8.com/color/48/vite.png"
              alt="vite"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Installation;
