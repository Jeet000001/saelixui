import Default_input from "@/Components/Input/Default_Input";
import ShowComponent from "@/Components/ShowComponent";

const page = () => {
  return (
    <div>
      <div className="px-4 sm:px-6 md:px-10 lg:px-26 mb-5">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-gray-900 dark:text-white">
          Input
        </h1>
        <p className="mt-3 text-sm sm:text-base md:text-lg leading-relaxed text-gray-600 dark:text-gray-400 max-w-2xl">
          Displays a form control or component that visually resembles an input
          box.
        </p>
      </div>
      <div>
        {/* default */}
        <ShowComponent
          ComponentName="01. Default"
          installation="npx saelix-ui add default-input"
          ComponentCodeTS={`import Default_input from "@/components/ui/Default-input";

const DefaultInputDemo = () => {
  return (
    <div>
      <Default_input />
    </div>
  );
};

export default DefaultInputDemo;
`}
          ComponentCodeJS={`import Default_input from "./components/ui/Default-input";

const DefaultInputDemo = () => {
  return (
    <div>
      <Default_input />
    </div>
  );
};

export default DefaultInputDemo;
`}
        >
          <Default_input />
        </ShowComponent>
      </div>
    </div>
  );
};

export default page;
