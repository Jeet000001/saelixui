import Avatar_Card from "@/Components/Avatar/Avatar_Card";
import Clickable_Avatar from "@/Components/Avatar/Clickable_Avatar";
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

const DefaultAvaterDemo = () => {
  return (
    <div>
      <Default_Avatar src="/imageLink" alt="Avater" width={45} height={45} />
    </div>
  );
};

export default DefaultAvaterDemo;

        `}
          ComponentCodeJS={`import Default_Avatar from "./components/ui/Default-avatar";

const DefaultAvaterDemo = () => {
  return (
    <div>
      <Default_Avatar src="/imageLink" alt="Avater" width={45} height={45} />
    </div>
  );
};

export default DefaultAvaterDemo;

        `}
        >
          <Default_Avatar
            src="/myImage.jpeg"
            alt="Avater"
            width={45}
            height={45}
          />
        </ShowComponent>
        {/* Clickable Avatar */}
        <ShowComponent
          ComponentName="02. Clickable"
          installation="npx saelix-ui add clickable-avatar"
          ComponentCodeTS={`import Clickable_Avatar from "@/components/ui/Clickable-avater";

const ClickableAvatarDemo = () => {
  return (
    <div>
      <Clickable_Avatar
        src="/imageLink"
        alt="Avater"
        href="socialLink"
        width={45}
        height={45}
      />
    </div>
  );
};

export default ClickableAvatarDemo;
`}
          ComponentCodeJS={`import Clickable_Avatar from "./components/ui/Clickable-avater";

const ClickableAvatarDemo = () => {
  return (
    <div>
      <Clickable_Avatar
        src="/imageLink"
        alt="Avater"
        href="socialLink"
        width={45}
        height={45}
      />
    </div>
  );
};

export default ClickableAvatarDemo;
`}
        >
          <Clickable_Avatar src="/myImage.jpeg" alt="Avater" href="https://github.com/Jeet000001" width={45} height={45}/>
        </ShowComponent>
        {/* Avatar Card */}
        <ShowComponent
          ComponentName="03. With Text"
          installation="npx saelix-ui add avatar-card"
          ComponentCodeTS={`import Avatar_Card from "@/components/ui/Avatar-card";

const AvatarCardDemo = () => {
  return <Avatar_Card src="/my.jpeg" name="Jeet" role="Frontend Developer" />;
};

export default AvatarCardDemo;
`}
          ComponentCodeJS={`import Avatar_Card from "./components/ui/Avatar-card";

const AvatarCardDemo = () => {
  return <Avatar_Card src="/my.jpeg" name="Jeet" role="Frontend Developer" />;
};

export default AvatarCardDemo;
`}
        >
          <Avatar_Card src="/myImage.jpeg" name="Jeet" role="Frontend Developer" />
        </ShowComponent>
      </div>
    </div>
  );
};

export default page;
