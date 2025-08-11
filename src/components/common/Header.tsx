import React from "react";

interface HeaderProps {
  title: string;
  subtitle: string;
  className?: string;
  subtitleClassName?: string;
  description?: string;
}

const Header: React.FC<HeaderProps> = ({
  title,
  subtitle,
  className = "",
  subtitleClassName = "",
  description,
}) => {
  return (
    <div className={`header-wrapper text-5xl font-semibold ${className}`}>
      <h1>
        {title} <span className={`${subtitleClassName}`}>{subtitle}</span>
      </h1>
      <p className="text-[17px] mt-3 font-light">{description}</p>
    </div>
  );
};

export default Header;
