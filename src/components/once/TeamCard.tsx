interface TeamCardProps {
  name: string;
  role: string;
  image: string;
}

const TeamCard = ({ name, role, image }: TeamCardProps) => {
  return (
    <div
      className="w-full sm:w-[45%] md:w-[30%] h-[180px]"
      style={{
        backgroundImage: "url('/assets/SubGroupFrame.png')",
        backgroundSize: "100% 100%",
      }}
    >
      <div className="pr-[20%] flex items-center gap-3 h-full">
        <div className="w-[clamp(80px,15vw,135px)] h-[clamp(80px,15vw,135px)] border border-[#F19704] rounded-2xl overflow-hidden shadow shadow-[#F19704]">
          <img
            className="w-full h-full rounded-xl object-fill"
            src={image}
            alt="avatar.png"
          />
        </div>

        <div className="flex flex-col gap-2">
          <p className="font-bold text-[clamp(1rem,2vw,2.5rem)]">{name}</p>
          <p className="text-[clamp(0.875rem,1.5vw,1.75rem)]">{role}</p>
        </div>
      </div>
    </div>
  );
};

export default TeamCard;
