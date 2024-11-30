// components/Loading.tsx
import Image from 'next/image';

const Loading = () => {
  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black z-50">
      <Image
        src="/VELOXITI_V.png"
        alt="Loading Logo"
        width={555}
        height={555}
        className="animate-fade"
      />
    </div>
  );
};

export default Loading;