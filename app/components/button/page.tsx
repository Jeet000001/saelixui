import ShowComponent from "@/Components/ShowComponent";

const ComponentPage = () => {
  return (
    <div>
       <div className="ml-26">
        <h1 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
          Button
        </h1>

        <p className="mt-3 text-base leading-relaxed text-gray-600 dark:text-gray-400 max-w-2xl">
          Renders a button or any element styled to behave like a button.
        </p>
      </div>
      <div>
        <ShowComponent
          ComponentName="01. Primary"
          installation="npx saelix-ui add primary-button"
          ComponentCodeTS={`import { Button } from "@/components/ui/button";

const PrimaryButtonDemo = () => <Button>Primary</Button>;

export default PrimaryButtonDemo;`}
          ComponentCodeJS={`import { Button } from "./components/ui/button";

const PrimaryButtonDemo = () => <Button>Primary</Button>;

export default PrimaryButtonDemo;`}
        >
          <button
            className="
              rounded-xl px-6 py-2 transition active:scale-95

              /* Light mode (unchanged) */
              bg-black text-white hover:bg-gray-900

              /* Dark mode (updated) */
              dark:bg-[#3B82F6]
              dark:text-[#E5E7EB]
              dark:hover:bg-[#2563EB]
              dark:shadow-[0_10px_30px_rgba(0,0,0,0.6)]
            "
          >
            Primary
          </button>
        </ShowComponent>
      </div>
    </div>
  );
};

export default ComponentPage;
