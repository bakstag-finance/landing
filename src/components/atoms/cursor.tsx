"use client";

import { useEffect, useState } from "react";

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (event: MouseEvent) => {
    setPosition({ x: event.clientX, y: event.clientY });
  };

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div
      className="hidden md:block z-[9999] fixed w-5 h-5 bg-black border-2 border-black rounded-full pointer-events-none"
      style={{
        top: `${position.y - 5}px`,
        left: `${position.x - 5}px`,
        filter: "invert(1)",
        mixBlendMode: "difference",
      }}
    />
  );
};

export default CustomCursor;
