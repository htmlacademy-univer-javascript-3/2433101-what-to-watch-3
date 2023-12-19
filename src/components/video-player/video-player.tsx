import { useEffect, useRef } from 'react';

type TVideoPlayer = {
  isActive: boolean;
  srcVideo: string;
  srcImage: string;
}

export default function VideoPlayer({isActive, srcVideo, srcImage}: TVideoPlayer) {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    const timer: NodeJS.Timeout = setTimeout(() => {
      if (isActive && videoRef.current) {
        videoRef.current.play();
      } else if (isActive === false && videoRef.current) {
        videoRef.current.load();
      }
    }, 1000);
    return () => {
      clearTimeout(timer);
    };
  }, [isActive]);

  return (
    <video ref={videoRef} src={srcVideo} poster={srcImage} width={280} height={175} muted/>
  );
}
