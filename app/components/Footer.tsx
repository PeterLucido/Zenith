'use client'

import Image from "next/image"

const Footer = () => {
  return (
    <footer className="w-full bg-transparent py-8">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-white items-center text-center">
        {/* Left Section: Logo */}
        <div className="flex justify-center">
          <Image
            src="/VELOXITI_V.png"
            alt="VELOXITI Logo"
            width={100}
            height={100}
            className="object-contain"
          />
        </div>

        {/* Middle Section: Address */}
        <div>
          <p className="text-gray-300">
            241 Hanley Industrial Ct.
            <br />
            St. Louis, MO 63144
          </p>
        </div>

        {/* Right Section: Contact Info */}
        <div>
          <p className="text-gray-300">Info@veloxiti.io</p>
          <p className="text-gray-300">636.795.2482</p>
        </div>
      </div>

      {/* Bottom Section: Copyright */}
      <div className="mt-8 text-center text-gray-500 text-sm">
        © 2024 VELOXITI. All rights reserved.
      </div>
    </footer>
  )
}

export default Footer
