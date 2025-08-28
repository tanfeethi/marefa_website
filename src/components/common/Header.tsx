import React from "react";

interface HeaderProps {
  title: string;
  subtitle?: string;
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
    <div className={`header-wrapper font-semibold ${className}`}>
      <h1 className="xl:leading-16">
        {title} <span className={`${subtitleClassName}`}>{subtitle}</span>
      </h1>
      <p className=" font-light">{description}</p>
    </div>
  );
};

export default Header;
