'use client';

// import ButtonComponent from '../components/callbutton';

const HeroSection = () => {
  return (
    <div className='z-10'>
      <div className="w-full mx-auto relative">
        <div className="relative flex h-screen">
          {/* Left Section */}
          <div className="flex flex-col justify-center text-white px-16 translate-x-10">
            <section className="relative z-10 flex flex-col items-center justify-center h-full text-left">
              <h1 className="text-4xl md:text-8xl font-medium mb-6">Welcome To Veloxiti</h1>
              <h2 className="text-1xl md:text-4xl font-light mb-10">
                Where Solutions Connect and Ideas Evolve.
              </h2>
              {/* Button Positioned Above LogoParticles */}
              {/* <ButtonComponent
                className="absolute z-50 bg-[#FF00FF] hover:bg-[#FF66FF] text-white text-2xl py-2 px-4 rounded-md transition-colors"
                buttonLink="6367952482"
                buttonText="Contact"
                onClick={() => console.log('Button clicked')}
              /> */}
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;