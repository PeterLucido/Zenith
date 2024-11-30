import React from 'react';
import Image from 'next/image';

interface RightPhotoProps {
  title: string;
  description: string;
  buttonText: string;
  buttonLink: string;
  imageSrc: string;
  imageAlt: string;
}

const RightPhoto = ({ title, description, buttonText, buttonLink, imageSrc, imageAlt }: RightPhotoProps) => {
  return (
    <section className="flex items-center justify-between h-96 mx-auto p-8 bg-black bg-opacity-80 text-white rounded-xl shadow-lg border border-gray-700 mt-4 w-11/12">
      <div className="w-1/2 pr-8">
        <h2 className="text-4xl font-bold mb-4">{title}</h2>
        <p className="mb-6">{description}</p>
        <a href={buttonLink} className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
          {buttonText}
        </a>
      </div>
      <div className="w-1/2 flex justify-end">
        <Image src={imageSrc} alt={imageAlt} width={300} height={150} className="rounded-lg" />
      </div>
    </section>
  );
};

export default RightPhoto;