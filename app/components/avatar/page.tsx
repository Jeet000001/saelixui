import Avatar_Card from "@/Components/Avatar/Avatar_Card";
import Avatar_character from "@/Components/Avatar/Avatar_Character";
import Avatar_Ring from "@/Components/Avatar/Avatar_Ring";
import Avatar_Stack from "@/Components/Avatar/Avatar_Stack";
import Avatar_Status from "@/Components/Avatar/Avatar_Status";
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
          <Clickable_Avatar
            src="/myImage.jpeg"
            alt="Avater"
            href="https://github.com/Jeet000001"
            width={45}
            height={45}
          />
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
          <Avatar_Card
            src="/myImage.jpeg"
            name="Jeet"
            role="Frontend Developer"
          />
        </ShowComponent>
        {/* Avatar Status */}
        <ShowComponent
          ComponentName="04. Status"
          installation="npx saelix-ui add avatar-status"
          ComponentCodeTS={`import Avatar_Status from "@/components/ui/Avatar-status";

const AvatarStatusDemo = () => {
  return <Avatar_Status src="/ImageLink" />;
};

export default AvatarStatusDemo;

`}
          ComponentCodeJS={`import Avatar_Status from "./components/ui/Avatar-status";

const AvatarStatusDemo = () => {
  return <Avatar_Status src="/ImageLink" />;
};

export default AvatarStatusDemo;

`}
        >
          <Avatar_Status src="/myImage.jpeg" />
        </ShowComponent>
        {/* Avatar Ring */}
        <ShowComponent
          ComponentName="05. Ring"
          installation="npx saelix-ui add avatar-ring"
          ComponentCodeTS={`import Avatar_Ring from "@/components/ui/Avatar-ring"

const AvatarRingDemo = () => {
  return (
    <div className="flex gap-5">
      <Avatar_Ring src='/my.jpeg' />
      <Avatar_Ring src='/my.jpeg' borderColor="border-blue-500"  />
      <Avatar_Ring src='/my.jpeg' borderColor="border-green-500"  />
    </div>
  )
}

export default AvatarRingDemo
`}
          ComponentCodeJS={`import Avatar_Ring from "./components/ui/Avatar-ring"

const AvatarRingDemo = () => {
  return (
    <div className="flex gap-5">
      <Avatar_Ring src='/my.jpeg' />
      <Avatar_Ring src='/my.jpeg' borderColor="border-blue-500"  />
      <Avatar_Ring src='/my.jpeg' borderColor="border-green-500"  />
    </div>
  )
}

export default AvatarRingDemo
`}
        >
          <div className="flex gap-5">
            <Avatar_Ring src="/myImage.jpeg" />
            <Avatar_Ring src="/myImage.jpeg" borderColor="border-blue-500" />
            <Avatar_Ring src="/myImage.jpeg" borderColor="border-green-500" />
          </div>
        </ShowComponent>
        {/* Avatar Character */}
        <ShowComponent
          ComponentName="06. Character"
          installation="npx saelix-ui add avatar-character"
          ComponentCodeTS={`import Avatar_character from "@/components/ui/Avatar-character";

const AvatarCharacterDemo = () => {
  <div className="flex gap-5">
    <Avatar_character char="J" bg="bg-blue-300" textColor="text-blue-600" />
    <Avatar_character char="S" bg="bg-pink-300" textColor="text-pink-600" />
    <Avatar_character char="JS" bg="bg-green-300" textColor="text-green-600" />
  </div>;
};

export default AvatarCharacterDemo;
`}
          ComponentCodeJS={`import Avatar_character from "./components/ui/Avatar-character";

const AvatarCharacterDemo = () => {
  <div className="flex gap-5">
    <Avatar_character char="J" bg="bg-blue-300" textColor="text-blue-600" />
    <Avatar_character char="S" bg="bg-pink-300" textColor="text-pink-600" />
    <Avatar_character char="JS" bg="bg-green-300" textColor="text-green-600" />
  </div>;
};

export default AvatarCharacterDemo;
`}
        >
          <div className="flex gap-5">
            <Avatar_character
              char="J"
              bg="bg-blue-300"
              textColor="text-blue-600"
            />
            <Avatar_character
              char="S"
              bg="bg-pink-300"
              textColor="text-pink-600"
            />
            <Avatar_character
              char="JS"
              bg="bg-green-300"
              textColor="text-green-600"
            />
          </div>
        </ShowComponent>
        {/* Avatar Stack */}
        <ShowComponent
          ComponentName="07. Group"
          installation=" npx saelix-ui add avatar-stack"
          ComponentCodeTS={`import Avatar_Stack from "@/components/ui/Avatar-stack"

const AvatarStackDemo = () => {
  return (
    <div>
      <Avatar_Stack
      items={[
    { src: "/my.jpeg" },
    { char: "JS", bg: "bg-blue-500" },
    { char: "AB", bg: "bg-red-500" },
    { char: "XY", bg: "bg-indigo-500" },
    { char: "RS", bg: "bg-green-500" },
  ]}
   />
    </div>
  )
}

export default AvatarStackDemo;
`}
          ComponentCodeJS={`import Avatar_Stack from "./components/ui/Avatar-stack"

const AvatarStackDemo = () => {
  return (
    <div>
      <Avatar_Stack
      items={[
    { src: "/my.jpeg" },
    { char: "JS", bg: "bg-blue-500" },
    { char: "AB", bg: "bg-red-500" },
    { char: "XY", bg: "bg-indigo-500" },
    { char: "RS", bg: "bg-green-500" },
  ]}
   />
    </div>
  )
}

export default AvatarStackDemo;

`}
        >
          <Avatar_Stack
            items={[
              { src: "/myImage.jpeg" },
              { char: "JS", bg: "bg-blue-500" },
              { char: "AB", bg: "bg-red-500" },
              { char: "XY", bg: "bg-indigo-500" },
              { char: "RS", bg: "bg-green-500" },
            ]}
          />
        </ShowComponent>
      </div>
    </div>
  );
};

export default page;
