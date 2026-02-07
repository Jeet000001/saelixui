import Default_Alart from "@/Components/Alert/Default_Alert";
import ShowComponent from "@/Components/ShowComponent";

const page = () => {
  return (
    <div>
      <div className="ml-26 mb-5">
        <h1 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
          Alert
        </h1>

        <p className="mt-3 text-base leading-relaxed text-gray-600 dark:text-gray-400 max-w-2xl">
          A stacked set of interactive headings that toggle their content
          panels.
        </p>
      </div>
      <div>
        {/* Default Alert */}
        <ShowComponent
          ComponentName="01. Default"
          installation="npx saelix-ui add default-alert"
          ComponentCodeTS={`import Default_Alart from "@/components/ui/Default-alert";

const page = () => {
  return (
    <Default_Alart
      btntext="Delete Account"
      alartHeading="Are you absolutely sure?"
      alartDiscription="This action cannot be undone. This will permanently delete your
              account and remove your data from our servers."
    />
  );
};

export default page;

        `}
          ComponentCodeJS={`import Default_Alart from "./components/ui/Default-alert";

const page = () => {
  return (
    <Default_Alart
      btntext="Delete Account"
      alartHeading="Are you absolutely sure?"
      alartDiscription="This action cannot be undone. This will permanently delete your
              account and remove your data from our servers."
    />
  );
};

export default page;

        `}
        >
          <Default_Alart
            btntext="Delete Account"
            alartHeading="Are you absolutely sure?"
            alartDiscription="This action cannot be undone. This will permanently delete your
              account and remove your data from our servers."
          />
        </ShowComponent>
      </div>
    </div>
  );
};

export default page;
