import ShowComponent from "@/Components/ShowComponent";

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
          ComponentCodeTS={`import { Button } from "@/components/ui/primary-button";

const PrimaryButtonDemo = () => <Button>Primary</Button>;

export default PrimaryButtonDemo;`}
          ComponentCodeJS={`import { Button } from "./components/ui/primary-button";

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
          ComponentCodeTS={`import { Button } from "@/components/ui/secondary-button";

const SecondaryButtonDemo = () => <Button>Secondary</Button>;

export default SecondaryButtonDemo;`}
          ComponentCodeJS={`import { Button } from "./components/ui/secondary-button";

const SecondaryButtonDemo = () => <Button>Secondary</Button>;

export default SecondaryButtonDemo;`}>
          <button className="bg-gray-100 hover:bg-gray-50 dark:bg-gray-700 dark:hover:bg-gray-600 text-black dark:text-white border-b-2 border-gray-200 dark:border-b-2 dark:border-gray-600 px-5 py-2 rounded-xl active:scale-95 transition duration-300 ease-in-out cursor-pointer">Secondary</button>
        </ShowComponent>
      </div>
    </div>
  );
};

export default ComponentPage;
