import Default_Breadcrumb from "@/Components/Breadcrumb/Default_Breadcrumb";
import Step_Breadcrumb from "@/Components/Breadcrumb/Step_Breadcrums";
import Tab_Breadcrumb from "@/Components/Breadcrumb/Tab_Breadcrumb";
import TabsOutline_Breadcrumb from "@/Components/Breadcrumb/TabsOutline_Breadcrumb";
import { House, Store, Truck, ShoppingCart, Package } from "lucide-react";
import ShowComponent from "@/Components/ShowComponent";

const page = () => {
  return (
    <div>
      <div className="ml-26 mb-5">
        <h1 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
          Breadcrumb
        </h1>
        <p className="mt-3 text-base leading-relaxed text-gray-600 dark:text-gray-400 max-w-2xl">
          Renders a button or any element styled to behave like a button.
        </p>
      </div>
      <div>
                {/* Default */}
        <ShowComponent
          ComponentName="01. Default"
          installation="npx saelix-ui add default-breadcrumb"
          ComponentCodeTS={`import Breadcrumb from "@/components/ui/Default-breadcrumb";

const DefaultBreadcrumbDemo = () => {
  return (
    <div>
      <Breadcrumb
        separator="/"
        items={[
          { label: "Home", href: "/routeLink" },
          { label: "Docs", href: "/routeLink" },
          { label: "Components", href: "/routeLink" },
        ]}
      />
    </div>
  );
};

export default DefaultBreadcrumbDemo;
`}
          ComponentCodeJS={`import Breadcrumb from "./components/ui/Default-breadcrumb";

const DefaultBreadcrumbDemo = () => {
  return (
    <div>
      <Breadcrumb
        separator="/"
        items={[
          { label: "Home", href: "/routeLink" },
          { label: "Docs", href: "/routeLink" },
          { label: "Components", href: "/routeLink" },
        ]}
      />
    </div>
  );
};

export default DefaultBreadcrumbDemo;
`}
        >
          <Default_Breadcrumb
            separator="/"
            items={[
              { label: "Home", href: " " },
              { label: "Docs", href: " " },
              { label: "Components", href: " " },
            ]}
          />
        </ShowComponent>
      </div>
    </div>
  );
};

export default page;





//       <div>

//         {/* Icon */}
//         <ShowComponent
//           ComponentName="02. Icon"
//           installation="npx saelix-ui add default-breadcrumb"
//           ComponentCodeTS={`import Breadcrumb from "@/components/ui/Default-breadcrumb";
// import { House } from 'lucide-react';

// const IconBreadcrumbDemo = () => {
//   return (
//     <div>
//       <Breadcrumb
//         separator="/"
//         items={[
//           { label: <House />, href: "/routeLink" },
//           { label: "Docs", href: "/routeLink" },
//           { label: "Components", href: "/routeLink" },
//         ]}
//       />
//     </div>
//   );
// };

// export default IconBreadcrumbDemo;
// `}
//           ComponentCodeJS={`import Breadcrumb from "./components/ui/Default-breadcrumb";
// import { House } from 'lucide-react';

// const IconBreadcrumbDemo = () => {
//   return (
//     <div>
//       <Breadcrumb
//         separator="/"
//         items={[
//           { label: <House />, href: "/routeLink" },
//           { label: "Docs", href: "/routeLink" },
//           { label: "Components", href: "/routeLink" },
//         ]}
//       />
//     </div>
//   );
// };

// export default IconBreadcrumbDemo;
// `}
//         >
//           <Default_Breadcrumb
//             separator="/"
//             items={[
//               { label: <House />, href: " " },
//               { label: "Docs", href: " " },
//               { label: "Component", href: " " },
//             ]}
//           />
//         </ShowComponent>
//         {/* Tabs */}
//         <ShowComponent
//           ComponentName="03. Tabs"
//           installation="npx saelix-ui add tabs-breadcrumb"
//           ComponentCodeTS={`import Tab_Breadcrumb from "@/components/ui/Tabs-breadcrumb";

// const TabBreadcrumbDemo = () => {
//   return (
//     <div>
//       <Tab_Breadcrumb
//         items={[
//           { label: "Home", href: "/routeLink" },
//           { label: "Docs", href: "/routeLink" },
//           { label: "Components", href: "/routeLink" },
//         ]}
//       />
//     </div>
//   );
// };

