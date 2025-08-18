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
      className={`w-full h-full bg-no-repeat bg-center ${className}`}
      style={{
        backgroundImage: `url('${bgImage}')`,
        backgroundSize: "100% 100%",
      }}
    >
      <div className="p-4 pr-12">
        <div className="w-[80%] m-auto flex items-center gap-5">
          <div>
            <img
              src={image}
              alt={name}
              className="w-[100px] h-[100px] rounded-lg object-fill object-center"
            />
          </div>
          <div>
            <p className="text-[25px] font-bold">{name}</p>
            <p className="text-[20px]">{role}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamMemberCard;
