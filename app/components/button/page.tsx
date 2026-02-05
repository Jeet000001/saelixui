import ShowComponent from "@/Components/ShowComponent";
import { Github, Linkedin } from "lucide-react";

const ComponentPage = () => {
  return (
    <div>
      <div className="ml-26 mb-5">
        <h1 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
          Button
        </h1>

        <p className="mt-3 text-base leading-relaxed text-gray-600 dark:text-gray-400 max-w-2xl">
          Renders a button or any element styled to behave like a button.
        </p>
      </div>
      <div>
        {/* Primary Button */}
        <ShowComponent
          ComponentName="01. Primary"
          installation="npx saelix-ui add primary-button"
          ComponentCodeTS={`import Primary_Button from "@/components/ui/Primary-button";

const PrimaryButtonDemo = () => <Button>Primary</Button>;

export default PrimaryButtonDemo;`}
          ComponentCodeJS={`import Primary_Button from "./components/ui/Primary-button";

const PrimaryButtonDemo = () => <Button>Primary</Button>;

export default PrimaryButtonDemo;`}
        >
          <button
            className="
              bg-black hover:bg-gray-900 dark:bg-white dark:hover:bg-gray-100 text-white dark:text-black border-b-2 border-gray-600 dark:border-b-2 dark:border-gray-400 px-5 py-2 rounded-xl active:scale-95 transition duration-300 ease-in-out cursor-pointer 
            "
          >
            Primary
          </button>
        </ShowComponent>
        {/* Secondary Button */}
        <ShowComponent
          ComponentName="02. Secondary"
          installation="npx saelix-ui add secondary-button"
          ComponentCodeTS={`import Secondary_Button from "@/components/ui/Secondary-button";

const SecondaryButtonDemo = () => <Button>Secondary</Button>;

export default SecondaryButtonDemo;`}
          ComponentCodeJS={`import Secondary_Button from "./components/ui/Secondary-button";

const SecondaryButtonDemo = () => <Button>Secondary</Button>;

export default SecondaryButtonDemo;`}
        >
          <button className="bg-gray-100 hover:bg-gray-50 dark:bg-gray-700 dark:hover:bg-gray-600 text-black dark:text-white border-b-2 border-gray-200 dark:border-b-2 dark:border-gray-600 px-5 py-2 rounded-xl active:scale-95 transition duration-300 ease-in-out cursor-pointer">
            Secondary
          </button>
        </ShowComponent>
        {/* Destructive Button */}
        <ShowComponent
          ComponentName="03. Destructive"
          installation="npx saelix-ui add destructive-button"
          ComponentCodeTS={`import Destructive_Button from "@/components/ui/Destructive-button";

const DestructiveButtonDemo = () => <Button>Destructive</Button>;

export default DestructiveButtonDemo;`}
          ComponentCodeJS={`import Destructive_Button from "./components/ui/Destructive-button";

const DestructiveButtonDemo = () => <Button>Destructive</Button>;

export default DestructiveButtonDemo;`}
        >
          <button className="bg-red-600 hover:bg-red-500 dark:bg-red-500 dark:hover:bg-red-400 text-white border-b-2 border-red-400 dark:border-b-2 dark:border-red-400 px-5 py-2 rounded-xl active:scale-95 transition duration-300 ease-in-out cursor-pointer ">
            Destructive
          </button>
        </ShowComponent>
        {/* Outline Button */}
        <ShowComponent
          ComponentName="04. Outline"
          installation="npx saelix-ui add outline-button"
          ComponentCodeTS={`import Outline_Button from "@/components/ui/Outline-button";

const OutlineButtonDemo = () => <Button>Outline</Button>;

export default OutlineButtonDemo;`}
          ComponentCodeJS={`import Outline_Button from "./components/ui/Outline-button";

const OutlineButtonDemo = () => <Button>Outline</Button>;

export default OutlineButtonDemo;`}
        >
          <button className="border border-gray-300 hover:bg-gray-100 dark:border-gray-700 dark:hover:bg-gray-950 dark:text-white px-5 py-2 rounded-xl active:scale-95 transition duration-300 ease-in-out cursor-pointer">
            Outline
          </button>
        </ShowComponent>
        {/* Ghost Button */}
        <ShowComponent
          ComponentName="05. Ghost"
          installation="npx saelix-ui add ghost-button"
          ComponentCodeTS={`import Ghost_Button from "@/components/ui/Ghost-button";

const GhostButtonDemo = () => <Button>Ghost</Button>;

export default GhostButtonDemo;`}
          ComponentCodeJS={`import Ghost_Button from "./components/ui/Ghost-button";

const GhostButtonDemo = () => <Button>Ghost</Button>;

export default GhostButtonDemo;`}
        >
          <button className="hover:bg-gray-100 dark:hover:bg-gray-800 dark:text-white px-5 py-2 rounded-xl active:scale-95 transition duration-300 ease-in-out cursor-pointer">
            Ghost
          </button>
        </ShowComponent>
        {/* Link Button */}
        <ShowComponent
          ComponentName="06. Link"
          installation="npx saelix-ui add link-button"
          ComponentCodeTS={`import Link_Button from "@/components/ui/Link-button";

const LinkButtonDemo = () => <Button>Link</Button>;

export default LinkButtonDemo;`}
          ComponentCodeJS={`import Ghost_Button from "./components/ui/Link-button";

const LinkButtonDemo = () => <Button>Link</Button>;

export default LinkButtonDemo;`}
        >
          <button className="hover:underline dark:text-white dark:hover:underline px-5 py-2 rounded-xl active:scale-95 transition duration-300 ease-in-out cursor-pointer">
            Link
          </button>
        </ShowComponent>
        {/* Disabled Button */}
        <ShowComponent
          ComponentName="07. Disabled"
          installation="npx saelix-ui add disabled-button"
          ComponentCodeTS={`import Disabled_Button from "@/components/ui/Disabled-button";

const DisabledButtonDemo = () => <Button>Disabled</Button>;

export default DisabledButtonDemo;`}
          ComponentCodeJS={`import Disabled_Button from "./components/ui/Disabled-button";

const DisabledButtonDemo = () => <Button>Disabled</Button>;

export default DisabledButtonDemo;`}
        >
          <button
            disabled
            className="
        px-5 py-2 rounded-xl border-b-2 transition duration-300 ease-in-out
        bg-black text-white border-gray-600
        hover:bg-gray-900 active:scale-95
        dark:bg-white dark:text-black dark:border-gray-400
        dark:hover:bg-gray-100
        disabled:bg-gray-400
        disabled:text-gray-700
        disabled:border-gray-300
        disabled:cursor-not-allowed
        disabled:opacity-60
        disabled:hover:bg-gray-400 disabled:active:scale-100"
          >
            Disabled
          </button>
        </ShowComponent>
        {/* Rounded Button */}
        <ShowComponent
          ComponentName="08. Rounded"
          installation="npx saelix-ui add runded-button"
          ComponentCodeTS={`import Rounded_Button from "@/components/ui/Rounded-button";

const RoundedButtonDemo = () => <Button>Rounded</Button>;

export default RoundedButtonDemo;`}
          ComponentCodeJS={`import Rounded_Button from "./components/ui/Rounded-button";

const RoundedButtonDemo = () => <Button>Rounded</Button>;

export default RoundedButtonDemo;`}
        >
          <button className="bg-black hover:bg-gray-900 dark:bg-white dark:hover:bg-gray-100 text-white dark:text-black border-b-2 border-gray-600 dark:border-b-2 dark:border-gray-400 px-5 py-2 rounded-full active:scale-95 transition duration-300 ease-in-out cursor-pointer">
            Disabled
          </button>
        </ShowComponent>
        {/* Icon Button */}
        <ShowComponent
          ComponentName="09. Icon"
          installation="npx saelix-ui add icon-button"
          ComponentCodeTS={`import Icon_Button from "@/components/ui/Icon-button";
import { Github, Linkedin } from "lucide-react";

const IconButtonDemo = () => {
  return (
    <div className="flex gap-4">
      <Button>
        <Github />
      </Button>
      <Button>
        <Linkedin />
      </Button>
    </div>
  );
};
export default IconButtonDemo;`}
          ComponentCodeJS={`import Icon_Button from "./components/ui/Icon-button";
import { Github, Linkedin } from "lucide-react";

const IconButtonDemo = () => {
  return (
    <div className="flex gap-4">
      <Button>
        <Github />
      </Button>
      <Button>
        <Linkedin />
      </Button>
    </div>
  );
};
export default IconButtonDemo;`}
        >
          <div className="flex gap-4">
            <button className="bg-black hover:bg-gray-900 dark:bg-white dark:hover:bg-gray-100 text-white dark:text-black px-3 py-3 rounded-full active:scale-95 transition duration-300 ease-in-out cursor-pointer">
              <Github />
            </button>
            <button className="bg-black hover:bg-gray-900 dark:bg-white dark:hover:bg-gray-100 text-white dark:text-black px-3 py-3 rounded-full active:scale-95 transition duration-300 ease-in-out cursor-pointer">
              <Linkedin />
            </button>
          </div>
        </ShowComponent>
      </div>
    </div>
  );
};

export default ComponentPage;
