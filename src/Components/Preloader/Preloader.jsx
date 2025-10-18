import React, { useEffect, useState } from "react";
import Lottie from "lottie-react";
import loaderAnimation from "../../assets/loader.json"; // adjust path as needed

const Preloader = ({ finishLoading }) => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
      if (finishLoading) finishLoading();
    }, 500); // adjust duration as needed
    return () => clearTimeout(timer);
  }, [finishLoading]);

  return (
    <div
      className={`fixed inset-0 flex flex-col justify-center items-center bg-bg dark:bg-darkbg z-[9999] transition-opacity duration-1000 ${
        visible ? "opacity-100 visible" : "opacity-0 invisible"
      }`}
    >
      <Lottie animationData={loaderAnimation} loop={true} style={{ width: 200, height: 200 }} />
    </div>
  );
};

export default Preloader;
