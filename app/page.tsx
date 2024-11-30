'use client';
import { useEffect, useState } from 'react';
import Header from '../app/components/header';
import RightPhoto from '../app/components/rightphoto';
import LeftPhoto from '../app/components/leftphoto';
import ButtonComponent from '../app/components/callbutton';
import LogoParticles from './components/LogoParticles';
import HeroSection from './components/HeroSection';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';

export default function Home() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(/iPhone|iPad|iPod|Android/i.test(navigator.userAgent));
    };

    checkIfMobile();
  }, []);

  return (
    <>
    <div className="relative">
      <Header />
      {/* Main Container */}
      <div className='z-15'>
        <HeroSection />
          <ButtonComponent
                className="absolute z-50 bg-[#FF00FF] hover:bg-[#FF66FF] text-white text-2xl py-2 px-4 rounded-md  transition-colors top-[37rem] left-[28rem]"
                buttonLink="/Contact"
                buttonText="Contact"
                onClick={() => console.log('Button clicked')}
              />
      </div>
        {/* LogoParticles Below */}
        <div className="absolute inset-0 z-30">
          <LogoParticles />
        </div>
        {/* Additional Content */}
        <div className="p-4">
          <RightPhoto
            title="Streamline Your Business with Our SaaS Platform"
            description="Our all-in-one SaaS platform helps you manage your business efficiently, from customer relationships to financial reporting. Experience the power of seamless integration and automation."
            buttonText="Get Started"
            buttonLink="#"
            imageSrc="/VELOXITI_V.png"
            imageAlt="Business Platform"
          />
        </div>
        <div className="p-4">
          <LeftPhoto
            title="Streamline Your Business with Our SaaS Platform"
            description="Our all-in-one SaaS platform helps you manage your business efficiently, from customer relationships to financial reporting. Experience the power of seamless integration and automation."
            buttonText="Get Started"
            buttonLink="#"
            imageSrc="/next.svg"
            imageAlt="Business Platform"
          />
        </div>
        <div className="p-4">
          <RightPhoto
            title="Streamline Your Business with Our SaaS Platform"
            description="Our all-in-one SaaS platform helps you manage your business efficiently, from customer relationships to financial reporting. Experience the power of seamless integration and automation."
            buttonText="Get Started"
            buttonLink="#"
            imageSrc="/vercel.svg"
            imageAlt="Business Platform"
          />
        </div>
      </div>
      <ContactForm />
      <Footer />
    </>
  );
}
