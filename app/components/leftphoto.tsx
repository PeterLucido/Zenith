import React from 'react';
import Image from 'next/image';

interface LeftPhotoProps {
  title: string;
  description: string;
  buttonText: string;
  buttonLink: string;
  imageSrc: string;
  imageAlt: string;
}

const LeftPhoto = ({ title, description, buttonText, buttonLink, imageSrc, imageAlt }: LeftPhotoProps) => {
  return (
    <section className="flex items-center justify-between h-96 mx-auto p-8 bg-black bg-opacity-80 text-white rounded-xl shadow-lg border border-gray-700 mt-4 w-5/6">
      <div className="w-1/2 flex justify-start">
        <Image src={imageSrc} alt={imageAlt} width={500} height={300} className="rounded-lg" />
      </div>
      <div className="w-1/2 pl-8 text-right">
        <h2 className="text-4xl font-bold mb-4">{title}</h2>
        <p className="mb-6">{description}</p>
        <a href={buttonLink} className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
          {buttonText}
        </a>
      </div>
    </section>
  );
};

export default LeftPhoto;