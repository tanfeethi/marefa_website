import type React from "react";

type StudientFeatureProps = {
  title: string;
  text: string;
  icon: React.ReactNode;
  className?: string;
};

const StudientFeature = ({
  icon,
  text,
  title,
  className,
}: StudientFeatureProps) => {
  return (
    <div
      className={`bg-white border border-[#F19704] rounded-md px-4 py-3 w-full ${
        className || ""
      }`}
    >
      <div className="flex items-center">
        <div className="bg-[#F19704] p-2 rounded-full me-3">{icon}</div>
        <span className="text-lg text-[#3F2571]">{title}</span>
      </div>

      <span className="text-sm mt-2 block">{text}</span>
    </div>
  );
};

export default StudientFeature;
