import Default_Checkbox from "@/Components/CheckBox/Default_Checkbox";
import Horizontal_Group from "@/Components/CheckBox/Horizontal_Group_Checkbox";
import Vertical_Group from "@/Components/CheckBox/Vertical_Group_Checkbox";
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
        {/* Horizontal */}
        <ShowComponent
          ComponentName="03. Horizontal Group"
          installation="npx saelix-ui add horizontal-group-checkbox"
          ComponentCodeTS={`import Horizontal_Group, { CheckboxOption } from "@/components/ui/Horizontal-group-checkbox";
import { useState } from "react";

const options: CheckboxOption[] = [
  { id: "frontend", label: "Frontend" },
  { id: "backend", label: "Backend" },
  { id: "database", label: "Database" },
  { id: "devops", label: "DevOps" },
];

const HorizontalGroupDemo = () => {
  const [selectedTech, setSelectedTech] = useState<string[]>([""]);
  return (
    <div>
      <Horizontal_Group
        title="Skills"
        options={options}
        selected={selectedTech}
        onChange={setSelectedTech}
      />
    </div>
  );
};

export default HorizontalGroupDemo
`}
          ComponentCodeJS={`import Horizontal_Group, { CheckboxOption } from "./components/ui/Horizontal-group-checkbox";
import { useState } from "react";

const options: CheckboxOption[] = [
  { id: "frontend", label: "Frontend" },
  { id: "backend", label: "Backend" },
  { id: "database", label: "Database" },
  { id: "devops", label: "DevOps" },
];

const HorizontalGroupDemo = () => {
  const [selectedTech, setSelectedTech] = useState<string[]>([""]);
  return (
    <div>
      <Horizontal_Group
        title="Skills"
        options={options}
        selected={selectedTech}
        onChange={setSelectedTech}
      />
    </div>
  );
};

export default HorizontalGroupDemo
`}
        >
          <Horizontal_Group />
        </ShowComponent>
        {/* Vertical */}
        <ShowComponent
          ComponentName="04. Vertical Group"
          installation="npx saelix-ui add vertical-group-checkbox"
          ComponentCodeTS={`import React, { useState } from "react";
import { Laptop, Smartphone, Headphones, Watch } from "lucide-react";
import Vertical_Group, { IconCheckboxOption } from "@/components/ui/Vertical-group-checkbox";

const options: IconCheckboxOption[] = [
  { id: "laptop", label: "Laptop", icon: <Laptop size={20} /> },
  { id: "phone", label: "Smartphone", icon: <Smartphone size={20} /> },
  { id: "headphones", label: "Headphones", icon: <Headphones size={20} /> },
  { id: "watch", label: "Smartwatch", icon: <Watch size={20} /> },
];

const VerticalGroupDemo = () => {
  const [selected, setSelected] = useState<string[]>([]);

  return (
    <Vertical_Group
      options={options}
      selected={selected}
      onChange={setSelected}
    />
  );
};

export default VerticalGroupDemo;

`}
          ComponentCodeJS={`import React, { useState } from "react";
import { Laptop, Smartphone, Headphones, Watch } from "lucide-react";
import Vertical_Group, { IconCheckboxOption } from "./components/ui/Vertical-group-checkbox";

const options: IconCheckboxOption[] = [
  { id: "laptop", label: "Laptop", icon: <Laptop size={20} /> },
  { id: "phone", label: "Smartphone", icon: <Smartphone size={20} /> },
  { id: "headphones", label: "Headphones", icon: <Headphones size={20} /> },
  { id: "watch", label: "Smartwatch", icon: <Watch size={20} /> },
];

const VerticalGroupDemo = () => {
  const [selected, setSelected] = useState<string[]>([]);

  return (
    <Vertical_Group
      options={options}
      selected={selected}
      onChange={setSelected}
    />
  );
};

export default VerticalGroupDemo;

`}
        >
          <Vertical_Group />
        </ShowComponent>
      </div>
    </div>
  );
};

export default page;
