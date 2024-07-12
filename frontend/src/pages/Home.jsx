import React, { useEffect, useState } from "react";
import { TypeAnimation } from "react-type-animation";
import { GrDocumentDownload } from "react-icons/gr";

import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { BsLinkedin } from "react-icons/bs";
import { FaTwitter } from "react-icons/fa";
import { TbHeartHandshake } from "react-icons/tb";
import { SiLeetcode } from "react-icons/si";
import { FaTelegram } from "react-icons/fa";
import { TiSocialFacebook } from "react-icons/ti";
import { IoClose } from "react-icons/io5";
import { IoMdDownload } from "react-icons/io";

import "../styles/SocialCircle.css";
import {
  tranname,
  trangreet,
  tranintro,
  tranhire,
  trandoc,
} from "../utils/translateText";
import { useSelector } from "react-redux";
import DocViewer, { DocViewerRenderers } from "react-doc-viewer";

const Home = () => {
  const audio = new Audio("/Audio/My_name_is_maniteja_Gurenka.mp3");
  const audio1 = new Audio("/Audio/CircularMenu.mp3");

  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const [showDocViewer, setShowDocViewer] = useState(false);
  const { lang } = useSelector((state) => state.language);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth >= 542);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const documents = [
    {
      uri: "https://rn6nfrrfhoitavfo.public.blob.vercel-storage.com/Maniteja%20Gurenka's%20Resume",
      fileType: "docx",
      fileName: "Maniteja Gurenka's Resume",
    },
  ];

  const downloadResume = () => {
    const link = document.createElement("a");
    link.href = "/Resume Maniteja Gurenka.docx";
    link.download = "Resume Maniteja Gurenka.docx";
    link.click();
  };

  return (
    <div className=" relative flex justify-start items-center bg-black w-screen h-screen overflow-clip shadow-lg shadow-black select-none">
      {showDocViewer && (
        <div className="absolute inset-0 bg-black bg-opacity-75 flex justify-center items-center z-20 top-8">
          <div className="relative bg-white p-4 rounded-lg">
            <div className="absolute flex gap-3 top-2 z-10 right-2 text-black font-bold">
              <button onClick={downloadResume}>
                <IoMdDownload size={25} />
              </button>
              <button onClick={() => setShowDocViewer(false)}>
                <IoClose size={25} />
              </button>
            </div>

            <DocViewer
              pluginRenderers={DocViewerRenderers}
              documents={documents}
              config={{
                header: {
                  disableHeader: false,
                  disableFileName: false,
                  retainURLParams: false,
                },
              }}
              className=" h-[80vh] w-[90vw] sm:w-[80vw] lg:w-[75vw] xl:w-[65vw]"
            />
          </div>
        </div>
      )}
      <div
        className="absolute flex flex-col bg-transparent z-10 ml-16 mt-20"
        data-aos="fade-in"
        data-aos-once="true"
        data-aos-delay="100"
      >
        <span className="text-white text-4xl mb-2 font-Oxanium drop-shadow-2xl">
          {trangreet(lang)}
        </span>
        <span
          className="text-white font-Orbitron font-black specialFont cursor-pointer cursor-scale small"
          onClick={() => audio.play()}
        >
          {tranname(lang)}
        </span>
        <span className="text-white mt-1 font-Poppins">
          <TypeAnimation
            key={lang}
            sequence={tranintro(lang)}
            speed={50}
            style={{ fontSize: "1.5em" }}
            repeat={Infinity}
          />
        </span>
        <span className="mt-7 flex gap-12">
          <button
            onClick={() => setShowDocViewer(true)}
            className="resume-btn inline-flex gap-1 items-center px-2 py-1 rounded-3xl active:scale-105"
          >
            <GrDocumentDownload />
            {trandoc(lang)}
          </button>
          <span
            onClick={() => {
              audio1.play();
              document
                .getElementById("contact")
                .scrollIntoView({ behavior: "smooth" });
            }}
          >
            <button className="resume-btn inline-flex gap-1 items-center px-2 py-1 rounded-3xl active:scale-105">
              <TbHeartHandshake size={20} />
              {tranhire(lang)}
            </button>
          </span>
        </span>
        <div className=" flex gap-4 items-center lg:invisible text-white mt-16">
          <a
            href="https://www.youtube.com/channel/UCCG6BUMTVsGhxmUsTpLKkCQ"
            className="p-1 rounded-full resume-btn"
          >
            <FaYoutube
              size={40}
              className=" bg-white p-1 rounded-full hover:scale-125 active:scale-125 transition-all ease-in hover:rotate-12"
              color="red"
            />
          </a>

          <a
            href="https://www.instagram.com/manitejarao.gurenka/"
            className="p-1 rounded-full resume-btn"
          >
            <FaInstagram
              size={40}
              className=" bg-white p-1 rounded-full hover:scale-125 active:scale-125 transition-all ease-in hover:rotate-12 "
              color="#e1306c"
            />
          </a>
          <a
            href="https://www.linkedin.com/in/manitejagurenka/"
            className="p-1 rounded-full resume-btn"
          >
            <BsLinkedin
              size={40}
              className=" bg-white p-1 rounded-full hover:scale-125 active:scale-125 transition-all ease-in hover:rotate-12"
              color="blue"
            />
          </a>

          <a
            href="https://x.com/Gurenkamaniteja"
            className="p-1 rounded-full resume-btn"
          >
            <FaTwitter
              size={40}
              className=" bg-white p-1 rounded-[45%] hover:scale-125 active:scale-125 transition-all ease-in hover:rotate-12"
              color="#1DA1F2"
            />
          </a>

          <a
            href="https://github.com/ManitejaraoGurenka"
            className="p-1 rounded-full resume-btn mr-4"
          >
            <FaGithub
              size={40}
              className="bg-white p-1 rounded-full hover:scale-125 active:scale-125 transition-all ease-in hover:rotate-12"
              color="black"
            />
          </a>
        </div>
      </div>
      <div
        className="relative w-full h-full overflow-y-hidden"
        data-aos="fade-in"
        data-aos-once="true"
        data-aos-delay="500"
      >
        <video
          src="/Video/Pose.mp4"
          className={`absolute top-5 left-0 right-0 bottom-0 w-screen h-screen object-bottom ${
            isSmallScreen ? "object-contain" : "object-cover"
          }`}
          autoPlay
          muted
          loop
          playsInline
          loading="lazy"
        />
        <div className="bottom-0 absolute bg-gradient-to-t from-black w-full h-[70%] shadow-lg shadow-black"></div>
      </div>
      <div
        className=" invisible lg:visible absolute -right-36 overflow-x-clip pl-[8rem]"
        data-aos="slide-left"
        data-aos-once="true"
        data-aos-delay="600"
      >
        <div className="relative Wheel font-normal mt-8">
          <div className=" absolute border-8 border-white -m-4 w-[30rem] h-[29rem] rounded-full"></div>
          <div className="WheelInner rounded-full w-80">
            <img
              className="WheelImage border-8 rounded-full"
              alt="Profile"
              src="/Social_profile.png"
              loading="lazy"
            />
            <ol className="WheelList">
              <li className="WheelItem shadow-lg shadow-white">
                <div className="WheelItemInner">
                  <a
                    className="WheelLink"
                    href="https://www.instagram.com/manitejarao.gurenka/"
                  >
                    <span className="WheelIcon p-3 rounded-ful">
                      <FaInstagram
                        size={50}
                        className=" bg-white p-1 rounded-full"
                        color="#e1306c"
                      />
                    </span>
                  </a>
                </div>
              </li>
              <li className="WheelItem shadow-lg shadow-white">
                <div className="WheelItemInner">
                  <a
                    className="WheelLink"
                    href="https://www.youtube.com/channel/UCCG6BUMTVsGhxmUsTpLKkCQ"
                  >
                    <span className="WheelIcon p-3 rounded-ful">
                      <FaYoutube
                        size={50}
                        className=" bg-white p-1 rounded-full"
                        color="red"
                      />
                    </span>
                  </a>
                </div>
              </li>
              <li className="WheelItem shadow-lg shadow-white">
                <div className="WheelItemInner">
                  <a
                    className="WheelLink"
                    href="https://www.linkedin.com/in/manitejagurenka/"
                  >
                    <span className="WheelIcon  p-3 rounded-ful">
                      <BsLinkedin
                        size={50}
                        className=" bg-white p-1 rounded-full"
                        color="blue"
                      />
                    </span>
                  </a>
                </div>
              </li>
              <li className="WheelItem shadow-lg shadow-white">
                <div className="WheelItemInner">
                  <a className="WheelLink" href="https://x.com/Gurenkamaniteja">
                    <span className="WheelIcon  p-3 rounded-ful">
                      <FaTwitter
                        size={50}
                        className=" bg-white p-1 rounded-[45%]"
                        color="#1DA1F2"
                      />
                    </span>
                  </a>
                </div>
              </li>

              <li className="WheelItem shadow-lg shadow-white">
                <div className="WheelItemInner">
                  <a
                    className="WheelLink"
                    href="https://github.com/ManitejaraoGurenka"
                  >
                    <span className="WheelIcon  p-3 rounded-ful">
                      <FaGithub
                        size={50}
                        className="bg-white p-1 rounded-full"
                        color="black"
                      />
                    </span>
                  </a>
                </div>
              </li>
              <li className="WheelItem shadow-lg shadow-white">
                <div className="WheelItemInner">
                  <a
                    className="WheelLink"
                    href="https://leetcode.com/manitejaraogurenka/"
                  >
                    <span className="WheelIcon  p-3 rounded-ful">
                      <SiLeetcode
                        size={50}
                        className=" bg-white p-1 rounded-full"
                        color="#FEA016"
                      />
                    </span>
                  </a>
                </div>
              </li>
              <li className="WheelItem shadow-lg shadow-white">
                <div className="WheelItemInner">
                  <a
                    className="WheelLink"
                    href="https://t.me/manitejaraogurenka"
                  >
                    <span className="WheelIcon  p-3 rounded-ful">
                      <FaTelegram
                        size={50}
                        className=" bg-white p-1 rounded-full"
                        color="#0088cc"
                      />
                    </span>
                  </a>
                </div>
              </li>
              <li className="WheelItem shadow-lg shadow-white">
                <div className="WheelItemInner">
                  <a className="WheelLink" href="/">
                    <span className="WheelIcon  p-3 rounded-ful">
                      <TiSocialFacebook
                        size={50}
                        className=" bg-white p-1 rounded-full"
                        color="blue"
                      />
                    </span>
                  </a>
                </div>
              </li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
