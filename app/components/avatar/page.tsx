import Default_Avatar from "@/Components/Avatar/Default_Avatar";
import ShowComponent from "@/Components/ShowComponent";
const page = () => {
  return (
    <div>
      <div className="ml-26 mb-5">
        <h1 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
          Avatar
        </h1>

        <p className="mt-3 text-base leading-relaxed text-gray-600 dark:text-gray-400 max-w-2xl">
          Displays a user profile image with a fallback placeholder when the
          image is unavailable.
        </p>
      </div>
      <div>
        {/* Default Avatar */}
        <ShowComponent
          ComponentName="01. Default"
          installation="npx saelix-ui add default-avatar"
          ComponentCodeTS={`import Default_Avatar from "@/components/ui/Default-avatar";

const page = () => {
  return (
    <div>
      <Default_Avatar src="/imageLink" alt="Avater" width={45} height={45} />
    </div>
  );
};

export default page;

        `}
          ComponentCodeJS={`import Default_Avatar from "./components/ui/Default-avatar";

const page = () => {
  return (
    <div>
      <Default_Avatar src="/imageLink" alt="Avater" width={45} height={45} />
    </div>
  );
};

export default page;

        `}
        >
          <Default_Avatar
            src="/myImage.jpeg"
            alt="Avater"
            width={45}
            height={45}
          />
        </ShowComponent>
      </div>
    </div>
  );
};

export default page;
