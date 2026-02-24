import React from "react";

type Props = {
  currentStep?: number;
  shopIcon: React.ReactNode;
  deliveryIcon: React.ReactNode;
  cartIcon: React.ReactNode;
  packageIcon: React.ReactNode;
  className?: string;
};

const Step_Breadcrumb: React.FC<Props> = ({
  currentStep = 1,
  shopIcon,
  deliveryIcon,
  cartIcon,
  packageIcon,
  className = "",
}) => {
  const steps = [
    { id: 1, icon: shopIcon },
    { id: 2, icon: cartIcon },
    { id: 3, icon: deliveryIcon },
    { id: 4, icon: packageIcon },
  ];

  return (
    <div className={`w-full flex justify-center px-4 ${className}`}>
      <div className="flex items-center w-full max-w-3xl">
        {steps.map((step, index) => {
          const isActive = currentStep === step.id;
          const isCompleted = currentStep > step.id;

          return (
            <React.Fragment key={step.id}>
              
              {/* Step Circle */}
              <div className="flex flex-col items-center flex-shrink-0">
                <div
                  className={`
                  w-9 h-9 sm:w-11 sm:h-11 md:w-12 md:h-12
                  flex items-center justify-center
                  rounded-full border transition-all duration-300
                  ${
                    isActive
                      ? "bg-black text-white border-black scale-105"
                      : isCompleted
                      ? "bg-gray-800 text-white border-gray-800"
                      : "bg-gray-200 text-gray-500 border-gray-300"
                  }
                `}
                >
                  {step.icon}
                </div>
              </div>

              {/* Connector Line */}
              {index !== steps.length - 1 && (
                <div
                  className={`
                  flex-1 h-0.5 mx-2 sm:mx-3 md:mx-4 transition-all duration-300
                  ${currentStep > step.id ? "bg-black" : "bg-gray-300"}
                `}
                />
              )}
            </React.Fragment>
          );
        })}
      </div>
    </div>
  );
};

export default Step_Breadcrumb;