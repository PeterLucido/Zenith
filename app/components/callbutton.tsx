import React from 'react';

interface ButtonComponentProps {
    onClick?: () => void;
    buttonLink: string;
    buttonText: string;
}

const ButtonComponent = ({ onClick, buttonLink, buttonText }: ButtonComponentProps) => {
    return (
        <div className="flex w-full max-w-lg items-center justify-center mt-4">
            <div className="relative z-10 flex cursor-pointer items-center overflow-hidden rounded-xl border border-black p-[1.5px]">
                <div className="absolute inset-0 flex items-center justify-center">
                    <div className="animate-rotate h-full w-full rounded-lg bg-[conic-gradient(#FF00FF_20deg,transparent_120deg)]"></div>
                </div>
                <button
                    className="relative z-20 block rounded-lg bg-black px-8 py-3 text-center text-xl text-white shadow-2xl transition duration-200 hover:bg-pink-600"
                    onClick={onClick}
                >
                    {buttonText}
                </button>
            </div>
        </div>
    );
}

export default ButtonComponent;