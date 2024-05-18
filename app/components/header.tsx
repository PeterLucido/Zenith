import React from 'react';
import Image from 'next/image';

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 flex items-center w-3/4 bg-black bg-opacity-80 text-white py-4 px-8 rounded-xl mx-auto mt-4 z-50 shadow-lg border border-gray-700">
      <div className="flex items-center space-x-4">
        <Image src="/Zenith.png" alt="Logo" width={60} height={60} className="object-contain" />
      </div>
      <nav className="flex-grow">
        <ul className="flex justify-center space-x-6 text-xl">
          <li className="cursor-pointer hover:underline">About</li>
          <li className="cursor-pointer hover:underline">Services</li>
          <li className="cursor-pointer hover:underline">Contact</li>
        </ul>
      </nav>
      <div className="flex items-center space-x-2">
        <button className="px-4 py-2 text-lg bg-white text-black rounded-lg shadow">Log in</button>
      </div>
    </header>
  );
};

export default Header;