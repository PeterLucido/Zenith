import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 flex items-center justify-between w-11/12 bg-black bg-opacity-80 text-white py-4 px-4 rounded-xl mx-auto mt-4 z-50 shadow-lg border border-gray-700">
      {/* Logo with fixed width */}
      <div className="flex items-center" style={{ width: '120px' }}>
        <Image
          src="/VELOXITI_V.png"
          alt="Logo"
          width={50}
          height={50}
          className="object-contain"
        />
      </div>
      {/* Centered Navigation */}
      <nav className="flex-grow">
        <ul className="flex justify-center items-center space-x-8 text-2xl">
          <li className="cursor-pointer hover:underline hover:text-[#29ABE2]"><Link href="/Software">Software</Link></li>
          <li className="cursor-pointer hover:underline hover:text-[#29ABE2]"><Link href="/Networking">Networking</Link></li>
          <li className="cursor-pointer hover:underline hover:text-[#29ABE2]"><Link href="/Partners">Partners</Link></li>
        </ul>
      </nav>
      {/* Contact Button with fixed width */}
      <div className="flex justify-end" style={{ width: '120px' }}>
        <button
          className="bg-[#FF00FF] hover:bg-[#FF66FF] text-white text-2xl py-2 px-4 rounded-md transition-colors"
        >
          <Link href="/Contact">Contact</Link>
        </button>
      </div>
    </header>
  );
};

export default Header;
