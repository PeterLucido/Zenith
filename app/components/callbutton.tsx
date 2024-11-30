import React from 'react';

interface ButtonComponentProps {
    onClick?: () => void;
    buttonLink?: string; // Optional in case no link is provided
    buttonText: string;
    className?: string; // Allow custom styling via className
}

const ButtonComponent = ({ onClick, buttonLink, buttonText, className }: ButtonComponentProps) => {
    return (
        <div className="flex w-full max-w-lg items-center justify-center mt-4 z-80">
            <a
                href={buttonLink || '#'}
                target={buttonLink?.startsWith('http') || buttonLink?.startsWith('tel') ? '_blank' : undefined} // Open external links in a new tab
                rel="noopener noreferrer"
                onClick={onClick}
                className={`cursor-pointer ${className}`}
            >
                {buttonText}
            </a>
        </div>
    );
};

export default ButtonComponent;
