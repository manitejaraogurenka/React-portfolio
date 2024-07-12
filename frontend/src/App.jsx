import React, { useEffect, useRef } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Skills from "./pages/Skills";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";
import Cursor from "./components/Cursor";
import useIntersectionObserver from "./utils/useIntersectionObserver";
import { useDispatch } from "react-redux";
import { navbarActions } from "./store/navbarSlice";
import { Toaster } from "react-hot-toast";
import Preloader from "./components/PreLoader";
import usePreload from "./utils/usePreload";

function App() {
  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 700,
      easing: "ease-in",
      delay: 100,
    });
  }, []);

  const dispatch = useDispatch();
  const timeoutRef = useRef(null);

  const handleIntersection = (id) => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    timeoutRef.current = setTimeout(() => {
      dispatch(
        navbarActions.setSelected(id.charAt(0).toUpperCase() + id.slice(1))
      );
    }, 300);
  };

  const options = {
    root: null,
    rootMargin: "0px",
    threshold: 0.8,
  };

  const homeRef = useIntersectionObserver(
    () => handleIntersection("home"),
    options
  );
  const aboutRef = useIntersectionObserver(
    () => handleIntersection("about"),
    options
  );
  const skillsRef = useIntersectionObserver(
    () => handleIntersection("skills"),
    options
  );
  const portfolioRef = useIntersectionObserver(
    () => handleIntersection("portfolio"),
    options
  );
  const contactRef = useIntersectionObserver(
    () => handleIntersection("contact"),
    options
  );

  const filesToPreload = [
    "/cursor.cur",
    "/Resume Maniteja Gurenka.docx",
    "/Audio/CircularMenu.mp3",
    "/Audio/Email_sent.mp3",
    "/Audio/Lang_select.mp3",
    "/Audio/My_name_is_maniteja_Gurenka.mp3",
    "/Audio/Navbar_select.mp3",
    "/Audio/Skill_choose.mp3",
  ];

  const { isLoaded, hasError } = usePreload(filesToPreload);

  if (hasError) {
    return <div>Error loading resources. Please try again later.</div>;
  }

  if (!isLoaded) {
    return <Preloader />;
  }

  return (
    <Router>
      <div className="bg-black h-screen w-screen">
        <Cursor />
        <Toaster position="bottom-left" reverseOrder={false} />
        <Navbar />
        <div id="home" ref={homeRef}>
          <Home />
        </div>
        <div id="about" ref={aboutRef}>
          <About />
        </div>
        <div id="skills" ref={skillsRef}>
          <Skills />
        </div>
        <div id="portfolio" ref={portfolioRef}>
          <Portfolio />
        </div>
        <div id="contact" ref={contactRef}>
          <Contact />
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
