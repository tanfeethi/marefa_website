import React from 'react';

interface HeaderProps {
    title: string;
    subtitle: string;
    className?: string;
    subtitleClassName?: string;
}

const Header: React.FC<HeaderProps> = ({ title, subtitle, className = '', subtitleClassName = '' }) => {
    return (
        <div className={`header-wrapper text-5xl font-semibold ${className}`}>
            <h1>{title}</h1>
            <p className={`${subtitleClassName}`}>{subtitle}</p>
        </div>
    );
};

export default Header;