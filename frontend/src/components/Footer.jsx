import React, { useEffect } from "react";
import { FaYoutube, FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { navbarActions } from "../store/navbarSlice";
import { motion } from "framer-motion";

const FooterLinks = [
  { title: "Home", id: "home" },
  { title: "About", id: "about" },
  { title: "Skills", id: "skills" },
  { title: "Portfolio", id: "portfolio" },
  { title: "Contact", id: "contact" },
];

const Footer = () => {
  const dispatch = useDispatch();

  const handleIntersection = (id) => {
    dispatch(
      navbarActions.setSelected(id.charAt(0).toUpperCase() + id.slice(1))
    );
  };

  const options = {
    root: null,
    rootMargin: "0px",
    threshold: 0.7,
  };

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          handleIntersection(entry.target.id);
        }
      });
    }, options);

    FooterLinks.forEach(({ id }) => {
      const section = document.getElementById(id);
      if (section) {
        observer.observe(section);
      }
    });

    return () => {
      FooterLinks.forEach(({ id }) => {
        const section = document.getElementById(id);
        if (section) {
          observer.unobserve(section);
        }
      });
    };
  }, []);

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="text-white bg-black min-h-[200px] w-screen px-4">
      <div className="bg-black/40">
        <div className=" flex flex-wrap items-center justify-around">
          <div className="py-4 px-4">
            <h1 className="text-xl font-semibold sm:text-left mb-3">
              Quick Links
            </h1>
            <ul className="flex flex-wrap gap-4">
              {FooterLinks.map((data, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection(data.id)}
                    className="inline-block hover:scale-105 duration-200"
                  >
                    {data.title}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          <div className="py-4 px-4">
            <h1 className="text-xl font-semibold sm:text-left mb-3">Address</h1>
            <div>
              <p>Kukatpally, Hyderabad, Telangana, India</p>
              <p className="text-sm">+91 1234567890</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center">
          <div className="space-x-2 mt-6">
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="inline-block"
            >
              <a
                href="https://www.youtube.com/channel/UCCG6BUMTVsGhxmUsTpLKkCQ"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaYoutube className="text-3xl inline-block" size={40} />
              </a>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="inline-block"
            >
              <a
                href="https://www.instagram.com/manitejarao.gurenka/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram className="text-3xl inline-block" />
              </a>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="inline-block"
            >
              <a
                href="https://www.linkedin.com/in/manitejaraogurenka/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin className="text-3xl inline-block" />
              </a>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="inline-block"
            >
              <a
                href="https://github.com/ManitejaraoGurenka"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub className="text-3xl inline-block" size={30} />
              </a>
            </motion.div>
          </div>
          <p className="py-2 text-center">
            Copyright &copy; 2024 Manitejarao Gurenka. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
