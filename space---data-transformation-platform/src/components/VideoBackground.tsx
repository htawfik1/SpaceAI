import React, { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';

interface VideoBackgroundProps {
  src: string;
}

export default function VideoBackground({ src }: VideoBackgroundProps) {
  const [activeVideo, setActiveVideo] = useState<'v1' | 'v2'>('v1');
  const v1Ref = useRef<HTMLVideoElement>(null);
  const v2Ref = useRef<HTMLVideoElement>(null);
  
  const CROSSFADE_DURATION = 1.5; // seconds

  const { scrollY } = useScroll();

  useEffect(() => {
    let animationFrame: number;
    
    const checkLoop = () => {
      const activeRef = activeVideo === 'v1' ? v1Ref : v2Ref;
      const inactiveRef = activeVideo === 'v1' ? v2Ref : v1Ref;

      if (activeRef.current && activeRef.current.duration) {
        const remaining = activeRef.current.duration - activeRef.current.currentTime;
        
        // When nearing end, prepare and start the other video
        if (remaining <= CROSSFADE_DURATION && remaining > 0) {
          if (inactiveRef.current && inactiveRef.current.paused) {
            inactiveRef.current.currentTime = 0;
            inactiveRef.current.play().then(() => {
              setActiveVideo(activeVideo === 'v1' ? 'v2' : 'v1');
            }).catch(e => console.log("Loop play failed", e));
          }
        }
      }
      animationFrame = requestAnimationFrame(checkLoop);
    };

    animationFrame = requestAnimationFrame(checkLoop);
    return () => cancelAnimationFrame(animationFrame);
  }, [activeVideo]);

  return (
    <div 
      className="fixed inset-0 z-0 overflow-hidden bg-black"
    >
      <div className="absolute inset-0">
        {/* Video 1 */}
        <video
          ref={v1Ref}
          src={src}
          muted
          playsInline
          autoPlay={activeVideo === 'v1'}
          onLoadedData={() => {
            if (activeVideo === 'v1') v1Ref.current?.play().catch(() => {});
          }}
          className={`absolute inset-0 w-full h-full object-cover object-top transition-opacity duration-[1500ms] ease-in-out ${
            activeVideo === 'v1' ? 'opacity-100' : 'opacity-0'
          }`}
        />

        {/* Video 2 */}
        <video
          ref={v2Ref}
          src={src}
          muted
          playsInline
          className={`absolute inset-0 w-full h-full object-cover object-top transition-opacity duration-[1500ms] ease-in-out ${
            activeVideo === 'v2' ? 'opacity-100' : 'opacity-0'
          }`}
        />
        
        {/* Enhanced gradient for smooth bottom blending */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent z-[1]" />
        <div className="absolute inset-x-0 bottom-0 h-[50vh] bg-gradient-to-t from-black to-transparent z-[2]" />
      </div>
    </div>
  );
}
