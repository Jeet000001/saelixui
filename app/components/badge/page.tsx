import Destructive_Badge from "@/Components/Badge/Destructive_Badge";
import Outline_Badge from "@/Components/Badge/Outline_Badge";
import Primary_Badge from "@/Components/Badge/Primary_Badge";
import Secondary_Badge from "@/Components/Badge/Secondary_Badge";
import ShowComponent from "@/Components/ShowComponent";

const page = () => {
  return (
    <div>
      <div className="ml-26 mb-5">
        <h1 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
          Badge
        </h1>

        <p className="mt-3 text-base leading-relaxed text-gray-600 dark:text-gray-400 max-w-2xl">
          Renders a button or any element styled to behave like a button.
        </p>
      </div>
      <div>
        {/* Primary Badge */}
        <ShowComponent
          ComponentName="01. Primary"
          installation="npx saelix-ui add primary-badge"
          ComponentCodeTS={`import Primary_Badge from "@/components/ui/Primary-badge";

const PrimaryBadgeDemo = () => {
  return (
    <div>
      <Primary_Badge>Primary</Primary_Badge>
    </div>
  );
};

export default PrimaryBadgeDemo;`}
          ComponentCodeJS={`import Primary_Badge from "./components/ui/Primary-badge";

const PrimaryBadgeDemo = () => {
  return (
    <div>
      <Primary_Badge>Primary</Primary_Badge>
    </div>
  );
};

export default PrimaryBadgeDemo;`}
        >
          <Primary_Badge>Primary</Primary_Badge>
        </ShowComponent>
        {/* Secondary Badge */}
        <ShowComponent
          ComponentName="02. Secondary"
          installation="npx saelix-ui add secondary-badge"
          ComponentCodeTS={`import Secondary_Badge from "@/components/ui/Secondary-badge";

const SecondaryBadgeDemo = () => {
  return (
    <div>
      <Secondary_Badge>Secondary</Secondary_Badge>
    </div>
  );
};

export default SecondaryBadgeDemo;
`}
          ComponentCodeJS={`import Secondary_Badge from "./components/ui/Secondary-badge";

const SecondaryBadgeDemo = () => {
  return (
    <div>
      <Secondary_Badge>Secondary</Secondary_Badge>
    </div>
  );
};

export default SecondaryBadgeDemo;
`}
        >
          <Secondary_Badge>Secondary</Secondary_Badge>
        </ShowComponent>
        {/* Destructive Badge */}
        <ShowComponent
          ComponentName="03. Destructive"
          installation="npx saelix-ui add destructive-badge"
          ComponentCodeTS={`import Destructive_Badge from "@/components/ui/Destructive-badge";

const DestructiveBadgeDemo = () => {
  return (
    <div>
      <Destructive_Badge>Destructive</Destructive_Badge>
    </div>
  );
};

export default DestructiveBadgeDemo;
`}
          ComponentCodeJS={`import Destructive_Badge from "./components/ui/Destructive-badge";

const DestructiveBadgeDemo = () => {
  return (
    <div>
      <Destructive_Badge>Destructive</Destructive_Badge>
    </div>
  );
};

export default DestructiveBadgeDemo;
`}
        >
          <Destructive_Badge>Destructive</Destructive_Badge>
        </ShowComponent>
        {/* Outline Badge */}
        <ShowComponent
          ComponentName="04. Outline"
          installation="npx saelix-ui add outline-badge"
          ComponentCodeTS={`import Outline_Badge from "@/components/ui/Outline-badge";

const OutlineBadgeDemo = () => {
  return (
    <div>
      <Outline_Badge>Outline</Outline_Badge>
    </div>
  );
};

export default OutlineBadgeDemo;
`}
          ComponentCodeJS={`import Outline_Badge from "./components/ui/Outline-badge";

const OutlineBadgeDemo = () => {
  return (
    <div>
      <Outline_Badge>Outline</Outline_Badge>
    </div>
  );
};
export default OutlineBadgeDemo;
`}
        >
          <Outline_Badge>Outline</Outline_Badge>
        </ShowComponent>
      </div>
    </div>
  );
};

export default page;
