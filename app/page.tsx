'use client';
import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Loading from '.././/app/components/Loading2';
import Header from '.././/app/components/header';
import RightPhoto from '.././/app/components/rightphoto';
import LeftPhoto from '.././/app/components/leftphoto';
import ButtonComponent from '.././/app/components/callbutton';

export default function Home() {
  const [isMobile, setIsMobile] = useState(false);
  const [videoLoaded, setVideoLoaded] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const timeoutRef = useRef<number | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      const video = videoRef.current;
      if (video) {
        if (timeoutRef.current !== null) {
          clearTimeout(timeoutRef.current);
        }

        video.playbackRate = 1 + window.scrollY / window.innerHeight;
        video.play();

        timeoutRef.current = window.setTimeout(() => {
          video.pause();
        }, 180);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      if (timeoutRef.current !== null) {
        clearTimeout(timeoutRef.current);
      }
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(/iPhone|iPad|iPod|Android/i.test(navigator.userAgent));
    };

    checkIfMobile();
  }, []);

  useEffect(() => {
    const video = videoRef.current;

    if (video) {
      const handleLoadedData = () => {
        setVideoLoaded(true);
      };

      const handleVideoError = () => {
        setVideoLoaded(true);
      };

      const handleVideoAbort = () => {
        setVideoLoaded(true);
      };

      video.addEventListener('loadeddata', handleLoadedData);
      video.addEventListener('error', handleVideoError);
      video.addEventListener('abort', handleVideoAbort);

      // Fallback timeout in case events don't fire
      const fallbackTimeout = setTimeout(() => {
        if (!videoLoaded) {
          console.log('Fallback: video load timeout');
          setVideoLoaded(true);
        }
      }, 5000); // 5 seconds timeout

      return () => {
        clearTimeout(fallbackTimeout);
        video.removeEventListener('loadeddata', handleLoadedData);
        video.removeEventListener('error', handleVideoError);
        video.removeEventListener('abort', handleVideoAbort);
      };
    } else {
      console.log("Video element not found");
    }
  }, [videoLoaded]);

  return (
    <div>
      {!videoLoaded && <Loading />}
      <video
        ref={videoRef}
        className={`fixed top-0 left-0 w-full h-full object-cover z-[-1] ${isMobile ? 'pointer-events-none' : ''}`}
        src="/BackgroundVideo2_optimized2.mp4"
        muted
        playsInline
        preload="auto"
      >
        <source src="/BackgroundVideo2.mp4" type="video/mp4" />
        <source src="/BackgroundVideo2.webm" type="video/webm" />
        <source src="/BackgroundVideo2.ogv" type="video/ogg" />
        Your browser does not support the video tag.
      </video>
      {isMobile && (
        <Image
          id="fallback-image"
          src="/fallback.jpg"
          alt="Background Image"
          layout="fill"
          objectFit="cover"
          className="fixed top-0 left-0 w-full h-full z-[-1] pointer-events-none"
        />
      )}
      {videoLoaded && (
        <div className="relative z-10">
          <Header />
          <div className="fixed top-0 left-0 w-full h-full bg-black opacity-40 z-[-1]"></div>
          <section className="relative z-10 flex flex-col items-center justify-center h-full text-white mt-28">
            <h1 className="text-7xl font-bold pt-60">Launching Dreams into Reality</h1>
            <h2 className="text-4xl font-bold pt-4">Transforming your greatest visions into innovative software solutions.</h2>
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
        </div>
      )}
    </div>
  );
}