import React, { useState } from "react";
import "../styles/CircularMenu.css";
import styles from "../styles/LogoTitle.module.css";
import { useDispatch, useSelector } from "react-redux";
import { navbarActions } from "../store/navbarSlice";
import { tranmenu } from "../utils/translateText";

const CircularMenu = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const audio = new Audio("/Audio/Navbar_select.mp3");
  const audio1 = new Audio("/Audio/CircularMenu.mp3");

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
    if (!menuOpen) {
      setTimeout(() => {
        audio1.play();
      }, 100);
    }
  };
  const { lang } = useSelector((state) => state.language);

  const dispatch = useDispatch();
  const selectedItem = (itemName, index) => {
    audio.play();
    scrollToSection(menuItems[index]["link"]);
    dispatch(navbarActions.setSelected(itemName));
  };

  const menuItems = [
    { name: tranmenu(lang)[0], link: "contact", circleClass: "circle-one" },
    {
      name: tranmenu(lang)[1],
      link: "portfolio",
      circleClass: "circle-four",
    },
    { name: tranmenu(lang)[2], link: "skills", circleClass: "circle-two" },
    { name: tranmenu(lang)[3], link: "about", circleClass: "circle-three" },
    { name: tranmenu(lang)[4], link: "home", circleClass: "circle-five" },
  ];

  return (
    <>
      <div className="absolute top-4 left-4 z-50 select-none">
        <div className="font-Orbitron w-9 flex items-center text-3xl font-bold gap-1">
          <img
            src="/Logo.png"
            loading="lazy"
            className="border-2 rounded-full"
            alt="Logo"
          />
          <div className={`${styles.environment}`}></div>
          <h2
            className={`${styles.hero} ${styles.glitch} ${styles.layers} bg-opacity-0 bg-white bg-blur-lg backdrop-blur-md rounded-md`}
            data-text="MG"
          >
            <span>MG</span>
          </h2>
        </div>
      </div>

      <div>
        <div
          className={`bars ${menuOpen ? "active" : ""}`}
          id="nav-action"
          onClick={toggleMenu}
        >
          <span className="bar barspan"></span>
        </div>
      </div>

      <nav id="nav" className={menuOpen ? "visible" : ""}>
        <ul className="font-Orbitron text-md" onClick={toggleMenu}>
          {menuItems.map((item, index) => (
            <li
              key={index}
              className={`shape-circle ${item.circleClass} cursor-pointer`}
              onClick={() => selectedItem(item.name, index)}
            >
              <span>{item.name}</span>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
};

export default CircularMenu;
