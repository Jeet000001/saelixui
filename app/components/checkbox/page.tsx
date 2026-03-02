import Default_Checkbox from "@/Components/CheckBox/Default_Checkbox";
import ShowComponent from "@/Components/ShowComponent";

const page = () => {
  return (
    <div>
      <div className="ml-26 mb-5">
        <h1 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
          Checkbox
        </h1>
        <p className="mt-3 text-base leading-relaxed text-gray-600 dark:text-gray-400 max-w-2xl">
          A small toggle component used to represent a yes-or-no choice.
        </p>
      </div>
      <div>
        {/* default */}
        <ShowComponent
          ComponentName="01. Default"
          installation="npx saelix-ui add default-checkbox"
          ComponentCodeTS={`import Default_Checkbox from "@/components/ui/Default-checkbox";

const DefaultCheckboxDemo = () => {
  return (
    <div>
      <Default_Checkbox label="Accept terms and conditions" />
    </div>
  );
};

export default DefaultCheckboxDemo`}
          ComponentCodeJS={`import Default_Checkbox from "./components/ui/Default-checkbox";

const DefaultCheckboxDemo = () => {
  return (
    <div>
      <Default_Checkbox label="Accept terms and conditions" />
    </div>
  );
};

export default DefaultCheckboxDemo`}
        >
          <Default_Checkbox label="Accept terms and conditions" />
        </ShowComponent>
        {/* disabled */}
        <ShowComponent
          ComponentName="02. Disabled"
          installation="npx saelix-ui add default-checkbox"
          ComponentCodeTS={`import Default_Checkbox from "@/components/ui/Default-checkbox";

const DefaultCheckboxDemo = () => {
  return (
    <div>
      <Default_Checkbox label="Accept terms and conditions" disabled={true} />
    </div>
  );
};

export default DefaultCheckboxDemo`}
          ComponentCodeJS={`import Default_Checkbox from "./components/ui/Default-checkbox";

const DefaultCheckboxDemo = () => {
  return (
    <div>
      <Default_Checkbox label="Accept terms and conditions" disabled={true} />
    </div>
  );
};

export default DefaultCheckboxDemo`}
        >
          <Default_Checkbox
            label="Accept terms and conditions"
            disabled={true}
          />
        </ShowComponent>
      </div>
    </div>
  );
};

export default page;
