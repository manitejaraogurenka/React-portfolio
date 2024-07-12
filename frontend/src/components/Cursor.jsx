import gsap from "gsap";
import React, { useEffect, useState } from "react";

const Cursor = () => {
  const [mouseX, setMouseX] = useState(0);
  const [mouseY, setMouseY] = useState(0);

  useEffect(() => {
    const cursor = document.querySelector(".cursor");
    const cursorScale = document.querySelectorAll(".cursor-scale");

    gsap.to({}, 0.016, {
      repeat: -1,
      onRepeat: () => {
        gsap.set(cursor, {
          left: mouseX,
          top: mouseY,
        });
      },
    });

    const handleMouseMove = (e) => {
      setMouseX(e.clientX);
      setMouseY(e.clientY);
    };

    window.addEventListener("mousemove", handleMouseMove);

    cursorScale.forEach((link) => {
      link.addEventListener("mouseenter", () => {
        cursor.classList.add("grow");
        if (link.classList.contains("small")) {
          cursor.classList.remove("grow");
          cursor.classList.add("grow-small");
        }
      });

      link.addEventListener("mouseleave", () => {
        cursor.classList.remove("grow");
        cursor.classList.remove("grow-small");
      });
    });

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [mouseX, mouseY]);
  return <div className="cursor z-50"></div>;
};

export default Cursor;
