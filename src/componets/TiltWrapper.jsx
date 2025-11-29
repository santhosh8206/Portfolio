import { useEffect, useRef } from "react";
import VanillaTilt from "vanilla-tilt";

export default function TiltWrapper({ children, options }) {
  const tiltRef = useRef(null);

  useEffect(() => {
    if (tiltRef.current) {
      VanillaTilt.init(tiltRef.current, {
        max: 15,
        speed: 400,
        glare: true,
        "max-glare": 0.2,
        scale: 1.05,
        ...options,
      });
    }
  }, []);

  return (
    <div ref={tiltRef} className="w-full">
      {children}
    </div>
  );
}
