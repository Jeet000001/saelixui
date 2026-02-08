import Center_Alart from "@/Components/Alert/Center_Alert";
import Default_Alart from "@/Components/Alert/Default_Alert";
import Footer_Alart from "@/Components/Alert/Footer_Alert";
import Header_Alart from "@/Components/Alert/Header_Alert";
import With_Logo_Alart from "@/Components/Alert/With_Logo_Alert";
import ShowComponent from "@/Components/ShowComponent";
import { CircleAlert } from "lucide-react";

const page = () => {
  return (
    <div>
      <div className="ml-26 mb-5">
        <h1 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
          Alert
        </h1>

        <p className="mt-3 text-base leading-relaxed text-gray-600 dark:text-gray-400 max-w-2xl">
          A dialog that shows important content and asks for user confirmation.
        </p>
      </div>
      <div>
        {/* Default Alert */}
        <ShowComponent
          ComponentName="01. Default"
          installation="npx saelix-ui add default-alert"
          ComponentCodeTS={`import Default_Alart from "@/components/ui/Default-alert";

const DefaultAlartDemo = () => {
  return (
    <Default_Alart
      btntext="Delete Account"
      alartHeading="Are you absolutely sure?"
      alartDiscription="You're about to permanently delete your account and all associated data.
       This action cannot be undone."
    />
  );
};

export default DefaultAlartDemo;

        `}
          ComponentCodeJS={`import Default_Alart from "./components/ui/Default-alert";

const DefaultAlartDemo = () => {
  return (
    <Default_Alart
      btntext="Delete Account"
      alartHeading="Are you absolutely sure?"
      alartDiscription="You're about to permanently delete your account and all associated data.
       This action cannot be undone."
    />
  );
};

export default DefaultAlartDemo;

        `}
        >
          <Default_Alart
            btntext="Delete Account"
            alartHeading="Are you absolutely sure?"
            alartDiscription="You're about to permanently delete your account and all associated data. This action cannot be undone."
          />
        </ShowComponent>
        {/* With Logo Alert */}
        <ShowComponent
          ComponentName="02. Icon"
          installation="npx saelix-ui add with-icon-alert"
          ComponentCodeTS={`import With_Icon_Alart from "@/components/ui/With-icon-alert";
import { CircleAlert } from "lucide-react";

const IconAlertDemo = () => {
  return (
    <With_Icon_Alart
      btntext="Delete Account"
      icon={<CircleAlert />}
      alartHeading="Are you absolutely sure?"
      alartDiscription="You're about to permanently delete your account and all associated data. This action cannot be undone."
    />
  );
};

export default IconAlertDemo;
        `}
          ComponentCodeJS={`import With_Icon_Alart from "./components/ui/With-icon-alert";
import { CircleAlert } from "lucide-react";

const IconAlertDemo = () => {
  return (
    <With_Icon_Alart
      btntext="Delete Account"
      icon={<CircleAlert />}
      alartHeading="Are you absolutely sure?"
      alartDiscription="You're about to permanently delete your account and all associated data. This action cannot be undone."
    />
  );
};

export default IconAlertDemo;
        `}
        >
          <With_Logo_Alart
            btntext="Delete Account"
            icon={<CircleAlert />}
            alartHeading="Are you absolutely sure?"
            alartDiscription="You're about to permanently delete your account and all associated data. This action cannot be undone."
          />
        </ShowComponent>
        {/* Center Alert */}
        <ShowComponent
          ComponentName="03. Center Align"
          installation="npx saelix-ui add center-alert"
          ComponentCodeTS={`import Center_Alart from "@/components/ui/Center-alert";
import { CircleAlert } from "lucide-react";

const CenterAlertDemo = () => {
  return (

    <Center_Alart
      btntext="Delete Account"
      icon={<CircleAlert />}
      alartHeading="Are you absolutely sure?"
      alartDiscription="You're about to permanently delete your account and all associated data. This action cannot be undone."
    />
  );
};

export default CenterAlertDemo;
        `}
          ComponentCodeJS={`import Center_Alart from "./components/ui/Center-alert";
import { CircleAlert } from "lucide-react";

const CenterAlertDemo = () => {
  return (

    <Center_Alart
      btntext="Delete Account"
      icon={<CircleAlert />}
      alartHeading="Are you absolutely sure?"
      alartDiscription="You're about to permanently delete your account and all associated data. This action cannot be undone."
    />
  );
};

export default CenterAlertDemo;
        `}
        >
          <Center_Alart
            btntext="Delete Account"
            icon={<CircleAlert />}
            alartHeading="Are you absolutely sure?"
            alartDiscription="You're about to permanently delete your account and all associated data. This action cannot be undone."
          />
        </ShowComponent>
        {/* Header Alert */}
        <ShowComponent
          ComponentName="04. Customized Header"
          installation="npx saelix-ui add header-alert"
          ComponentCodeTS={`import Header_Alart from "@/components/ui/Header-alert";
import { CircleAlert } from "lucide-react";

const HeaderAlertDemo = () => {
  return (

    <Header_Alart
      btntext="Delete Account"
      alertCardHeading="Delete Account"
      icon={<CircleAlert />}
      alartHeading="Are you absolutely sure?"
      alartDiscription="You're about to permanently delete your account and all associated data. This action cannot be undone."
    />
  );
};

export default HeaderAlertDemo;
        `}
          ComponentCodeJS={`import Header_Alart from "./components/ui/Header-alert";
import { CircleAlert } from "lucide-react";

const HeaderAlertDemo = () => {
  return (

    <Header_Alart
      btntext="Delete Account"
      alertCardHeading="Delete Account"
      icon={<CircleAlert />}
      alartHeading="Are you absolutely sure?"
      alartDiscription="You're about to permanently delete your account and all associated data. This action cannot be undone."
    />
  );
};

export default HeaderAlertDemo;
        `}
        >
          <Header_Alart
            btntext="Delete Account"
            alertCardHeading="Delete Account"
            icon={<CircleAlert />}
            alartHeading="Are you absolutely sure?"
            alartDiscription="You're about to permanently delete your account and all associated data. This action cannot be undone."
          />
        </ShowComponent>
        {/* Footer Alert */}
        <ShowComponent
          ComponentName="05. Customized Footer"
          installation="npx saelix-ui add footer-alert"
          ComponentCodeTS={`import Footer_Alart from "@/components/ui/Footer-alert";
import { CircleAlert } from "lucide-react";

const FooterAlertDemo = () => {
  return (
    <Footer_Alart
      btntext="Delete Account"
      icon={<CircleAlert />}
      alartHeading="Are you absolutely sure?"
      alartDiscription="You're about to permanently delete your account and all associated data.
       This action cannot be undone."
    />
  );
};

export default FooterAlertDemo;
        `}
          ComponentCodeJS={`import Footer_Alart from "./components/ui/Footer-alert";
import { CircleAlert } from "lucide-react";

const FooterAlertDemo = () => {
  return (
    <Footer_Alart
      btntext="Delete Account"
      icon={<CircleAlert />}
      alartHeading="Are you absolutely sure?"
      alartDiscription="You're about to permanently delete your account and all associated data.
       This action cannot be undone."
    />
  );
};

export default FooterAlertDemo;;
        `}
        >
          <Footer_Alart
            btntext="Delete Account"
            icon={<CircleAlert />}
            alartHeading="Are you absolutely sure?"
            alartDiscription="You're about to permanently delete your account and all associated data. This action cannot be undone."
          />
        </ShowComponent>
      </div>
    </div>
  );
};

export default page;
