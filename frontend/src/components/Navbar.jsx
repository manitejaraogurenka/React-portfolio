import React, { useEffect, useState } from "react";
import styles from "../styles/LogoTitle.module.css";
import { navbarActions } from "../store/navbarSlice";
import { useDispatch, useSelector } from "react-redux";
import CircularMenu from "./CircularMenu";
import { IoLanguageSharp } from "react-icons/io5";
import LanguageModal from "./LanguageModal.jsx";
import { trannav } from "../utils/translateText.js";

const Navbar = () => {
  const { selected } = useSelector((state) => state.navbar);
  const { lang } = useSelector((state) => state.language);
  const dispatch = useDispatch();
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth <= 900);
  const audio = new Audio("/Audio/Navbar_select.mp3");

  const menu = ["Home", "About", "Skills", "Portfolio", "Contact"];

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const selectedItem = (itemName, index) => {
    scrollToSection(menu[index].toLowerCase());
    audio.play();
    dispatch(navbarActions.setSelected(itemName));
  };

  useEffect(() => {
    const handleResize = () => setIsSmallScreen(window.innerWidth <= 900);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const gradientStyle = {
    background: "linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab)",
    backgroundSize: "400% 400%",
    animation: "gradientbutton 15s ease infinite",
  };

  const styled =
    "border-b-2 border-blue-500 rounded-3xl shadow-blue-500 shadow-md text-blue-300 bg-black";

  return (
    <header>
      {isSmallScreen ? (
        <>
          <LanguageModal>
            <span
              className="absolute z-50 right-16 top-4 active:scale-95 py-2.5 px-2.5 ml-1 cursor-pointer rounded-full"
              style={gradientStyle}
            >
              <IoLanguageSharp color="white" />
            </span>
          </LanguageModal>
          <CircularMenu selected={selected} selectedItem={selectedItem} />
        </>
      ) : (
        <nav
          className="absolute z-[100] w-screen flex bg-transparent justify-between px-6 py-4 items-center text-white select-none overflow-clip"
          data-aos="fade-in"
          data-aos-once="true"
        >
          <div className="font-Orbitron w-9 flex items-center text-3xl font-bold gap-1">
            <img
              src="/Logo.png"
              className="border-2 rounded-full"
              loading="lazy"
            />
            <div className={styles.environment}></div>
            <h2
              className={`${styles.hero} ${styles.glitch} ${styles.layers} bg-opacity-0 bg-white bg-blur-lg backdrop-blur-md rounded-md`}
              data-text="MG"
            >
              <span>MG</span>
            </h2>
          </div>
          <ul className="flex gap-1 font-semibold font-Orbitron bg-opacity-0 bg-white bg-blur-lg backdrop-blur-md backdrop-filter rounded-full py-2 px-4">
            {trannav(lang).map((item, index) => (
              <span
                key={item}
                onClick={() => {
                  if (selected !== menu[index]) {
                    selectedItem(item, index);
                  }
                }}
              >
                <li
                  className={`active:scale-95 py-1.5 px-4 cursor-pointer ${
                    selected === menu[index] && styled
                  }`}
                >
                  {item}
                </li>
              </span>
            ))}
            <LanguageModal>
              <li
                className="active:scale-95 py-2.5 px-2.5 ml-1 cursor-pointer rounded-full"
                style={gradientStyle}
              >
                <IoLanguageSharp color="white" />
              </li>
            </LanguageModal>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Navbar;
