import React, { useState, useEffect } from "react";
import { Circles } from "react-loader-spinner";

const Preloader = () => {
  const colors = ["#7C3AED", "#4A90E2", "#A55FFF", "#5F27CD"];

  const [currentColorIndex, setCurrentColorIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentColorIndex((prevIndex) =>
        prevIndex === colors.length - 1 ? 0 : prevIndex + 1
      );
    }, 450);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex items-center justify-center h-screen w-screen bg-black select-none">
      <div className="h-full w-full flex items-center justify-center">
        <Circles
          height={"100%"}
          width={"100%"}
          color={colors[currentColorIndex]}
          visible={true}
          transition={"background 1500ms ease"}
        />
      </div>
    </div>
  );
};

export default Preloader;
