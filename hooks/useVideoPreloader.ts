// hooks/useVideoPreloader.ts
import { useEffect, useState, RefObject } from 'react';

const useVideoPreloader = (videoRef: RefObject<HTMLVideoElement>) => {
  const [videoLoaded, setVideoLoaded] = useState(false);

  useEffect(() => {
    const video = videoRef.current;

    if (video) {
      console.log("Video element found");

      const handleCanPlayThrough = () => {
        console.log('Video can play through');
        setVideoLoaded(true);
      };

      const handleVideoError = () => {
        console.error('Error loading video', video.error);
      };

      const handleVideoAbort = () => {
        console.warn('Video load aborted');
      };

      video.addEventListener('canplaythrough', handleCanPlayThrough);
      video.addEventListener('loadeddata', handleCanPlayThrough);
      video.addEventListener('loadedmetadata', handleCanPlayThrough);
      video.addEventListener('error', handleVideoError);
      video.addEventListener('abort', handleVideoAbort);

      return () => {
        video.removeEventListener('canplaythrough', handleCanPlayThrough);
        video.removeEventListener('loadeddata', handleCanPlayThrough);
        video.removeEventListener('loadedmetadata', handleCanPlayThrough);
        video.removeEventListener('error', handleVideoError);
        video.removeEventListener('abort', handleVideoAbort);
      };
    } else {
      console.log("Video element not found");
    }
  }, [videoRef]);

  return videoLoaded;
};

export default useVideoPreloader;