import Default_Dropdown from "@/Components/Dropdown/Default_Dropdown";
import Icon_Dropdown from "@/Components/Dropdown/Icon_Dropdown";
import ShowComponent from "@/Components/ShowComponent";

const page = () => {
  return (
    <div>
      <div className="ml-26 mb-5">
        <h1 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
          Dropdown
        </h1>
        <p className="mt-3 text-base leading-relaxed text-gray-600 dark:text-gray-400 max-w-2xl">
          Shows a dropdown menu containing various actions or options when the
          user clicks a button.
        </p>
      </div>
      <div>
        {/* default */}
        <ShowComponent
          ComponentName="01. Default"
          installation="npx saelix-ui add default-dropdown"
          ComponentCodeTS={`import Default_Dropdown from "@/components/ui/Default-dropdown";

const DefaultDropdownDemo = () => {
  const menuItems = [
    { label: "Profile" },
    { label: "Settings" },
    { label: "Logout" },
  ];

  return (
    <div className="flex flex-col items-center justify-center min-h-screen transition-colors duration-300">
      <Default_Dropdown
        buttonLabel="Open Menu"
        headerTitle="My Account"
        menuItems={menuItems}
      />
    </div>
  );
};

export default DefaultDropdownDemo;
`}
          ComponentCodeJS={`import Default_Dropdown from "./components/ui/Default-dropdown";

const DefaultDropdownDemo = () => {
  const menuItems = [
    { label: "Profile" },
    { label: "Settings" },
    { label: "Logout" },
  ];

  return (
    <div className="flex flex-col items-center justify-center min-h-screen transition-colors duration-300">
      <Default_Dropdown
        buttonLabel="Open Menu"
        headerTitle="My Account"
        menuItems={menuItems}
      />
    </div>
  );
};

export default DefaultDropdownDemo;
`}
        >
            <Default_Dropdown />
        </ShowComponent>
        {/* icon */}
        <ShowComponent
          ComponentName="02. Icon"
          installation="npx saelix-ui add icon-dropdown"
          ComponentCodeTS={`import Icon_Dropdown from "@/components/ui/Icon-dropdown";
import { UserRound, Bolt, LogOut } from "lucide-react";

const IconDropdownDemo = () => {
  const menuItems = [
    { label: "Profile", icon: <UserRound size={20} /> },
    { label: "Settings", icon: <Bolt size={20} /> },
    { label: "Logout", icon: <LogOut size={20} /> },
  ];

  return (
    <div className="flex flex-col items-center justify-center min-h-screen transition-colors duration-300">
      <Icon_Dropdown
        buttonLabel="J"
        headerTitle="My Account"
        menuItems={menuItems}
      />
    </div>
  );
};

export default IconDropdownDemo;

`}
          ComponentCodeJS={`import Icon_Dropdown from "./components/ui/Icon-dropdown";
import { UserRound, Bolt, LogOut } from "lucide-react";

const IconDropdownDemo = () => {
  const menuItems = [
    { label: "Profile", icon: <UserRound size={20} /> },
    { label: "Settings", icon: <Bolt size={20} /> },
    { label: "Logout", icon: <LogOut size={20} /> },
  ];

  return (
    <div className="flex flex-col items-center justify-center min-h-screen transition-colors duration-300">
      <Icon_Dropdown
        buttonLabel="J"
        headerTitle="My Account"
        menuItems={menuItems}
      />
    </div>
  );
};

export default IconDropdownDemo;
`}
        >
            <Icon_Dropdown />
        </ShowComponent>
      </div>
    </div>
  );
};

export default page;
