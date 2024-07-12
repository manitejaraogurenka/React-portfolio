import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { TypeAnimation } from "react-type-animation";
import { tranabout, traniam } from "../utils/translateText";

const About = () => {
  const { selected } = useSelector((state) => state.navbar);
  const { lang } = useSelector((state) => state.language);

  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth <= 535);

  useEffect(() => {
    const handleResize = () => setIsSmallScreen(window.innerWidth <= 535);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div>
      {isSmallScreen ? (
        <div className="bg-black items-center flex h-screen w-screen text-white select-none">
          <span className="relative flex flex-col w-screen h-screen left-4 mt-[8rem]">
            <img
              draggable={false}
              src="/About me.png"
              loading="lazy"
              className="w-fit max-h-[180px] object-cover self-center mr-20"
              alt="About me"
            />
            <span className="absolute bg-white w-fit h-3/5 rounded-3xl top-[11rem] mr-8 p-4 text-justify shadow-md shadow-white border-2 border-white text-xs md:text-sm lg:text-xl text-white text-opacity-0">
              <p>
                I am a passionate Web Developer who recently graduated from
                Sathyabama University, Chennai. Transitioning from a background
                in biotechnology, I am now fully focused on excelling in the
                fields of programming and web development.
              </p>
              <span className="px-1 z-10 font-bold content-around text-sm sm:text-lg md:text-xl lg:text-3xl font-Orbitron text-center text-white absolute bg-blue-500 w-1/3 h-12 left-[32%] rounded-b-2xl top-2 border-2 border-white">
                {traniam(lang)}
              </span>
              <span className="z-[1] font-bold content-around  text-white absolute w-[98%] left-3 h-12 rounded-t-[1.4rem] top-[0.56rem] bg-black shadow-lg"></span>
              <span className="text-white font-Poppins text-xs md:text-sm lg:text-xl absolute bg-black w-full h-full rounded-3xl top-2 pt-14 left-2 mr-8 p-4 text-justify border-2 border-white overflow-scroll">
                {selected === "About" && (
                  <TypeAnimation
                    key={lang}
                    splitter={(str) => str.split(/(?=\n| )/)}
                    sequence={[tranabout(lang), 3000]}
                    speed={{ type: "keyStrokeDelayInMs", value: 10 }}
                    omitDeletionAnimation={true}
                    style={{
                      fontSize: "1em",
                      display: "block",
                      minHeight: "200px",
                      whiteSpace: "pre-wrap",
                    }}
                    repeat={0}
                  />
                )}
              </span>
            </span>
          </span>
        </div>
      ) : (
        <div className="bg-black items-center flex h-[700px] w-screen text-white select-none">
          <span className="relative w-screen h-[700px] left-4">
            <img
              draggable={false}
              src="/About.png"
              loading="lazy"
              className="w-fit max-h-full object-cover"
              alt="About"
            />
            <span className="absolute bg-white w-fit h-3/4 rounded-3xl top-40 left-52 mr-8 p-4 text-justify shadow-md shadow-white border-2 border-white text-xs md:text-sm lg:text-xl text-white text-opacity-0">
              <p>
                I am a passionate Web Developer who recently graduated from
                Sathyabama University, Chennai. Transitioning from a background
                in biotechnology, I am now fully focused on excelling in the
                fields of programming and web development.
              </p>
              <span className="px-1 z-10 font-bold content-around text-sm sm:text-lg md:text-xl lg:text-3xl font-Orbitron text-center text-white absolute bg-blue-500 w-1/3 h-12 left-[32%] rounded-b-2xl top-2 border-2 border-white">
                {traniam(lang)}
              </span>

              <span className="text-white font-Poppins text-xs md:text-sm lg:text-xl absolute bg-black w-full h-full rounded-3xl top-2 pt-14 left-2 mr-8 p-4 text-justify border-2 border-white overflow-scroll cursor-scale">
                {selected === "About" && (
                  <TypeAnimation
                    key={lang}
                    splitter={(str) => str.split(/(?=\n| )/)}
                    sequence={[tranabout(lang), 3000]}
                    speed={{ type: "keyStrokeDelayInMs", value: 10 }}
                    omitDeletionAnimation={true}
                    style={{
                      fontSize: "1em",
                      display: "block",
                      minHeight: "200px",
                      whiteSpace: "pre-wrap",
                    }}
                    repeat={0}
                  />
                )}
              </span>
            </span>
          </span>
        </div>
      )}
    </div>
  );
};

export default About;
