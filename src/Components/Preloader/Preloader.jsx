import React, { useEffect, useState } from "react";

const Preloader = ({ finishLoading }) => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
      if (finishLoading) finishLoading();
    }, 500); // 2 seconds
    return () => clearTimeout(timer);
  }, [finishLoading]);

  return (
    <div
      className={`fixed inset-0 flex flex-col justify-center items-center bg-bg dark:bg-darkbg z-[9999] transition-opacity duration-1000 ${
        visible ? "opacity-100 visible" : "opacity-0 invisible"
      }`}
    >
      {/* Gradient SVG Logo */}
      <svg width="300" height="200" viewBox="0 0 200 200">
        <defs>
          <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#00a2ff">
              <animate
                attributeName="stop-color"
                values="#00a2ff;#2cd7b3;#1098ab;#00a2ff"
                dur="3s"
                repeatCount="indefinite"
              />
            </stop>
            <stop offset="50%" stopColor="#ffffff">
              <animate
                attributeName="stop-color"
                values="#ffffff;#cfd3d8;#00a2ff;#ffffff"
                dur="3s"
                repeatCount="indefinite"
              />
            </stop>
            <stop offset="100%" stopColor="#121212">
              <animate
                attributeName="stop-color"
                values="#121212;#00a2ff;#2cd7b3;#121212"
                dur="3s"
                repeatCount="indefinite"
              />
            </stop>
          </linearGradient>
        </defs>
        <text
          x="50%"
          y="50%"
          textAnchor="middle"
          dominantBaseline="middle"
          fontSize="60"
          fontWeight="bold"
          fill="url(#gradient)"
          className="animate-fadeIn"
        >
          KMZ
        </text>
      </svg>

      {/* Loader Circle */}
      <div className="w-12 h-12 border-4 border-transparent border-t-accent rounded-full animate-rotateCircle mt-6"></div>
    </div>
  );
};

export default Preloader;