// export default TabBreadcrumbDemo;
// `}
//           ComponentCodeJS={`import Tab_Breadcrumb from "./components/ui/Tabs-breadcrumb";

// const TabBreadcrumbDemo = () => {
//   return (
//     <div>
//       <Tab_Breadcrumb
//         items={[
//           { label: "Home", href: "/routeLink" },
//           { label: "Docs", href: "/routeLink" },
//           { label: "Components", href: "/routeLink" },
//         ]}
//       />
//     </div>
//   );
// };

// export default TabBreadcrumbDemo;
// `}
//         >
//           <Tab_Breadcrumb
//             items={[
//               { label: "Home", href: "" },
//               { label: "Docs", href: "" },
//               { label: "Components", href: "" },
//             ]}
//           />
//         </ShowComponent>
//         {/* TabOutline */}
//         <ShowComponent
//           ComponentName="04. Outline Tabs"
//           installation="npx saelix-ui add outline-breadcrumb"
//           ComponentCodeTS={`import TabsOutline_Breadcrumb from "@/components/ui/Outline-breadcrumb";

// const TabsOutlineBreadcrumbDemo = () => {
//   return (
//     <div>
//       <TabsOutline_Breadcrumb
//         items={[
//           { label: "Home", href: "/routeLink" },
//           { label: "Docs", href: "/routeLink" },
//           { label: "Components", href: "/routeLink" },
//         ]}
//       />
//     </div>
//   );
// };

// export default TabsOutlineBreadcrumbDemo;
// `}
//           ComponentCodeJS={`import TabsOutline_Breadcrumb from "./components/ui/Outline-breadcrumb";

// const TabsOutlineBreadcrumbDemo = () => {
//   return (
//     <div>
//       <TabsOutline_Breadcrumb
//         items={[
//           { label: "Home", href: "/routeLink" },
//           { label: "Docs", href: "/routeLink" },
//           { label: "Components", href: "/routeLink" },
//         ]}
//       />
//     </div>
//   );
// };

// export default TabsOutlineBreadcrumbDemo;
// `}
//         >
//           <TabsOutline_Breadcrumb
//             items={[
//               { label: "Home", href: "/" },
//               { label: "Docs", href: "/components" },
//               { label: "Components", href: "/breadcrumb" },
//             ]}
//           />
//         </ShowComponent>
//         {/* Step Breadcrumb */}
//         <ShowComponent
//           ComponentName="05. Step"
//           installation="npx saelix-ui add step-breadcrumb"
//           ComponentCodeTS={`import Step_Breadcrumb from "@/components/ui/Step-breadcrumb";
// import { Store, Truck, ShoppingCart, Package } from "lucide-react";

// const StepBreadcrumbDemo = () => {
//   return (
//     <div>
//       <Step_Breadcrumb
//         currentStep={1}
//         shopIcon={<Store size={22} />}
//         deliveryIcon={<Truck size={22} />}
//         cartIcon={<ShoppingCart size={22} />}
//         packageIcon={<Package size={22} />}
//       />
//     </div>
//   );
// };

// export default StepBreadcrumbDemo;
// `}
//           ComponentCodeJS={`import Step_Breadcrumb from "@/components/ui/Step-breadcrumb";
// import { Store, Truck, ShoppingCart, Package } from "lucide-react";

// const StepBreadcrumbDemo = () => {
//   return (
//     <div>
//       <Step_Breadcrumb
//         currentStep={1}
//         shopIcon={<Store size={22} />}
//         deliveryIcon={<Truck size={22} />}
//         cartIcon={<ShoppingCart size={22} />}
//         packageIcon={<Package size={22} />}
//       />
//     </div>
//   );
// };

// export default StepBreadcrumbDemo;
// `}
//         >
//           <Step_Breadcrumb
//             currentStep={1}
//             shopIcon={<Store size={20} />}
//             deliveryIcon={<Truck size={20} />}
//             cartIcon={<ShoppingCart size={20} />}
//             packageIcon={<Package size={20} />}
//           />
//         </ShowComponent>
//       </div>