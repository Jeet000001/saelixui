import { BoxAccordion } from "@/Components/Accordion/BoxAccordion";
import { DefaultAccordion } from "@/Components/Accordion/DefaultAccordion";
import { OutlineAccordion } from "@/Components/Accordion/OutlineAccordion";
import ShowComponent from "@/Components/ShowComponent";

const accordion_page = () => {
  return (
    <div>
      <div className="ml-26 mb-5">
        <h1 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
          Accordion
        </h1>

        <p className="mt-3 text-base leading-relaxed text-gray-600 dark:text-gray-400 max-w-2xl">
          A stacked set of interactive headings that toggle their content panels.
        </p>
      </div>
      <div>
        {/* Default Accordion */}
        <ShowComponent
          ComponentName="01. Default"
          installation="npx saelix-ui add default-accordion"
          ComponentCodeTS={`import { Default_Accordion } from "@/components/ui/Default-accordion";

const defaultAccordion = () => {
  return (
    <Default_Accordion
      items={[
        {
          title: "What is this component?",
          content: "A reusable accordion to show and hide content sections.",
        },
        {
          title: "Can I customize it?",
          content: "Yes, fully customizable with Tailwind and your styles.",
        },
        {
          title: "Responsive?",
          content: "Works smoothly on mobile, tablet, and desktop.",
        },
      ]}
    />
  );
};

export default defaultAccordion;
`}
          ComponentCodeJS={`import { Default_Accordion } from "./components/ui/Default-accordion";

const defaultAccordion = () => {
  return (
    <Default_Accordion
      items={[
        {
          title: "What is this component?",
          content: "A reusable accordion to show and hide content sections.",
        },
        {
          title: "Can I customize it?",
          content: "Yes, fully customizable with Tailwind and your styles.",
        },
        {
          title: "Responsive?",
          content: "Works smoothly on mobile, tablet, and desktop.",
        },
      ]}
    />
  );
};

export default defaultAccordion;
`}
        >
          <DefaultAccordion
            items={[
              {
                title: "What is this component?",
                content:
                  "A reusable accordion to show and hide content sections.",
              },
              {
                title: "Can I customize it?",
                content:
                  "Yes, fully customizable with Tailwind and your styles.",
              },
              {
                title: "Responsive?",
                content: "Works smoothly on mobile, tablet, and desktop.",
              },
            ]}
          />
        </ShowComponent>
        {/* Box Accordion */}
        <ShowComponent
          ComponentName="02. Box"
          installation="npx saelix-ui add box-accordion"
          ComponentCodeTS={`import { Box_Accordion } from "@/components/ui/Box-accordion";

const boxAccordion = () => {
  return (
    <Default_Accordion
      items={[
        {
          title: "What is this component?",
          content: "A reusable accordion to show and hide content sections.",
        },
        {
          title: "Can I customize it?",
          content: "Yes, fully customizable with Tailwind and your styles.",
        },
        {
          title: "Responsive?",
          content: "Works smoothly on mobile, tablet, and desktop.",
        },
      ]}
    />
  );
};

export default boxAccordion;
`}
          ComponentCodeJS={`import { Box_Accordion } from "./components/ui/Box-accordion";

const boxAccordion = () => {
  return (
    <Box_Accordion
      items={[
        {
          title: "What is this component?",
          content: "A reusable accordion to show and hide content sections.",
        },
        {
          title: "Can I customize it?",
          content: "Yes, fully customizable with Tailwind and your styles.",
        },
        {
          title: "Responsive?",
          content: "Works smoothly on mobile, tablet, and desktop.",
        },
      ]}
    />
  );
};

export default boxAccordion;
`}
        >
          <BoxAccordion
            items={[
              {
                title: "What is this component?",
                content:
                  "A reusable accordion to show and hide content sections.",
              },
              {
                title: "Can I customize it?",
                content:
                  "Yes, fully customizable with Tailwind and your styles.",
              },
              {
                title: "Responsive?",
                content: "Works smoothly on mobile, tablet, and desktop.",
              },
            ]}
          /> 
        </ShowComponent>
        {/* Outline Accordion */}
        <ShowComponent
          ComponentName="03. Outline"
          installation="npx saelix-ui add outline-accordion"
          ComponentCodeTS={`import { Outline_Accordion } from "@/components/ui/Outline-accordion";

const OutlineAccordion = () => {
  return (
    <Outline_Accordion
      items={[
        {
          title: "What is this component?",
          content: "A reusable accordion to show and hide content sections.",
        },
        {
          title: "Can I customize it?",
          content: "Yes, fully customizable with Tailwind and your styles.",
        },
        {
          title: "Responsive?",
          content: "Works smoothly on mobile, tablet, and desktop.",
        },
      ]}
    />
  );
};

export default OutlineAccordion;

`}
          ComponentCodeJS={`import { Outline_Accordion } from "./components/ui/Outline-accordion";

const OutlineAccordion = () => {
  return (
    <Outline_Accordion
      items={[
        {
          title: "What is this component?",
          content: "A reusable accordion to show and hide content sections.",
        },
        {
          title: "Can I customize it?",
          content: "Yes, fully customizable with Tailwind and your styles.",
        },
        {
          title: "Responsive?",
          content: "Works smoothly on mobile, tablet, and desktop.",
        },
      ]}
    />
  );
};

export default OutlineAccordion;

`}
        >
          <OutlineAccordion 
          items={[
          {
            title: "Is it accessible?",
            content:
              "Yes. It follows accessibility best practices and keyboard navigation."
          },
          {
            title: "Is it styled?",
            content:
              "Yes. Clean modern UI with rounded cards."
          },
          {
            title: "Is it animated?",
            content:
              "Yes. Smooth open close animation."
          }
        ]}/>
        </ShowComponent>
      </div>
    </div>
  );
};

export default accordion_page;
