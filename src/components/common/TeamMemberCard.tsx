import React from "react";

interface TeamMemberCardProps {
  image: string;
  name: string;
  role: string;
  bgImage?: string;
  className?: string;
}

const TeamMemberCard: React.FC<TeamMemberCardProps> = ({
  image,
  name,
  role,
  bgImage = "/assets/SubGroupFrame.png",
  className = "",
}) => {
  return (
    <div
      className={`w-full h-full bg-no-repeat bg-center relative overflow-hidden ${className}`}
      style={{
        backgroundImage: `url('${bgImage}')`,
        backgroundSize: "100% 100%",
      }}
    >
      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-br "></div>

      <div className="relative z-10 p-6 pr-14 h-full">
        <div className="w-[70%] m-auto flex items-center gap-6 h-full">
          <div className="relative group">
            <div
              className="absolute inset-0 rounded-xl blur opacity-75 group-hover:opacity-100 transition duration-300"
              style={{
                background: "linear-gradient(135deg, #F19704, #ff8c00)",
              }}
            ></div>
            <div className="relative bg-white p-1 rounded-xl shadow-2xl">
              <div className="w-[90px] aspect-square">
                <img
                  src={image}
                  alt={name}
                  className="w-full h-full rounded-lg object-fill object-center shadow-lg transition-transform duration-300 group-hover:scale-105"
                />
              </div>
            </div>
          </div>

          <div className="flex-1 space-y-2">
            <div className="relative">
              <h3 className="text-[20px] text-nowrap font-bold text-slate-800 leading-tight">
                {name}
              </h3>
              <div
                className="h-1 w-16 rounded-full mt-1"
                style={{ backgroundColor: "#F19704" }}
              ></div>
            </div>

            <p className="text-[18px] text-nowrap text-slate-600 font-medium tracking-wide">
              {role}
            </p>

            {/* Decorative elements */}
            <div className="flex items-center gap-2 pt-2">
              <div
                className="w-2 h-2 rounded-full animate-pulse"
                style={{ backgroundColor: "#F19704" }}
              ></div>
              <div
                className="w-2 h-2 rounded-full animate-pulse delay-75"
                style={{ backgroundColor: "#ff8c00" }}
              ></div>
              <div
                className="w-2 h-2 rounded-full animate-pulse delay-150"
                style={{ backgroundColor: "#e67e22" }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamMemberCard;
