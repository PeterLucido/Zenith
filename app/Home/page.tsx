'use client'
import { useEffect, useRef } from "react";
import Header from "../components/header";
import RightPhoto from '../components/rightphoto';
import LeftPhoto from '../components/leftphoto';
import ButtonComponent from '../components/callbutton';

export default function Home() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const timeoutRef = useRef<number | null>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      const handleScroll = () => {
        if (timeoutRef.current !== null) {
          clearTimeout(timeoutRef.current);
        }

        video.playbackRate = 1 + window.scrollY / window.innerHeight;

        video.play();

        timeoutRef.current = window.setTimeout(() => {
          video.pause();
        }, 180);
      };

      window.addEventListener("scroll", handleScroll);

      return () => {
        if (timeoutRef.current !== null) {
          clearTimeout(timeoutRef.current);
        }
        window.removeEventListener("scroll", handleScroll);
      };
    } else {
      console.error('Video element not found');
    }
  }, []);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 relative">
      <video
        ref={videoRef}
        className="fixed top-0 left-0 w-full h-full object-cover z-[-1]"
        src="/BackgroundVideo2.mp4"
        muted
      >
        Your browser does not support the video tag.
      </video>
      <Header />
      <div className="fixed top-0 left-0 w-full h-full bg-black opacity-40 z-[-1]"></div>
      <section className="relative z-10 flex flex-col items-center justify-center h-full text-white mt-28">
        <h1 className="text-7xl font-bold pt-60">Launching Dreams into Reality</h1>
        <h2 className='text-4xl font bold pt-4'>Transforming your greatest visions into innovative software solutions.</h2>
        <ButtonComponent buttonLink="6367952482" buttonText="Call Today" onClick={() => console.log('Button clicked')} />
        <div style={{ height: '45vh' }}></div>
      </section>
      <div className="p-4">
      <RightPhoto
        title="Streamline Your Business with Our SaaS Platform"
        description="Our all-in-one SaaS platform helps you manage your business efficiently, from customer relationships to financial reporting. Experience the power of seamless integration and automation."
        buttonText="Get Started"
        buttonLink="#"
        imageSrc="/Zenith.png"
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
    </main>
  );
}